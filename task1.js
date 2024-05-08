const arr = [1, 2, 3, 4, 5, 0, null, null, null]
function getAnalysisArray() {
    let even = 0
    let odd = 0
    let zero = 0
    let nl = 0
    for (let i of arr) {
        if(i !== 0 && i !== null) {
            if(i % 2 === 0) {
                even++
            }else {
                odd++
            }
        } else if(i === 0) {
            zero++
        } else if(i === null) {
            nl++
        }
    }
    console.log("В массиве четных чисел: " +even)
    console.log("В массиве нечетных чисел: " +odd)
    console.log("В массиве кол-во нулей = " +zero)
    console.log("В массиве кол-во null = " +nl)
}
getAnalysisArray()