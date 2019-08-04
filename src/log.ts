import { Listener } from "@listener-js/listener"

export class Log {
  public static defaultLevel: string = "info"

  public static eventLevels: Record<string, string> = {}

  public static levelEmojis: Record<string, string> = {
    debug: "🐛",
    error: "🛑",
    info: "ℹ️",
    trace: "💻",
    warn: "⚠️",
  }

  public static levelSpaces: Record<string, string> = {
    debug: "",
    error: "",
    info: " ",
    trace: "",
    warn: " ",
  }

  public static levels: string[] =
    ["trace", "debug", "info", "warn", "error"]
  
  public static listeners: string[] =
    ["all", "log", "logEvent", "logLevel"]

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
    level = this.isLevel(level) ? level : "info"

    if (
      Log.levels.indexOf(level) <
      Log.levels.indexOf(Log.defaultLevel)
    ) {
      return
    }

    slicedId[0] += `(${this.summarize(value).join(", ")})`

    // eslint-disable-next-line no-console
    console.log(
      Log.levelEmojis[level] + Log.levelSpaces[level],
      slicedId.join("\x1b[90m ⇦ \x1b[0m"),
    )

    if (fnId === "Log.log" && value.length)  {
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

  public static summarize(arr: any[]): string[] {
    return arr.map((v: any): any => {
      const type = typeof v

      if (v === null) {
        return "null"
      } else if (Array.isArray(v)) {
        const types = Object.keys(v).map(
          (k: string): string => `[${typeof v[k]}]`
        )
        return `[ ${types.join(", ")} ]`
      } else if (type === "object") {
        const types = Object.keys(v).map(
          (k: string): string => `${k}: [${typeof v[k]}]`
        )
        return `{ ${types.join(", ")} }`
      } else if (type === "string") {
        if (v.length > 20) {
          return "[string]"
        }
        return v
      } else {
        return type
      }
    })
  }
}

Log.defaultLevel = Log.isLevel(process.env.LOG) ?
  process.env.LOG : "info"
