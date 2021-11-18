const numberChar = new Map([
  ['0', '零'],
  ['1', '一'],
  ['2', '二'],
  ['3', '三'],
  ['4', '四'],
  ['5', '五'],
  ['6', '六'],
  ['7', '七'],
  ['8', '八'],
  ['9', '九'],
  ['10', '十'],
  ['2l', '十'],
  ['3l', '百'],
  ['4l', '千'],
  ['5l', '万'],
  ['6l', '十万']
])

function getChineseNumberList(length) {
  console.log(length)
  const result = []
  Array(length)
    .fill(1)
    .map((i, index) => index + 1)
    .forEach(item => {
      // 数字字符串打散
      result.push(numberToChinese(String(item)))
    })
  console.log(result)
}

/**
 * 数字转为中文字符串
 * @param {string} item 数值字符串
 */
export default function numberToChinese(item, hasZero = false, loop = false) {
  if (!loop && typeof item !== 'number') return null;
  const splittedNumber = String(+item).split('')
  // 中文数字汉字数组
  let resultStr = []
  // 10~19单独处理
  if (splittedNumber.length === 2 && splittedNumber[0] === '1') {
    resultStr = [
      loop ? '一十': '十',
      splittedNumber[1] === '0' ? '' : numberChar.get(splittedNumber[1])
    ]
  } else {
    // eslint-disable-next-line no-plusplus
    const m = splittedNumber.length
    if (m === 1) {
      // 最后一位数字
      if (+item !== 0) {
        resultStr = [hasZero ? '零' : '', `${numberChar.get(splittedNumber[0])}`]
      }
    } else {
      // 大于1位数字 234 => ['34']
      const restNumber = splittedNumber.slice(1)
      const temp = [
        hasZero ? '零' : '',
        numberChar.get(splittedNumber[0]) + numberChar.get(`${m}l`),
        +(restNumber.join('')) === 0 ? '' : numberToChinese(restNumber.join(''), restNumber[0] === '0', true)
      ]
      resultStr = temp
    }
  }

  return resultStr.join('')
}
