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
* [id](_log_.log.md#id)
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
* [listenerBindings](_log_.log.md#private-listenerbindings)
* [listenerReset](_log_.log.md#listenerreset)
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

Defined in log.ts:42

**Returns:** *[Log](_log_.log.md)*

## Properties

###  defaultLevel

• **defaultLevel**: *string* = "info"

Defined in log.ts:8

___

###  eventLevels

• **eventLevels**: *Record‹string, string›*

Defined in log.ts:14

___

### `Optional` filter

• **filter**? : *string*

Defined in log.ts:10

___

###  id

• **id**: *string*

Defined in log.ts:9

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

Defined in log.ts:33

___

###  listener

• **listener**: *Listener*

Defined in log.ts:11

___

###  strategies

• **strategies**: *string[]* =  ["args", "argsJson", "ids"]

Defined in log.ts:42

___

###  strategy

• **strategy**: *string* = "ids"

Defined in log.ts:12

## Methods

###  all

▸ **all**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  debug

▸ **debug**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  error

▸ **error**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Private` getFilter

▸ **getFilter**(`filter`: string): *string*

Defined in log.ts:186

**Parameters:**

Name | Type |
------ | ------ |
`filter` | string |

**Returns:** *string*

___

### `Private` getLevel

▸ **getLevel**(`level`: string): *string*

Defined in log.ts:200

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *string*

___

### `Private` getStrategy

▸ **getStrategy**(`strategy`: string): *string*

Defined in log.ts:216

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *string*

___

###  info

▸ **info**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  internal

▸ **internal**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Private` isLevel

▸ **isLevel**(`level`: string): *boolean*

Defined in log.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

### `Private` listenerBindings

▸ **listenerBindings**(`lid`: string[], `__namedParameters`: object): *ListenerBindings*

Defined in log.ts:236

**Parameters:**

▪ **lid**: *string[]*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | any |

**Returns:** *ListenerBindings*

___

###  listenerReset

▸ **listenerReset**(`lid`: string[]): *void*

Defined in log.ts:245

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |

**Returns:** *void*

___

###  log

▸ **log**(`lid`: string[], `level?`: string, ...`value`: any[]): *void*

Defined in log.ts:84

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

Defined in log.ts:103

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

Defined in log.ts:160

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`level` | string |

**Returns:** *void*

▸ **logLevel**(`lid`: string[], `fnId`: string, `level`: string): *void*

Defined in log.ts:162

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

Defined in log.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`o` | any |

**Returns:** *string*

___

### `Private` summarize

▸ **summarize**(`arr`: any[]): *string[]*

Defined in log.ts:271

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

___

###  trace

▸ **trace**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

___

###  warn

▸ **warn**(`lid`: string[], ...`value`: any[]): *void*

Defined in log.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`...value` | any[] |

**Returns:** *void*

## Object literals

###  levelEmojis

### ▪ **levelEmojis**: *object*

Defined in log.ts:15

###  debug

• **debug**: *string* = "🐛"

Defined in log.ts:16

###  error

• **error**: *string* = "🛑"

Defined in log.ts:17

###  info

• **info**: *string* = "ℹ️"

Defined in log.ts:18

###  internal

• **internal**: *string* = "⚙️"

Defined in log.ts:19

###  trace

• **trace**: *string* = "💻"

Defined in log.ts:20

###  warn

• **warn**: *string* = "⚠️"

Defined in log.ts:21

___

###  levelSpaces

### ▪ **levelSpaces**: *object*

Defined in log.ts:24

###  debug

• **debug**: *string* = ""

Defined in log.ts:25

###  error

• **error**: *string* = ""

Defined in log.ts:26

###  info

• **info**: *string* = " "

Defined in log.ts:27

###  internal

• **internal**: *string* = " "

Defined in log.ts:28

###  trace

• **trace**: *string* = ""

Defined in log.ts:29

###  warn

• **warn**: *string* = " "

Defined in log.ts:30
