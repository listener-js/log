> **[@listener-js/log](../README.md)**

[Globals](../globals.md) / ["log"](../modules/_log_.md) / [Log](_log_.log.md) /

# Class: Log

## Hierarchy

* **Log**

## Index

### Properties

* [defaultLevel](_log_.log.md#static-defaultlevel)
* [eventLevels](_log_.log.md#static-eventlevels)
* [levels](_log_.log.md#static-levels)
* [listeners](_log_.log.md#static-listeners)
* [strategies](_log_.log.md#static-strategies)
* [strategy](_log_.log.md#static-strategy)

### Methods

* [all](_log_.log.md#static-all)
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

Defined in log.ts:8

___

### `Static` levels

▪ **levels**: *string[]* = 
    ["trace", "debug", "info", "warn", "error"]

Defined in log.ts:26

___

### `Static` listeners

▪ **listeners**: *string[]* = 
    ["all", "log", "logEvent", "logLevel"]

Defined in log.ts:29

___

### `Static` strategies

▪ **strategies**: *string[]* = 
    ["args", "default", "summary"]

Defined in log.ts:32

___

### `Static` strategy

▪ **strategy**: *string* = "default"

Defined in log.ts:6

## Methods

### `Static` all

▸ **all**(`id`: string[], ...`value`: any[]): *void*

Defined in log.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Static` getLevel

▸ **getLevel**(`level`: string): *string*

Defined in log.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *string*

___

### `Static` getStrategy

▸ **getStrategy**(`strategy`: string): *string*

Defined in log.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *string*

___

### `Static` isLevel

▸ **isLevel**(`level`: string): *boolean*

Defined in log.ts:164

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

### `Static` isStrategy

▸ **isStrategy**(`strategy`: string): *boolean*

Defined in log.ts:168

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *boolean*

___

### `Static` listen

▸ **listen**(`listener`: `Listener`, `options`: `Record<string, any>`): *void*

Defined in log.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`listener` | `Listener` |
`options` | `Record<string, any>` |

**Returns:** *void*

___

### `Static` log

▸ **log**(`id`: string[], `level?`: string, ...`value`: any[]): *void*

Defined in log.ts:87

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

Defined in log.ts:104

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

Defined in log.ts:142

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level` | string |

**Returns:** *void*

▸ **logLevel**(`id`: string[], `fnId`: string, `level`: string): *void*

Defined in log.ts:144

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

Defined in log.ts:172

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

## Object literals

### `Static` levelEmojis

### ▪ **levelEmojis**: *object*

Defined in log.ts:10

###  debug

• **debug**: *string* = "🐛"

Defined in log.ts:11

###  error

• **error**: *string* = "🛑"

Defined in log.ts:12

###  info

• **info**: *string* = "ℹ️"

Defined in log.ts:13

###  trace

• **trace**: *string* = "💻"

Defined in log.ts:14

###  warn

• **warn**: *string* = "⚠️"

Defined in log.ts:15

___

### `Static` levelSpaces

### ▪ **levelSpaces**: *object*

Defined in log.ts:18

###  debug

• **debug**: *string* = ""

Defined in log.ts:19

###  error

• **error**: *string* = ""

Defined in log.ts:20

###  info

• **info**: *string* = " "

Defined in log.ts:21

###  trace

• **trace**: *string* = ""

Defined in log.ts:22

###  warn

• **warn**: *string* = " "

Defined in log.ts:23