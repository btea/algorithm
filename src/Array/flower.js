export default (arr, n) => {
    // let v = 0
    // let i = 0
    // if (arr[0] === 0 && arr[1] === 0) {
    //     v++
    //     i++
    // }
    // for (; i < arr.length - 1; i++) {
    //     if (arr[i - 1] === 0 && arr[i + 1] === 0 && arr[i] !== 1) {
    //         v++
    //         i++
    //     }
    // }
    // if (arr[i - 1] === 0 && arr[i] === 0 && arr.length > 2) {
    //     v++
    // }
    // return v >= n

    let num = 0
    arr.push(0)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            if (i === 0 && arr[1] === 0) {
                num++
                i++
            } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                num++
                i++
            }
        }
    }
    return num >= n
}
