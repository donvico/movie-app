// function add (x,y){
//     return x+y
// }
// function avg (x,y){
//     return add(x,y)/2
// }
// let sum = avg(10,5)

// console.log(sum)

function convertTo (arr){
    const dearAr = arr.map(interger => {
        return parseFloat(interger.toFixed(1))
    })
    return dearAr
}
console.log(convertTo([1,3,4]));

