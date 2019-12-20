const convert = require('./convert')

test('convert 4 and 5000', () => {
    expect(convert.convert(4, 5000)).toBe(20000)
})


test('toMoney converts to float', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})