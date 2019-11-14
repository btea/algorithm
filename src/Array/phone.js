export default (str) => {
    const key = {
        0: [''],
        1: [''],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    str = str.split('')
    let arr = []
    for (let i = 0; i < str[i].length; i++) {
        arr.push(key[str[i]])
    }
    let combination = (one, two) => {
        let r = []
        for (let i = 0; i < one.length; i++) {
            for (let j = 0; j < two.length; j++) {
                r.push(one[i] + two[j])
            }
        }
        return r
    }
    for (let i = 0; i < arr.length; i++) {
        let r = combination(arr[0], arr[1]);
        arr.splice(0, 2, r)
        if (arr.length < 2) {
            return arr[0]
        }
    }
}
