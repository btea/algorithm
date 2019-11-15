export default (arr) => {
    // 求两个数的最大公约数
    const gcd = (a, b) => {
        if (b === 0) return a
        return gcd(b, a % b)
    }
    let str = arr.sort((a, b) => a - b).join('')
    let num = str.match(/(\d+)\1|\d/g)

    while (num.length > 1) {
        let one = num.shift().length
        let two = num.shift().length
        let v = gcd(one, two)
        if (v === 1) return false
        num.unshift('0'.repeat(v))
    }
    return num.length ? num[0].length > 1 : false
}
