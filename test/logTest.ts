import { EventId, listener } from "@listener-js/listener"
import { Log } from "../"

class Test {
  public static hi(id: EventId) {}
}

listener(Test, "Test", "hi")

test("log", (): void => {
  Log.logLevel(null, "trace")
  Log.log(null, "debug")
  Log.log("p1", "error")
  Log.log(["p1", "p2"], "info", "hi")
  Log.log(null, "warn", "hi")
  Log.log(null, "anything")
  Log.log(null)
  Log.log(null, "debug", { key: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 } })
})

test("log any event at log level debug", (): void => {
  Log.logLevel(null, "debug")
  Test.hi(["test", "id"])
})

test("set log level for specific event names", (): void => {
  Log.logLevel("Test.hi", "info")
  Test.hi(["test", "id"])
})
