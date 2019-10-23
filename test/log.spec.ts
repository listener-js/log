import expect from "expect"
import { load, reset } from "@listener-js/listener"
import log from "../src/log"

class Test {
  public hi(lid: string[]): string[] {
    return lid
  }
}

const t = new Test()

beforeEach(() => {
  reset([])
  load([], { log, t })
})

it("log", (): void => {
  log.logLevel([], "internal")
  log.debug([], "what up")
  log.log([], "internal")
  log.log(["p1"], "error")
  log.info(["p1", "p2"], "hi")
  log.log([], "warn", "hi")
  log.log([], "anything")
  log.log([])
  log.internal([])
  log.log([], "trace", {
    array: [],
    object: {},
    string: "string",
  })
  log.log([], "debug", ["a", 1, true])
  log.error([], "this is a string that is longer than 20")
})

it("log any event at log level debug", (): void => {
  log.logLevel([], "debug")
  t.hi(["test", "id"])
})

it("set log level for specific event names", (): void => {
  log.logLevel([], "t.hi", "info")
  t.hi(["test", "id"])
})

it("set log filter", (): void => {
  log.filter = log["getFilter"]("debug:ids:t.hi")
  expect(log.filter).toBe("t.hi")
  t.hi(["should", "see", "this"])
  log.log([], "debug", "SHOULDN'T SEE THIS")
})
