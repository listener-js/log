import { EventId, listener, listen } from "@listener-js/listener"

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

  public static log(
    id: EventId,
    level?: string,
    ...value: any[]
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

  public static logAny(
    id: EventId,
    ...value: any[]
  ): void {
    if (id.indexOf("Log.log") > -1 || id.indexOf("Log.logEvent") > -1) {
      return
    }
    const root = id[id.length - 3] as string
    const level = Log.eventLevels[root] ?
      Log.eventLevels[root] :
      "debug"
    this.logEvent(id.slice(0, -1), level, ...value)
  }

  public static logEvent(
    id: EventId,
    level: string,
    ...value: any[]
  ): void {
    // console.log(id)
    const slicedId = id.slice(0, -2) as string[]
    level = this.isLevel(level) ? level : "info"
    if (
      Log.levels.indexOf(level) <
      Log.levels.indexOf(Log.defaultLevel)
    ) {
      return
    }
    // eslint-disable-next-line no-console
    console.log(
      Log.levelEmojis[level] + Log.levelSpaces[level],
      `${id[id.length - 2]}(${slicedId.join(", ")})`,
      ...this.summarize(value)
    )
  }

  public static logLevel(id: EventId, level: string): void {
    if (this.isLevel(level)) {
      const root = id[id.length - 2] as string
      if (root) {
        Log.eventLevels[root] = level
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
      if (type === "object" && v !== null) {
        const types = Object.keys(v).map(
          (k: string): string => `${k}: [${typeof v[k]}]`
        )
        return `{ ${types.join(", ")} }`
      } else if (type === "string") {
        return v
      } else {
        return type
      }
    })
  }
}

Log.defaultLevel = Log.isLevel(process.env.LOG) ? process.env.LOG : "info"

listener(Log, "Log", "log", "logAny", "logEvent", "logLevel")
listen("*", "Log.logAny")
