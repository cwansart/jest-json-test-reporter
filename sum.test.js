const sum = require('./sum')

test('succesfuly test', () => {
    expect(sum(1, 2)).toBe(3)
})

test('failed test', () => {
    expect(sum(1,1)).toBe(3)
})