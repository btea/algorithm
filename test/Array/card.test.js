import card from '../../src/Array/card'

test('card', () => {
    expect(card([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
})
