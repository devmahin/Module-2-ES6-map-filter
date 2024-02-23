// // let even = [1,3,5,7,9]
// // let filters = even.map(value => value + 1)
// // // console.log(filters)

// // let array = [];
// // for(let i=0; i<even.length; i++){
// //     array.push(even[i] + 1)
// // }
// // console.log(array)


// let arrayElement = [33, 50, 79, 78, 90, 101, 30];
// // let arrays = arrayElement.filter((value) => {
// //         let values =  10;
// //         return value % values === 0;
// // })
// // console.log(arrays)
// // // find
// // let arrays = arrayElement.find((value) => {
// //     let values = 10;
// //     return value % values === 0;
// // })
// // console.log(arrays)



// // you have an array of objects 
// const instructor = [
//     { name: "Nodi", age: 28, position: "Senior" },
//     { name: "Anil", age: 26, position: "Junior" },
//     { name: "Shobuj", age: 30, position: "Senior" }
// ]

// const filtaRing = instructor.filter((value) => {
//     return value.position.toLowerCase() === "senior"
// })
// // console.log(filtaRing)


const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Meena', age: 22 },
]
let total = 0;
for (let i = 0; i < people.length; i++) {
    total += people[i].age;
}
// console.log(total)

let red = people.reduce((pre, current) => {
    return pre + current.age
}, 0)
// console.log(red)


// 1 . what the difference between Map,forEach,filter?
// 2. What is the difference between filter and find?
// 3. What is the difference between for of and for in?
// 4. How do you empty an array ?
// 5. Difference between class and object?
// 6. What is a Prototype chain ? Or how does inheritance work in javascript ?
// 7. What does destructing do in ES6?
// 8. Is optional Chaining is same as ternary operator ?
// 9> What do you mean by dot notation and braket notation? When should you use dot notation or bracket notation?  
// task -1: console log the secondary school location of Sophia 


// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }
// // let datas = data.Sophia.study.find(val => "secondary" in val)?.secondary.find(obj => "location" in obj)?.location;

// let data11 = data.Sophia.study[1].secondary[1].location
// console.log(data11)


// // Accessing the secondary location


// // task-2: console .log  output: Petersburg, Herry

// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }

// // let cityVal = students[2222].address["city"];
// // let cityVal2 = students[3333].name;
// // console.log(cityVal)
// // console.log(cityVal2)







// // task-3 : access and then show habluder adda
// // show output Beginner
// let data5 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }

// // let data55 = data5.data[0].bookDetails['name']
// // let data52 = data5.data[1].bookCategory
// // console.log(data55)
// // console.log(data52)


// onst secondaryLocation = data.Sophia.study.find(item => "secondary" in item)?.secondary.find(obj => "location" in obj)?.location;

// console.log(secondaryLocation); // Output: "St Lorence"


// let datas = data.Sophia.study.find(val => "secondary" in val)?.secondary.find(obj => "location" in obj)?.location;


// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)
// numbers.forEach(num => console.log(num * 2)); // 






// class Vehical{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;

//     }
//     eat (params) {
//         console.log(`${this.name} is eating`);
//     }
    
// }
// let a = new Vehical("CNG", 34000);
// let b = new Vehical("Bus", 43434);
// // console.dir(a)
// a.eat()



Object.prototype.mahin = function(){
    console.log("I am mahin?")
}

let obj = {};
console.dir(obj)
obj.mahin()
