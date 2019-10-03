import {
  Listener,
  ListenerBindings,
  ListenerEvent,
} from "@listener-js/listener"

export class Log {
  public defaultLevel = "info"
  public id: string
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

  public strategies = ["args", "argsJson", "ids"]

  public constructor() {
    this.listenerReset(["log.constructor"])
  }

  public debug(lid: string[], ...value: any[]): void {}
  public error(lid: string[], ...value: any[]): void {}
  public info(lid: string[], ...value: any[]): void {}
  public internal(lid: string[], ...value: any[]): void {}
  public trace(lid: string[], ...value: any[]): void {}
  public warn(lid: string[], ...value: any[]): void {}

  public all(lid: string[], ...value: any[]): void {
    if (
      !this.id ||
      lid.indexOf(`${this.id}.log`) > -1 ||
      lid.indexOf(`${this.id}.logEvent`) > -1
    ) {
      return
    }

    const fnId = lid[1] as string
    const regex = new RegExp(`${this.id}\\.(.+)`)
    const match = fnId.match(regex)

    let fnLevel

    if (
      match &&
      match[1] &&
      this.levels.indexOf(match[1]) > -1
    ) {
      fnLevel = match[1]
    }

    const level =
      this.eventLevels[fnId] || fnLevel || "debug"

    this.logEvent(lid.slice(1), level, ...value)
  }

  public log(
    lid: string[],
    level?: string,
    ...value: any[]
  ): void {
    if (lid.indexOf(`${this.id}.logEvent`) > -1) {
      return
    }

    if (!this.isLevel(level)) {
      if (level) {
        value.unshift(level)
      }
      level = "debug"
    }

    this.logEvent(lid, level, ...value)
  }

  public logEvent(
    lid: string[],
    level: string,
    ...value: any[]
  ): void {
    const slicedId = lid.slice(1)
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
      new RegExp(`^${this.id}\\.`)
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

  public logLevel(lid: string[], level: string): void

  public logLevel(
    lid: string[],
    fnId: string,
    level: string
  ): void

  public logLevel(
    lid: string[],
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

  private listenerBindings(
    lid: string[],
    { instance }: ListenerEvent
  ): ListenerBindings {
    return [
      [["**"], `${instance.id}.all`, { prepend: 1000 }],
    ]
  }

  public listenerReset(lid: string[]): void {
    this.defaultLevel = this.getLevel(process.env.LOG)
    this.filter = this.getFilter(process.env.LOG)
    this.strategy = this.getStrategy(process.env.LOG)
  }

  private stringify(o: any): string {
    const cache = []
    if (o === undefined) {
      return "undefined"
    }
    const string = JSON.stringify(o, (key, value): any => {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return "<circular>"
        }
        cache.push(value)
      }
      return value
    })
    if (string && string.length > 200) {
      return `<${typeof o}>`
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

export default new Log()
