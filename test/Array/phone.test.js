import phone from '../../src/Array/phone'

test('phone combination', () => {
    expect(phone('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('phone combination(01)', () => {
    expect(phone('01')).toEqual([''])
})

test('phone combination(234)', () => {
    expect(phone('234')).toEqual(['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi'])
})
