// 子输入
export default (str) => {
    let arr = []
    let match = (s) => {
        let j = s.match(/^(0+|1+)/)[0]
        // 按位异或（^） 对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0
        let o = (j[0] ^ 1).toString().repeat(j.length)
        let reg = new RegExp(`^(${j}${o})`)
        if (reg.test(s)) {
            return RegExp.$1
        } else {
            return ''
        }
    }
    for (let i = 0; i < str.length - 1; i++) {
        let r = match(str.slice(i))
        if (r) arr.push(r)
    }
    return arr
}
