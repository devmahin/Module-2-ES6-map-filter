// nested Object
const product = {
    naem: "Shart",
    data: [
        { id: 1, name: "shart 1 " },
        { id: 2, name: "T shart 1" }
    ]
}
// console.log(product.data[0])


let number = [2, 3, 4, 5, 6, 7]
// console.log(number)
// for(let i=0; i<number.length; i++){
//     console.log(number[i])
// }
// console.log(number)



let num = number.map(v => v * 5)
// console.log(num)




let str = ["Mahin", "Alu", "Sakil", "Mula"]

for (let i = 0; i < str.length; i++) {
    let name = str[i]
    let first = name.charAt(0);
    // console.log(first)
}
// let first = str.map(loop => console.log(loop[0]));





// let filters = fil.filter(val => val > 50)
// // console.log(filters)

// let finds = fil.find(val => val > 10);
// // console.log(finds)




let string = number.forEach(value => {
    return value * 5
})
// console.log(string)


let mahin = [1, 2, 3, 4, 5];
let reduces = mahin.reduce((p, c) => p + c)
// console.log(reduces)

const top10Fruits = [
    { 
        id: 1,
        name: "Durian",
        price: 20 // price in dollars per kg
    },
    { 
        id: 2,
        name: "Saffron",
        price: 11 // price in dollars per gram
    },
    {
        id: 3,
        name: "Gold Apple",
        price: 5 // price in dollars per piece
    },
    {
        id: 4,
        name: "Pitahaya",
        price: 7 // price in dollars per piece
    },
    {
        id: 5,
        name: "Mango",
        price: 3 // price in dollars per kg
    },
    {
        id: 6,
        name: "Avocado",
        price: 2.50 // price in dollars per piece
    },
    {
        id: 7,
        name: "Lychee",
        price: 8 // price in dollars per kg
    },
    {
        id: 8,
        name: "Pomegranate",
        price: 4 // price in dollars per kg
    },
    {
        id: 9,
        name: "Blueberry",
        price: 6 // price in dollars per kg
    },
    {
        id: 10,
        name: "Dragon Fruit",
        price: 5 // price in dollars per piece
    }
];

// console.log(top10Fruits);
let productName = top10Fruits.map(arr => arr.name)
console.log(productName)

top10Fruits.forEach(id => console.log(id.id))
// console.log(filtes22)



let find22 = top10Fruits.find(value => value.price > 5)
console.log(find22)



// let sre22 = number.forEach(value => {
//     return value * 5
// })
let reduce22 = top10Fruits.reduce((pre, curr) => 
    pre + curr.price,0)
console.log(reduce22)





