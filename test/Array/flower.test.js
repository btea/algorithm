import flower from '../../src/Array/flower'

test('flower([1, 0, 0, 0, 1], 1)', () => {
    expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('flower([1, 0, 0, 0, 1], 2)', () => {
    expect(flower([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('flower([0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 4)', () => {
    expect(flower([0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 4)).toBe(true)
})