// const numberToChinese = require('../src').default
import numberToChinese from '../src'

describe('Test number to chinese', function() {
  it('process number correctly', () => {
    expect(numberToChinese(1)).toBe('一')
    expect(numberToChinese(123)).toBe('一百二十三')
  })
})
