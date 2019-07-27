import { listener } from "@listener-js/listener"
import { Log } from "../"

class Test {
  public static listeners = ["hi"]

  public static hi(id: string[]): string[] {
    return id
  }
}

listener({ Log, Test }, { logAll: true })

test("log", (): void => {
  Log.logLevel([], "trace")
  Log.log([], "debug")
  Log.log(["p1"], "error")
  Log.log(["p1", "p2"], "info", "hi")
  Log.log([], "warn", "hi")
  Log.log([], "anything")
  Log.log([])
  Log.log([], "debug", { array: [], object: {}, string: "string" })
})

test("log any event at log level debug", (): void => {
  Log.logLevel([], "debug")
  Test.hi(["test", "id"])
})

test("set log level for specific event names", (): void => {
  Log.logLevel([], "Test.hi", "info")
  Test.hi(["test", "id"])
})
