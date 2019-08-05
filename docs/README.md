> **[@listener-js/log](README.md)**

[Globals](globals.md) /

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
import { Log } from "@listener-js/log"

listener({ Log }, { logAll: true })
```

The `logAll` option automatically adds a global listener for logging all events.

## Call logger directly

```ts
Log.log([], "warn", "warning!")
```

## Log levels

There are six log levels: `listener`, `trace`, `debug`, `info`, `warn`, and `error`.

By default, the logger only logs messages at log level `info` or above. Change the log level through the `LOG` environment variable:

```bash
LOG=listener npm test
```

Or programmatically:

```js
Log.logLevel([], "debug")
```

## Listener log level

You can also set log levels for specific listener functions:

```js
Log.logLevel([], "MyClass.myFn", "info")
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
LOG=MyClass.myFn:args:listener npm test
```