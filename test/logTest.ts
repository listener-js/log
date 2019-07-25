import { EventId, listener } from "@listener-js/listener"
import { Log } from "../"

class Test {
  public static listeners = ["hi"]

  public static hi(id: EventId): EventId {
    return id
  }
}

listener({ Log, Test }, { logAll: true })

test("log", (): void => {
  Log.logLevel(null, "trace")
  Log.log(null, "debug")
  Log.log("p1", "error")
  Log.log(["p1", "p2"], "info", "hi")
  Log.log(null, "warn", "hi")
  Log.log(null, "anything")
  Log.log(null)
  Log.log(null, "debug", { array: [], object: {}, string: "string" })
})

test("log any event at log level debug", (): void => {
  Log.logLevel(null, "debug")
  Test.hi(["test", "id"])
})

test("set log level for specific event names", (): void => {
  Log.logLevel("Test.hi", "info")
  Test.hi(["test", "id"])
})
