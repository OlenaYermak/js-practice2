// =************************************************************

console.log("Example 1 — Callback function");

function processUser(callback) {
    
    const user = "Olena";

    callback(user);
}

function consUsername(username) {
    console.log(`Hello ${username}`)
}

processUser(consUsername);

//=************************************************************

console.log("Example 2 — Arrow function");

let sum = (a, b) => { return a + b; };

// =************************************************************

console.log("Example 3 —  map");

const numbers3 = [1, 2, 3, 4];

const newNumbers3 = numbers3.map((number) => number * 2);

console.log(numbers3);
console.log(newNumbers3);

// =************************************************************

console.log("Example 4 —  map (реальний кейс)");

const users4 = [
    { name: "Olena" },
    { name: "Ivan" },
    { name: "Anna" }
];

const newUsers4 = users4.map((user) => user.name);

console.log(newUsers4);

// =************************************************************

console.log("Example 5 — flatMap");

const arr = [1, 2, [3, 4], [5, 6]];

const newArr = arr.flatMap((number) => number);

console.log(newArr);

// =************************************************************

console.log("Example 6 — every");

const numbers6 = [12, 15, 18, 20]; 

console.log(numbers6.every((number) => number > 10));

// =************************************************************

console.log("Example 7 — some");

const numbers7 = [10, 20, 30, 150];

console.log(numbers7.some((number) => number > 100));

// =************************************************************

console.log("Example 8 — reduce (сума)");

const numbers8 = [1, 2, 3, 4];

const totalNumbers8 = numbers8.reduce((acc, number) => {return acc += number }, 0);

console.log(totalNumbers8);

// =************************************************************

console.log("Example 9 — reduce (реальний кейс)");

const cart = [
    { price: 100 },
    { price: 200 },
    { price: 300 }
];

const totalPrice = cart.reduce((acc, item) => { return acc += item.price }, 0);

console.log(totalPrice);


// =************************************************************

console.log("Example 10 — toSorted");

const numbers10 = [5, 2, 9, 1];

const sortedNumbers10 = numbers10.toSorted((a, b) => { return a - b });

console.log(sortedNumbers10);


function repeatStr (n, s) {
  return s.repeat(n);
}

console.log(repeatStr(5, "Hello"));

// =************************************************************

console.log("Example 11 — toSorted (об'єкти)");

const users11 = [
    { name: "Olena", age: 25 },
    { name: "Ivan", age: 20 },
    { name: "Anna", age: 30 }
];

const sortedByAge = users11
    .toSorted((a, b) => a.age - b.age)
    .map(user => user.age);

console.log(sortedByAge);

// =************************************************************

console.log("Example 12 — callback + map");

function transform(arr, callback) {

return callback(arr);
}

function addTwo(array) {
   return array.map(element => element +2)
}

console.log(transform([3, 6, 4, 12, 8], addTwo))

// =************************************************************


function areYouPlayingBanjo(name) {
const firstLetter = name.split("");
  
  msg = "";
  if(firstLetter[0] === "R" || firstLetter[0] === "r"){
    msg = `${name} plays banjo`
  } else {
    msg = `${name} does not play banjo`
  }
  
  return msg;
}

console.log(areYouPlayingBanjo("Robin"));
console.log(areYouPlayingBanjo("Singh"));
console.log(areYouPlayingBanjo("rabbit"));

function makeNegative(num) {
  if(num >0){
    num = -num;
  } else{ num = num}
  
  return num
}

console.log(makeNegative(-5))
console.log(makeNegative(12))
console.log(makeNegative(0))

function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  
  
  for(let point of classPoints){
    total += point;
  }
  
  let averagePoints = total / classPoints.length;
  
  return yourPoints > averagePoints ? true : false;
}

console.log(betterThanAverage([101, 45, 75, 105, 99, 107], 107));










// let users25 =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = (users) => {
  
//   const emails = users.map(user => user.email);
  
//   return emails;
// };

// console.log(getUserEmails(users25));


// const numbers26 = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers26.filter(number => {return number%2 ===0});
// const oddNumbers = numbers26.filter(number => {return number % 2 !== 0 })

// console.log(evenNumbers);
// console.log(oddNumbers);



// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players) // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);


// const players2 = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players2.reduce((acc, player) => {
//  return acc+player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);