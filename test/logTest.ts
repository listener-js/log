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
  Log.logLevel([], "listener")
  Log.log([], "debug")
  Log.log([], "listener")
  Log.log(["p1"], "error")
  Log.log(["p1", "p2"], "info", "hi")
  Log.log([], "warn", "hi")
  Log.log([], "anything")
  Log.log([])
  Log.log([], "trace", { array: [], object: {}, string: "string" })
  Log.log([], "debug", [ "a", 1, true ])
  Log.log([], "error", "this is a string that is longer than 20")
})

test("log any event at log level debug", (): void => {
  Log.logLevel([], "debug")
  Test.hi(["test", "id"])
})

test("set log level for specific event names", (): void => {
  Log.logLevel([], "Test.hi", "info")
  Test.hi(["test", "id"])
})

test("set log filter", (): void => {
  Log.filter = Log.getFilter("debug:ids:Test.hi")
  expect(Log.filter).toBe("Test.hi")
  Test.hi(["should", "see", "this"])
  Log.log([], "debug", "SHOULDN'T SEE THIS")
})
