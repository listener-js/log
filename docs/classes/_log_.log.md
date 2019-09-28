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
* [listenerBind](_log_.log.md#private-listenerbind)
* [listenerLoaded](_log_.log.md#private-listenerloaded)
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

Defined in log.ts:41

**Returns:** *[Log](_log_.log.md)*

## Properties

###  defaultLevel

• **defaultLevel**: *string* = "info"

Defined in log.ts:7

___

###  eventLevels

• **eventLevels**: *Record‹string, string›*

Defined in log.ts:13

___

### `Optional` filter

• **filter**? : *string*

Defined in log.ts:9

___

###  instanceId

• **instanceId**: *string*

Defined in log.ts:8

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

Defined in log.ts:32

___

###  listener

• **listener**: *Listener*

Defined in log.ts:10

___

###  strategies

• **strategies**: *string[]* =  ["args", "argsJson", "ids"]

Defined in log.ts:41

___

###  strategy

• **strategy**: *string* = "ids"

Defined in log.ts:11

## Methods

###  all

▸ **all**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  debug

▸ **debug**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  error

▸ **error**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Private` getFilter

▸ **getFilter**(`filter`: string): *string*

Defined in log.ts:183

**Parameters:**

Name | Type |
------ | ------ |
`filter` | string |

**Returns:** *string*

___

### `Private` getLevel

▸ **getLevel**(`level`: string): *string*

Defined in log.ts:197

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *string*

___

### `Private` getStrategy

▸ **getStrategy**(`strategy`: string): *string*

Defined in log.ts:213

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *string*

___

###  info

▸ **info**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  internal

▸ **internal**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Private` isLevel

▸ **isLevel**(`level`: string): *boolean*

Defined in log.ts:229

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

### `Private` listenerBind

▸ **listenerBind**(`lid`: string[], `instanceId`: string): *ListenerBind*

Defined in log.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`instanceId` | string |

**Returns:** *ListenerBind*

___

### `Private` listenerLoaded

▸ **listenerLoaded**(`lid`: string[], `instanceId`: string): *void*

Defined in log.ts:246

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`instanceId` | string |

**Returns:** *void*

___

###  log

▸ **log**(`lid`: string[], `level?`: string, ...`value`: any[]): *void*

Defined in log.ts:81

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`level?` | string |
`...value` | any[] |

**Returns:** *void*

___

###  logEvent

▸ **logEvent**(`lid`: string[], `level`: string, ...`value`: any[]): *void*

Defined in log.ts:100

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`level` | string |
`...value` | any[] |

**Returns:** *void*

___

###  logLevel

▸ **logLevel**(`lid`: string[], `level`: string): *void*

Defined in log.ts:157

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`level` | string |

**Returns:** *void*

▸ **logLevel**(`lid`: string[], `fnId`: string, `level`: string): *void*

Defined in log.ts:159

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`fnId` | string |
`level` | string |

**Returns:** *void*

___

### `Private` stringify

▸ **stringify**(`o`: any): *string*

Defined in log.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`o` | any |

**Returns:** *string*

___

### `Private` summarize

▸ **summarize**(`arr`: any[]): *string[]*

Defined in log.ts:273

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

___

###  trace

▸ **trace**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  warn

▸ **warn**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

## Object literals

###  levelEmojis

### ▪ **levelEmojis**: *object*

Defined in log.ts:14

###  debug

• **debug**: *string* = "🐛"

Defined in log.ts:15

###  error

• **error**: *string* = "🛑"

Defined in log.ts:16

###  info

• **info**: *string* = "ℹ️"

Defined in log.ts:17

###  internal

• **internal**: *string* = "⚙️"

Defined in log.ts:18

###  trace

• **trace**: *string* = "💻"

Defined in log.ts:19

###  warn

• **warn**: *string* = "⚠️"

Defined in log.ts:20

___

###  levelSpaces

### ▪ **levelSpaces**: *object*

Defined in log.ts:23

###  debug

• **debug**: *string* = ""

Defined in log.ts:24

###  error

• **error**: *string* = ""

Defined in log.ts:25

###  info

• **info**: *string* = " "

Defined in log.ts:26

###  internal

• **internal**: *string* = " "

Defined in log.ts:27

###  trace

• **trace**: *string* = ""

Defined in log.ts:28

###  warn

• **warn**: *string* = " "

Defined in log.ts:29
