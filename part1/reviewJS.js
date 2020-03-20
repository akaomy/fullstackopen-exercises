// VARIABLES

// const x = 1
// let y = 5

// console.log(x,y)
// y+=10
// console.log(x,y)
// y = "sometext"
// console.log(x,y)

// ARRAYS

// const t = [1, -1, 3]
// t.push()

// console.log(`length of the array ${t.length}`)
// console.log(`select first element from the array ${t[1]}`)

// FOR EACH

// console.log("print out the array")
// t.forEach(value => {
//     console.log(value)
// })

// CONCAT

// const t2 = t.concat(5)
// console.log(`use concat instead of push, so it will create new array not modifying old one. New array: ${t2}`)

// MAP

// const t = [1, 2, 3]
// const m1 = t.map(value => value *2) // creates new array
// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m1)
// console.log(m2)

// Destructuring
// const someArr = [1,2,3,4,5,6]
// const [one, two, ... left] = someArr
// console.log(someArr)
// console.log(one)
// console.log(two)
// console.log(left)
// console.log(someArr)

// Objects

// const obj1 = {
//     name: "Ivan",
//     age: 39,
//     education: "PhD"
// }

// const obj2 = {
//     name: {
//         first: "Dan",
//         last: "Abramov"
//     },
//     grades: [1,2,3,4,5],
//     run: function() {
//         return 'running'
//     } 
// }

// console.log(obj1.name)
// console.log(obj2.name.first)
// console.log(obj2.run())
// obj1.address = "Helsinki"
// obj1['secret number'] = 1234

// console.log(obj1)


// Functions

const square = p => p * p
console.log(square(124))

const someArr = [1,2,3,4]
const tSquared = someArr.map(p => p * p)
console.log(`tSquared: ${tSquared} `)





