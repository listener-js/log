> **[@listener-js/log](../README.md)**

[Globals](../globals.md) / ["log"](../modules/_log_.md) / [Log](_log_.log.md) /

# Class: Log

## Hierarchy

* **Log**

## Index

### Properties

* [defaultLevel](_log_.log.md#static-defaultlevel)
* [eventLevels](_log_.log.md#static-eventlevels)
* [filter](_log_.log.md#static-optional-filter)
* [levels](_log_.log.md#static-levels)
* [listeners](_log_.log.md#static-listeners)
* [strategies](_log_.log.md#static-strategies)
* [strategy](_log_.log.md#static-strategy)

### Methods

* [all](_log_.log.md#static-all)
* [getFilter](_log_.log.md#static-getfilter)
* [getLevel](_log_.log.md#static-getlevel)
* [getStrategy](_log_.log.md#static-getstrategy)
* [isLevel](_log_.log.md#static-islevel)
* [isStrategy](_log_.log.md#static-isstrategy)
* [listen](_log_.log.md#static-listen)
* [log](_log_.log.md#static-log)
* [logEvent](_log_.log.md#static-logevent)
* [logLevel](_log_.log.md#static-loglevel)
* [summarize](_log_.log.md#static-summarize)

### Object literals

* [levelEmojis](_log_.log.md#static-levelemojis)
* [levelSpaces](_log_.log.md#static-levelspaces)

## Properties

### `Static` defaultLevel

▪ **defaultLevel**: *string* = "info"

Defined in log.ts:4

___

### `Static` eventLevels

▪ **eventLevels**: *`Record<string, string>`*

Defined in log.ts:10

___

### `Static` `Optional` filter

▪ **filter**? : *string*

Defined in log.ts:6

___

### `Static` levels

▪ **levels**: *string[]* = 
    ["listener", "trace", "debug", "info", "warn", "error"]

Defined in log.ts:30

___

### `Static` listeners

▪ **listeners**: *string[]* = 
    ["all", "log", "logEvent", "logLevel"]

Defined in log.ts:33

___

### `Static` strategies

▪ **strategies**: *string[]* = 
    ["args", "argsJson", "ids"]

Defined in log.ts:36

___

### `Static` strategy

▪ **strategy**: *string* = "ids"

Defined in log.ts:8

## Methods

### `Static` all

▸ **all**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Static` getFilter

▸ **getFilter**(`filter`: string): *string*

Defined in log.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`filter` | string |

**Returns:** *string*

___

### `Static` getLevel

▸ **getLevel**(`level`: string): *string*

Defined in log.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *string*

___

### `Static` getStrategy

▸ **getStrategy**(`strategy`: string): *string*

Defined in log.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *string*

___

### `Static` isLevel

▸ **isLevel**(`level`: string): *boolean*

Defined in log.ts:200

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

### `Static` isStrategy

▸ **isStrategy**(`strategy`: string): *boolean*

Defined in log.ts:204

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *boolean*

___

### `Static` listen

▸ **listen**(`listener`: `Listener`, `options`: `Record<string, any>`): *void*

Defined in log.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`listener` | `Listener` |
`options` | `Record<string, any>` |

**Returns:** *void*

___

### `Static` log

▸ **log**(`id`: string[], `level?`: string, ...`value`: any[]): *void*

Defined in log.ts:109

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level?` | string |
`...value` | any[] |

**Returns:** *void*

___

### `Static` logEvent

▸ **logEvent**(`id`: string[], `level`: string, ...`value`: any[]): *void*

Defined in log.ts:126

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level` | string |
`...value` | any[] |

**Returns:** *void*

___

### `Static` logLevel

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

### `Static` summarize

▸ **summarize**(`arr`: any[]): *string[]*

Defined in log.ts:208

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

## Object literals

### `Static` levelEmojis

### ▪ **levelEmojis**: *object*

Defined in log.ts:12

###  debug

• **debug**: *string* = "🐛"

Defined in log.ts:13

###  error

• **error**: *string* = "🛑"

Defined in log.ts:14

###  info

• **info**: *string* = "ℹ️"

Defined in log.ts:15

###  listener

• **listener**: *string* = "👂🏻"

Defined in log.ts:16

###  trace

• **trace**: *string* = "💻"

Defined in log.ts:17

###  warn

• **warn**: *string* = "⚠️"

Defined in log.ts:18

___

### `Static` levelSpaces

### ▪ **levelSpaces**: *object*

Defined in log.ts:21

###  debug

• **debug**: *string* = ""

Defined in log.ts:22

###  error

• **error**: *string* = ""

Defined in log.ts:23

###  info

• **info**: *string* = " "

Defined in log.ts:24

###  listener

• **listener**: *string* = ""

Defined in log.ts:25

###  trace

• **trace**: *string* = ""

Defined in log.ts:26

###  warn

• **warn**: *string* = " "

Defined in log.ts:27