// let even = [1,3,5,7,9]
// let filters = even.map(value => value + 1)
// // console.log(filters)

// let array = [];
// for(let i=0; i<even.length; i++){
//     array.push(even[i] + 1)
// }
// console.log(array)


let arrayElement = [33,50,79, 78, 90, 101 , 30];
// let arrays = arrayElement.filter((value) => {
//         let values =  10;
//         return value % values === 0;
// })
// console.log(arrays)
// find
let arrays = arrayElement.find((value) => {
        let values =  10;
        return value % values === 0;
})
console.log(arrays)