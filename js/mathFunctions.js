export function add(numbers) {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    });
    return sum
}

export function multiply(numbers) {
    let pr = 1
    numbers.forEach(number => {
        pr *= number
    })
    return pr
}
// export function divide(numbers) {
//     // numbers.forEach(number => {
//     //     number
//     // });
// }