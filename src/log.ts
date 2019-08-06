import { Listener } from "@listener-js/listener"

export class Log {
  public static defaultLevel: string = "info"

  public static filter?: string

  public static strategy: string = "ids"

  public static eventLevels: Record<string, string> = {}

  public static levelEmojis: Record<string, string> = {
    debug: "🐛",
    error: "🛑",
    info: "ℹ️",
    listener: "👂🏻",
    trace: "💻",
    warn: "⚠️",
  }

  public static levelSpaces: Record<string, string> = {
    debug: "",
    error: "",
    info: " ",
    listener: "",
    trace: "",
    warn: " ",
  }

  public static levels: string[] =
    ["listener", "trace", "debug", "info", "warn", "error"]
  
  public static listeners: string[] =
    ["all", "log", "logEvent", "logLevel"]
  
  public static strategies: string[] =
    ["args", "argsJson", "ids"]

  public static all(
    id: string[], ...value: any[]
  ): void {
    if (
      id.indexOf("Log.log") > -1 ||
      id.indexOf("Log.logEvent") > -1
    ) {
      return
    }

    const fnId = id[1] as string
    const level = Log.eventLevels[fnId] || "debug"

    this.logEvent(id.slice(1), level, ...value)
  }

  public static getFilter(filter: string): string {
    if (!filter) {
      return Log.filter
    }

    const filters = filter.split(":")

    for (const filter of filters) {
      if (filter.match(/\./)) {
        return filter
      }
    }
  }

  public static getLevel(level: string): string {
    if (!level) {
      return Log.defaultLevel
    }

    const levels = level.split(":")
    
    for (const level of levels) {
      if (Log.levels.indexOf(level) > -1) {
        return level
      }
    }
  }

  public static getStrategy(strategy: string): string {
    if (!strategy) {
      return Log.strategy
    }

    const strategies = strategy.split(":")
    
    for (const strategy of strategies) {
      if (Log.strategies.indexOf(strategy) > -1) {
        return strategy
      }
    }
  }

  public static listen(
    listener: Listener, options: Record<string, any>
  ): void {
    if (options.logAll) {
      listener.listen(["**"], ["Log.all"], { prepend: 1000 })
    }
  }

  public static log(
    id: string[], level?: string, ...value: any[]
  ): void {
    if (id.indexOf("Log.logEvent") > -1) {
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

  public static logEvent(
    id: string[], level: string, ...value: any[]
  ): void {
    const slicedId = id.slice(1)
    const fnId = slicedId[0]

    if (Log.filter && slicedId.indexOf(Log.filter) < 0) {
      return
    }

    level = this.isLevel(level) ? level : "info"

    if (
      Log.levels.indexOf(level) <
      Log.levels.indexOf(Log.defaultLevel)
    ) {
      return
    }

    if (Log.strategy === "args") {
      slicedId[0] += `(${this.summarize(value).join(", ")})`
    }

    if (Log.strategy === "argsJson") {
      const json = value.map(
        (v: any): string => JSON.stringify(v)
      )
      slicedId[0] += `(${json.join(", ")})`
    }

    // eslint-disable-next-line no-console
    console.log(
      Log.levelEmojis[level] + Log.levelSpaces[level],
      slicedId.join("\x1b[90m ⇦ \x1b[0m"),
    )

    if (
      value.length &&
      (
        fnId === "Log.log" ||
        Log.levels.indexOf(level) > Log.levels.indexOf("debug")
      )
    )  {
      // eslint-disable-next-line no-console
      console.log(...value)
    }
  }

  public static logLevel(id: string[], level: string): void

  public static logLevel(
    id: string[], fnId: string, level: string
  ): void
  
  public static logLevel(
    id: string[], fnId: string, level?: string
  ): void {
    if (!level) {
      level = fnId
      fnId = undefined
    }
    if (this.isLevel(level)) {
      if (fnId) {
        Log.eventLevels[fnId] = level
      } else {
        Log.defaultLevel = level
      }
    }
  }

  public static isLevel(level: string): boolean {
    return Log.levels.indexOf(level) > -1
  }

  public static isStrategy(strategy: string): boolean {
    return Log.strategies.indexOf(strategy) > -1
  }

  public static summarize(arr: any[]): string[] {
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

Log.defaultLevel = Log.getLevel(process.env.LOG)
Log.filter = Log.getFilter(process.env.LOG)
Log.strategy = Log.getStrategy(process.env.LOG)
