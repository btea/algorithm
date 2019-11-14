export default (str) => {
    if (!str) return []
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
    for (let i = 0; i < str.length; i++) {
        arr.push(key[str[i]])
    }
    let combination = (arr) => {
        if (arr.length <= 1) {
            return arr
        } else {
            let one = arr[0]
            let two = arr[1]
            let r = []
            for (let i = 0; i < one.length; i++) {
                for (let j = 0; j < two.length; j++) {
                    r.push(one[i] + two[j])
                }
            }
            arr.splice(0, 2, r)
            return combination(arr)
        }

        // let one = arr[0]
        // let two = arr[1]
        // if (!two) return arr
        // let r = []
        // for (let i = 0; i < one.length; i++) {
        //     for (let j = 0; j < two.length; j++) {
        //         r.push(one[i] + two[j])
        //     }
        // }
        // arr.splice(0, 2, r)
        // if (arr.length === 1) {
        //     return arr
        // } else {
        //     combination(arr)
        // }
    }
    return combination(arr)[0]
}
