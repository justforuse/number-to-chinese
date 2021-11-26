# Number To Chinese

This is a js library that help you to transform number to chinese.

## Install

```
npm i @codog/number-to-chinese
```

It provide two useful functions: `numberToChinese` and `getChineseNumberList`

`numberToChinese` is transform single number.

```js
import { numberToChinese } from '@codog/number-to-chinese'

console.log(numberToChinese(1)) // Output: '一'
```

`getChineseNumberList` well provide a list of chinese number so you not need to iterate the `numberToChinese` function.

```js
import { getChineseNumberList } from '@codog/number-to-chinese'

console.log(getChineseNumberList(3)) // Output: ['一', '二', '三']
```
