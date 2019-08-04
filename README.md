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

There are five log levels: `trace`, `debug`, `info`, `warn`, and `error`.

By default, the logger only logs messages at log level `info` or above, but you can change that:

```js
emit.logLevel([], "debug")
```

You could also set the environment variable `LOG=debug`.

## Listener log level

You can also set log levels for specific listener functions:

```js
emit.logLevel([], "MyClass.myFn", "info")
```

## Log strategies

There are three log strategies: `default`, `args`, and `summary`.

Set the strategy via the `LOG` environment variable.

To set the strategy and level, separate them with a colon (`:`):

```bash
LOG=trace:args npm test
```
