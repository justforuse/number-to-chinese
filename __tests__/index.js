import { numberToChinese, getChineseNumberList } from '../src'

describe('Test number to chinese', function() {
  it('process numberToChinese correctly', () => {
    expect(numberToChinese(1)).toBe('一')
    expect(numberToChinese(123)).toBe('一百二十三')
  })

  it('process getChineseNumberList correctly', () => {
    expect(getChineseNumberList(3)).toEqual(['一', '二', '三'])
  })
})
