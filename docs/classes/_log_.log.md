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

### Methods

* [all](_log_.log.md#static-all)
* [isLevel](_log_.log.md#static-islevel)
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

Defined in log.ts:6

___

### `Static` levels

▪ **levels**: *string[]* = 
    ["trace", "debug", "info", "warn", "error"]

Defined in log.ts:24

___

### `Static` listeners

▪ **listeners**: *string[]* = 
    ["all", "log", "logEvent", "logLevel"]

Defined in log.ts:27

## Methods

### `Static` all

▸ **all**(`id`: `EventId`, ...`value`: any[]): *void*

Defined in log.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`id` | `EventId` |
`...value` | any[] |

**Returns:** *void*

___

### `Static` isLevel

▸ **isLevel**(`level`: string): *boolean*

Defined in log.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

### `Static` log

▸ **log**(`id`: `EventId`, `level?`: string, ...`value`: any[]): *void*

Defined in log.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`id` | `EventId` |
`level?` | string |
`...value` | any[] |

**Returns:** *void*

___

### `Static` logEvent

▸ **logEvent**(`id`: `EventId`, `level`: string, ...`value`: any[]): *void*

Defined in log.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`id` | `EventId` |
`level` | string |
`...value` | any[] |

**Returns:** *void*

___

### `Static` logLevel

▸ **logLevel**(`id`: `EventId`, `level`: string): *void*

Defined in log.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`id` | `EventId` |
`level` | string |

**Returns:** *void*

___

### `Static` summarize

▸ **summarize**(`arr`: any[]): *string[]*

Defined in log.ts:105

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

## Object literals

### `Static` levelEmojis

### ▪ **levelEmojis**: *object*

Defined in log.ts:8

###  debug

• **debug**: *string* = "🐛"

Defined in log.ts:9

###  error

• **error**: *string* = "🛑"

Defined in log.ts:10

###  info

• **info**: *string* = "ℹ️"

Defined in log.ts:11

###  trace

• **trace**: *string* = "💻"

Defined in log.ts:12

###  warn

• **warn**: *string* = "⚠️"

Defined in log.ts:13

___

### `Static` levelSpaces

### ▪ **levelSpaces**: *object*

Defined in log.ts:16

###  debug

• **debug**: *string* = ""

Defined in log.ts:17

###  error

• **error**: *string* = ""

Defined in log.ts:18

###  info

• **info**: *string* = " "

Defined in log.ts:19

###  trace

• **trace**: *string* = ""

Defined in log.ts:20

###  warn

• **warn**: *string* = " "

Defined in log.ts:21