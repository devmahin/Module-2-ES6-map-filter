// nested Object
const product = {
    naem : "Shart",
    data : [
        {id: 1, name : "shart 1 "},
        {id: 2, name : "T shart 1"}
    ]
}
// console.log(product.data[0])


let number = [2,3,4,5,6,7]
// console.log(number)
// for(let i=0; i<number.length; i++){
    //     console.log(number[i])
    // }
// console.log(number)



let num = number.map(v => v * 5)
// console.log(num)




let str = ["Mahin", "Alu", "Sakil", "Mula"]

for(let i = 0; i<str.length; i++){
    let name = str[i]
    let first = name.charAt(0);
    // console.log(first)
}
// let first = str.map(loop => console.log(loop[0]));



// let string = number.forEach(value => {
//     return value * 5
// })
// console.log(string)


let fil = [34,45,6,56,7]
let filters = fil.filter(val => val > 50)
// console.log(filters)

let finds = fil.find(val => val > 10);
// console.log(finds)