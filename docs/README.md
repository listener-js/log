[@listener-js/log](README.md) › [Globals](globals.md)

# @listener-js/log

# @listener-js/log

Listener logger

![log](media/log.gif)

## Install

```bash
npm install @listener-js/listener @listener-js/log
```

## Enable logging

```ts
import { listener } from "@listener-js/listener"
import { log } from "@listener-js/log"

listener({ log })
```

## Call logger directly

```ts
log.log([], "warn", "warning!")
// or
log.warn([], "warning!")
```

## Log levels

There are six log levels: `internal`, `trace`, `debug`, `info`, `warn`, and `error`.

By default, the logger only logs messages at log level `info` or above. Change the log level through the `LOG` environment variable:

```bash
LOG=internal npm test
```

Or programmatically:

```js
log.logLevel([], "internal")
```

## Listener log level

You can also set log levels for specific listener functions:

```js
log.logLevel([], "MyClass.myFn", "info")
```

## Log strategies

There are three log strategies: `args`, `argsJson`, and `ids` (default).

Set the strategy via the `LOG` environment variable:

```bash
LOG=args npm test
```

To set the strategy and level, separate them with a colon (`:`):

```bash
LOG=trace:args npm test
```

Order does not matter when using the separator.

## Log filtering

Pass a listener identifier to the `LOG` environment variable to filter:

```bash
LOG=MyClass.myFn npm test
```

Add a filter, strategy, and level all at once:

```bash
LOG=MyClass.myFn:args:internal npm test
```
