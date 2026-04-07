// =************************************************************

console.log("Example 1 — Сума елементів масиву");

const numbers = [1, 2, 3, 4, 5];

let total = 0;

for (const num of numbers) {
    total += num;
}

console.log(total);

// =************************************************************

console.log("Example 2 — Парні числа з масиву");

const numbers2 = [1, 223, 30, 4, 5, 6, 8, 22, 15, 90, 60, 53];

let newArr = [];

for (let i = 0; i < numbers2.length; i++){
    if (numbers2[i] % 2 === 0) {
        newArr.push(numbers2[i]);
    }
}

console.log(newArr);

// =************************************************************

console.log("Example 3 — Найбільше число");

const numbers3 = [5, 12, 3, 20, 8];

let max = numbers3[0];

for (const num of numbers3) {
    if (num > max) {
        max = num;
    }

    console.log(max);
}

// =************************************************************

console.log("Example 4 — Реверс масиву");

const numbers4 = [1, 2, 3];

let numb = [];

for (let i = numbers4.length - 1; i >= 0; i--){
    numb.push(numbers4[i]);
}

console.log(numb);

// =************************************************************

console.log("Example 5 — Підрахунок елементів");

const numbers5 = [5, 15, 8, 20, 3];
let array = [];

for (const num of numbers5) {
    if (num > 10) {
        array.push(num); 
    }
}
console.log(array.length);

// =************************************************************

console.log("Example 6 — includes");

const fruits = ["apple", "banana", "orange"];

fruits.includes("banana") ? console.log("Found") : console.log("Not found");

// =************************************************************

console.log("Example 7 — join");

const words = ["Hello", "world"];

let newWords = words.join(" ");
console.log(newWords);

// =************************************************************

console.log("Example 8 — split");

const text = "a,b,c";

let newText = text.split(",");
console.log(newText);

// =************************************************************

console.log("Example 9 — Function Declaration");
 
console.log(sum(5, 10)); //можна викликати до оголошення

function sum(a, b) { 
    return a + b;
}

console.log(sum(55, 10));

// =************************************************************

console.log("Example 10 — Function Expression");

// !!!! console.log(isEven(2)) - не можна викликати до ініціалізації

const isEven = function (num) { 
    let msg = "";
    (num % 2 === 0) ? msg = true : msg = false;
    return msg;
};

console.log(isEven(2));

// =************************************************************

console.log("Example 11 — Параметри за замовчуванням");

function greet(name = "Guest") { 

    console.log(`Hello, ${name}`);
}

console.log(greet());
console.log(greet("Ihor"));

// =************************************************************

console.log("Example 12 — arguments (псевдомасив)");

function sumAll() {
    let arg = Array.from(arguments);
    let total = 0;

    for (const a of arg) {
        total += a;
    }
    console.log(total);
}

sumAll(1, 2, 3, 4);
 
// =************************************************************

console.log("Example 13 — Ітерація по масиву у функції");

function getTotal(numbers) { 
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(getTotal([1, 2, 3]));

// =************************************************************

console.log("Example 14 — універсальна функція");

function getAverage() { 
    let arg = Array.from(arguments);
     let total = 0;
    let aver = 0;

    for (const a of arg) {
        total += a;
    }
    aver = total / arg.length;
    return aver;
}

console.log(getAverage(3, 6, 88, 32, 15));

// =************************************************************

console.log("Example 15 - Колекція курсів (includes, indexOf, push і т. д.");

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {
    
    if (courses.includes(name)) {
        console.log("Ви вже маєте такий курс");
        return;
    } 
 courses.push(name);
   
};

console.log(addCourse('Express'));


function removeCourse(name) {

    const index = courses.indexOf(name);

    if (index === -1) {
        console.log("Курс із таким ім'ям не знайдено");
        return;
    }

    courses.splice(index, 1);
 };


 console.log(removeCourse('React'));

console.log(removeCourse('Vue')); 

console.log(courses);
   
function updateCourse(oldName, newName) {
    
const index = courses.indexOf(oldName);

    if (index === -1) {
        console.log("Курс із таким ім'ям не знайдено");
        return;
    }

    courses.splice(index, 1, newName); // або може бути courses[index] = newName;
};

console.log(updateCourse('Express', 'NestJS'));

console.log(courses);



