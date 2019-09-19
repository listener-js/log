[@listener-js/log](../README.md) › [Globals](../globals.md) › ["log"](../modules/_log_.md) › [Log](_log_.log.md)

# Class: Log

## Hierarchy

* **Log**

## Index

### Constructors

* [constructor](_log_.log.md#constructor)

### Properties

* [defaultLevel](_log_.log.md#defaultlevel)
* [eventLevels](_log_.log.md#eventlevels)
* [filter](_log_.log.md#optional-filter)
* [instanceId](_log_.log.md#instanceid)
* [levels](_log_.log.md#levels)
* [listener](_log_.log.md#listener)
* [listeners](_log_.log.md#listeners)
* [strategies](_log_.log.md#strategies)
* [strategy](_log_.log.md#strategy)

### Methods

* [all](_log_.log.md#all)
* [debug](_log_.log.md#debug)
* [error](_log_.log.md#error)
* [getFilter](_log_.log.md#private-getfilter)
* [getLevel](_log_.log.md#private-getlevel)
* [getStrategy](_log_.log.md#private-getstrategy)
* [info](_log_.log.md#info)
* [internal](_log_.log.md#internal)
* [isLevel](_log_.log.md#private-islevel)
* [listenerInit](_log_.log.md#listenerinit)
* [log](_log_.log.md#log)
* [logEvent](_log_.log.md#logevent)
* [logLevel](_log_.log.md#loglevel)
* [stringify](_log_.log.md#private-stringify)
* [summarize](_log_.log.md#private-summarize)
* [trace](_log_.log.md#trace)
* [warn](_log_.log.md#warn)

### Object literals

* [levelEmojis](_log_.log.md#levelemojis)
* [levelSpaces](_log_.log.md#levelspaces)

## Constructors

###  constructor

\+ **new Log**(): *[Log](_log_.log.md)*

Defined in log.ts:46

**Returns:** *[Log](_log_.log.md)*

## Properties

###  defaultLevel

• **defaultLevel**: *string* = "info"

Defined in log.ts:4

___

###  eventLevels

• **eventLevels**: *Record‹string, string›*

Defined in log.ts:10

___

### `Optional` filter

• **filter**? : *string*

Defined in log.ts:6

___

###  instanceId

• **instanceId**: *string*

Defined in log.ts:5

___

###  levels

• **levels**: *string[]* =  [
    "internal",
    "trace",
    "debug",
    "info",
    "warn",
    "error",
  ]

Defined in log.ts:29

___

###  listener

• **listener**: *Listener*

Defined in log.ts:7

___

###  listeners

• **listeners**: *string[]* =  [
    "all",
    "log",
    "logEvent",
    "logLevel",
    ...this.levels,
  ]

Defined in log.ts:38

___

###  strategies

• **strategies**: *string[]* =  ["args", "argsJson", "ids"]

Defined in log.ts:46

___

###  strategy

• **strategy**: *string* = "ids"

Defined in log.ts:8

## Methods

###  all

▸ **all**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  debug

▸ **debug**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  error

▸ **error**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Private` getFilter

▸ **getFilter**(`filter`: string): *string*

Defined in log.ts:204

**Parameters:**

Name | Type |
------ | ------ |
`filter` | string |

**Returns:** *string*

___

### `Private` getLevel

▸ **getLevel**(`level`: string): *string*

Defined in log.ts:218

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *string*

___

### `Private` getStrategy

▸ **getStrategy**(`strategy`: string): *string*

Defined in log.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *string*

___

###  info

▸ **info**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  internal

▸ **internal**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Private` isLevel

▸ **isLevel**(`level`: string): *boolean*

Defined in log.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

###  listenerInit

▸ **listenerInit**(`id`: string[], `instanceId`: string, `instance`: any, `instances`: Record‹string, any›, `listener`: Listener, `options?`: Record‹string, any›): *void*

Defined in log.ts:87

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`instanceId` | string |
`instance` | any |
`instances` | Record‹string, any› |
`listener` | Listener |
`options?` | Record‹string, any› |

**Returns:** *void*

___

###  log

▸ **log**(`id`: string[], `level?`: string, ...`value`: any[]): *void*

Defined in log.ts:102

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level?` | string |
`...value` | any[] |

**Returns:** *void*

___

###  logEvent

▸ **logEvent**(`id`: string[], `level`: string, ...`value`: any[]): *void*

Defined in log.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level` | string |
`...value` | any[] |

**Returns:** *void*

___

###  logLevel

▸ **logLevel**(`id`: string[], `level`: string): *void*

Defined in log.ts:178

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level` | string |

**Returns:** *void*

▸ **logLevel**(`id`: string[], `fnId`: string, `level`: string): *void*

Defined in log.ts:180

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`fnId` | string |
`level` | string |

**Returns:** *void*

___

### `Private` stringify

▸ **stringify**(`o`: any): *string*

Defined in log.ts:254

**Parameters:**

Name | Type |
------ | ------ |
`o` | any |

**Returns:** *string*

___

### `Private` summarize

▸ **summarize**(`arr`: any[]): *string[]*

Defined in log.ts:268

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

___

###  trace

▸ **trace**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  warn

▸ **warn**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

## Object literals

###  levelEmojis

### ▪ **levelEmojis**: *object*

Defined in log.ts:11

###  debug

• **debug**: *string* = "🐛"

Defined in log.ts:12

###  error

• **error**: *string* = "🛑"

Defined in log.ts:13

###  info

• **info**: *string* = "ℹ️"

Defined in log.ts:14

###  internal

• **internal**: *string* = "⚙️"

Defined in log.ts:15

###  trace

• **trace**: *string* = "💻"

Defined in log.ts:16

###  warn

• **warn**: *string* = "⚠️"

Defined in log.ts:17

___

###  levelSpaces

### ▪ **levelSpaces**: *object*

Defined in log.ts:20

###  debug

• **debug**: *string* = ""

Defined in log.ts:21

###  error

• **error**: *string* = ""

Defined in log.ts:22

###  info

• **info**: *string* = " "

Defined in log.ts:23

###  internal

• **internal**: *string* = " "

Defined in log.ts:24

###  trace

• **trace**: *string* = ""

Defined in log.ts:25

###  warn

• **warn**: *string* = " "

Defined in log.ts:26
