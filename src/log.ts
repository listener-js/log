import { Listener } from "@listener-js/listener"

export class Log {
  public defaultLevel = "info"
  public instanceId: string
  public filter?: string
  public listener: Listener
  public strategy = "ids"

  public eventLevels: Record<string, string> = {}
  public levelEmojis: Record<string, string> = {
    debug: "🐛",
    error: "🛑",
    info: "ℹ️",
    internal: "⚙️",
    trace: "💻",
    warn: "⚠️",
  }

  public levelSpaces: Record<string, string> = {
    debug: "",
    error: "",
    info: " ",
    internal: " ",
    trace: "",
    warn: " ",
  }

  public levels = [
    "internal",
    "trace",
    "debug",
    "info",
    "warn",
    "error",
  ]

  public listeners = [
    "all",
    "log",
    "logEvent",
    "logLevel",
    ...this.levels,
  ]

  public strategies = ["args", "argsJson", "ids"]

  public constructor() {
    this.defaultLevel = this.getLevel(process.env.LOG)
    this.filter = this.getFilter(process.env.LOG)
    this.strategy = this.getStrategy(process.env.LOG)
  }

  /* eslint-disable */
  public debug(id: string[], ...value: any[]): void { }
  public error(id: string[], ...value: any[]): void { }
  public info(id: string[], ...value: any[]): void { }
  public internal(id: string[], ...value: any[]): void { }
  public trace(id: string[], ...value: any[]): void { }
  public warn(id: string[], ...value: any[]): void { }
  /* eslint-enable */

  public all(id: string[], ...value: any[]): void {
    if (
      id.indexOf(`${this.instanceId}.log`) > -1 ||
      id.indexOf(`${this.instanceId}.logEvent`) > -1
    ) {
      return
    }

    const fnId = id[1] as string
    const regex = new RegExp(`${this.instanceId}\\.(.+)`)
    const match = fnId.match(regex)

    let fnLevel

    if (match && match[1]) {
      fnLevel = match[1]
    }

    const level =
      this.eventLevels[fnId] || fnLevel || "debug"

    this.logEvent(id.slice(1), level, ...value)
  }

  public listenerInit(
    id: string[],
    instanceId: string,
    instance: any,
    instances: Record<string, any>,
    listener: Listener,
    options?: Record<string, any>
  ): void {
    this.instanceId = instanceId

    if (!options || options.logAll !== false) {
      listener.listen(id, ["**"], `${instanceId}.all`, {
        prepend: 1000,
      })
    }
  }

  public log(
    id: string[],
    level?: string,
    ...value: any[]
  ): void {
    if (id.indexOf(`${this.instanceId}.logEvent`) > -1) {
      return
    }

    if (!this.isLevel(level)) {
      if (level) {
        value.unshift(level)
      }
      level = "debug"
    }

    this.logEvent(id, level, ...value)
  }

  public logEvent(
    id: string[],
    level: string,
    ...value: any[]
  ): void {
    const slicedId = id.slice(1)
    const fnId = slicedId[0]

    if (this.filter && slicedId.indexOf(this.filter) < 0) {
      return
    }

    level = this.isLevel(level) ? level : "info"

    if (
      this.levels.indexOf(level) <
      this.levels.indexOf(this.defaultLevel)
    ) {
      return
    }

    if (this.strategy === "args") {
      slicedId[0] += `(${this.summarize(value).join(", ")})`
    }

    if (this.strategy === "argsJson") {
      const json = value.map((v: any): string =>
        this.stringify(v)
      )
      slicedId[0] += `(${json.join(", ")})`
    }

    const directCall = fnId.match(
      new RegExp(`^${this.instanceId}\\.`)
    )

    let extra = []

    if (
      value.length === 1 &&
      (directCall ||
        this.levels.indexOf(level) >
          this.levels.indexOf("debug")) &&
      typeof value[0] === "string"
    ) {
      // eslint-disable-next-line no-console
      extra = [`\n   ${value[0]}`]
    }

    // eslint-disable-next-line no-console
    console.log(
      this.levelEmojis[level] + this.levelSpaces[level],
      slicedId.join("\x1b[90m ⇦ \x1b[0m"),
      ...extra
    )
  }

  public logLevel(id: string[], level: string): void

  public logLevel(
    id: string[],
    fnId: string,
    level: string
  ): void

  public logLevel(
    id: string[],
    fnId: string,
    level?: string
  ): void {
    if (!level) {
      level = fnId
      fnId = undefined
    }
    if (this.isLevel(level)) {
      if (fnId) {
        this.eventLevels[fnId] = level
      } else {
        this.defaultLevel = level
      }
    }
  }

  private getFilter(filter: string): string {
    if (!filter) {
      return this.filter
    }

    const filters = filter.split(":")

    for (const filter of filters) {
      if (filter.match(/\./)) {
        return filter
      }
    }
  }

  private getLevel(level: string): string {
    if (!level) {
      return this.defaultLevel
    }

    const levels = level.split(":")

    for (const level of levels) {
      if (this.levels.indexOf(level) > -1) {
        return level
      }
    }

    return this.defaultLevel
  }

  private getStrategy(strategy: string): string {
    if (!strategy) {
      return this.strategy
    }

    const strategies = strategy.split(":")

    for (const strategy of strategies) {
      if (this.strategies.indexOf(strategy) > -1) {
        return strategy
      }
    }

    return this.strategy
  }

  private isLevel(level: string): boolean {
    return this.levels.indexOf(level) > -1
  }

  private stringify(o: any): string {
    const cache = []
    const string = JSON.stringify(o, (key, value): any => {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return "<circular>"
        }
        cache.push(value)
      }
      return value
    })
    if (string.length > 40) {
      return this.summarize([o])[0]
    }
    return string
  }

  private summarize(arr: any[]): string[] {
    return arr.map((v: any): any => {
      const type = typeof v

      if (v === null) {
        return "null"
      } else if (Array.isArray(v)) {
        const types = Object.keys(v).map(
          (k: string): string => `<${typeof v[k]}>`
        )
        return `[ ${types.join(", ")} ]`
      } else if (type === "object") {
        const types = Object.keys(v).map(
          (k: string): string => `${k}: <${typeof v[k]}>`
        )
        return `{ ${types.join(", ")} }`
      } else if (type === "string") {
        if (v.length > 20) {
          return "<string>"
        }
        return v
      } else {
        return `<${type}>`
      }
    })
  }
}

export const log = new Log()
