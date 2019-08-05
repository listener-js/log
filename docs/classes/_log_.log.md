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

*Defined in [log.ts:4](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L4)*

___

### `Static` eventLevels

▪ **eventLevels**: *`Record<string, string>`*

*Defined in [log.ts:10](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L10)*

___

### `Static` `Optional` filter

▪ **filter**? : *string*

*Defined in [log.ts:6](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L6)*

___

### `Static` levels

▪ **levels**: *string[]* = 
    ["listener", "trace", "debug", "info", "warn", "error"]

*Defined in [log.ts:30](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L30)*

___

### `Static` listeners

▪ **listeners**: *string[]* = 
    ["all", "log", "logEvent", "logLevel"]

*Defined in [log.ts:33](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L33)*

___

### `Static` strategies

▪ **strategies**: *string[]* = 
    ["args", "argsJson", "ids"]

*Defined in [log.ts:36](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L36)*

___

### `Static` strategy

▪ **strategy**: *string* = "ids"

*Defined in [log.ts:8](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L8)*

## Methods

### `Static` all

▸ **all**(`id`: string[], ...`value`: any[]): *void*

*Defined in [log.ts:39](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`...value` | any[] |

**Returns:** *void*

___

### `Static` getFilter

▸ **getFilter**(`filter`: string): *string*

*Defined in [log.ts:55](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`filter` | string |

**Returns:** *string*

___

### `Static` getLevel

▸ **getLevel**(`level`: string): *string*

*Defined in [log.ts:70](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *string*

___

### `Static` getStrategy

▸ **getStrategy**(`strategy`: string): *string*

*Defined in [log.ts:84](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *string*

___

### `Static` isLevel

▸ **isLevel**(`level`: string): *boolean*

*Defined in [log.ts:187](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | string |

**Returns:** *boolean*

___

### `Static` isStrategy

▸ **isStrategy**(`strategy`: string): *boolean*

*Defined in [log.ts:191](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`strategy` | string |

**Returns:** *boolean*

___

### `Static` listen

▸ **listen**(`listener`: `Listener`, `options`: `Record<string, any>`): *void*

*Defined in [log.ts:98](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`listener` | `Listener` |
`options` | `Record<string, any>` |

**Returns:** *void*

___

### `Static` log

▸ **log**(`id`: string[], `level?`: string, ...`value`: any[]): *void*

*Defined in [log.ts:106](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L106)*

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

*Defined in [log.ts:123](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L123)*

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

*Defined in [log.ts:165](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`level` | string |

**Returns:** *void*

▸ **logLevel**(`id`: string[], `fnId`: string, `level`: string): *void*

*Defined in [log.ts:167](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L167)*

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

*Defined in [log.ts:195](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L195)*

**Parameters:**

Name | Type |
------ | ------ |
`arr` | any[] |

**Returns:** *string[]*

## Object literals

### `Static` levelEmojis

### ▪ **levelEmojis**: *object*

*Defined in [log.ts:12](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L12)*

###  debug

• **debug**: *string* = "🐛"

*Defined in [log.ts:13](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L13)*

###  error

• **error**: *string* = "🛑"

*Defined in [log.ts:14](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L14)*

###  info

• **info**: *string* = "ℹ️"

*Defined in [log.ts:15](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L15)*

###  listener

• **listener**: *string* = "👂🏻"

*Defined in [log.ts:16](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L16)*

###  trace

• **trace**: *string* = "💻"

*Defined in [log.ts:17](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L17)*

###  warn

• **warn**: *string* = "⚠️"

*Defined in [log.ts:18](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L18)*

___

### `Static` levelSpaces

### ▪ **levelSpaces**: *object*

*Defined in [log.ts:21](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L21)*

###  debug

• **debug**: *string* = ""

*Defined in [log.ts:22](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L22)*

###  error

• **error**: *string* = ""

*Defined in [log.ts:23](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L23)*

###  info

• **info**: *string* = " "

*Defined in [log.ts:24](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L24)*

###  listener

• **listener**: *string* = ""

*Defined in [log.ts:25](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L25)*

###  trace

• **trace**: *string* = ""

*Defined in [log.ts:26](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L26)*

###  warn

• **warn**: *string* = " "

*Defined in [log.ts:27](https://github.com/listener-js/log/blob/af524f8/src/log.ts#L27)*