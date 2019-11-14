// export default function (str) {
//     return str.split(' ').map(s => {
//         return s.split('').reverse().join('')
//     }).join(' ')
// }

// export default function (str) {
//     return str.split(/\s/g).map(s => {
//         return s.split('').reverse().join('')
//     }).join(' ')
// }

// 正则匹配

export default function (str) {
    return str.match(/[\w']+/g).map(s => {
        return s.split('').reverse().join('')
    }).join(' ')
}
