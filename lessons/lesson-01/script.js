console.log("Example 1 - Математичні оператори");
// ? Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = grapes - apples;
console.log(diff)

console.log(typeof apples); //number
console.log(typeof total); //number

// =************************************************************

console.log("Example 2 - Комбіновані оператори");
// ? Заміни вираз перевизначення комбінованим оператором +=.

let students = 100;
students += 50;
console.log(students);

// =************************************************************

console.log("Example 3 - Пріоритет операторів");
// ? Розбери пріоритет операторів в інструкції привласнення значення змінної result.

const result = 108 + 223 - 2 * 5;
console.log(result);

// =************************************************************

console.log("Example 4 - Клас Math");
// ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

const value = 27.5;
const value1 = 27.3;
const value2 = 27.9;

console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

console.log(Math.floor(value1));
console.log(Math.ceil(value1));
console.log(Math.round(value1));


console.log(Math.floor(value2));
console.log(Math.ceil(value2));
console.log(Math.round(value2));

// =************************************************************

console.log("Example 5 - Шаблонні рядки");
// ? Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// =************************************************************

console.log("Example 6 - Методи рядків та чейнінг");
// ? Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = '88,3';
let height = '1.75';

weight = Number.parseFloat(weight.replace(",", ".")); // 1.(weight.replace(",", ".") -> зміна коми на крапку; 2.Перетворення на число, оскільки 1 дія повертає строку
height = Number.parseFloat(height.replace(",", "."));



const bmi = (weight / (height * height)).toFixed(1); //1.(weight / (height * height)) -> знаходимо bmi; 2.toFixed(1) -> округляємо до одного знаку після крапки, повертає строку.
console.log(bmi); // 28.8

// =************************************************************

console.log("Example 7 - Оператори порівняння та приведення типів");
// ? Яким буде результат виразів?

console.log(5 > 4); //true

console.log(10 >= '7'); //true

console.log('2' > '12'); //true порівняння за юнікодом

console.log('2' < '12'); //false порівняння за юнікодом

console.log('4' == 4); //true

console.log('6' === 6); //false

console.log('false' === false);//false

console.log(1 == true);//true

console.log(1 === true);//false

console.log('0' == false); //true  1.false перетворюється в число; 2.'0' == 0 -> Рядок '0' теж перетворюється в число; 3. 0 == 0 // true

console.log('0' === false); //false

console.log('Papaya' < 'papaya'); //true порівняння за юнікодом

console.log('Papaya' === 'papaya'); // false порівняння за юнікодом

console.log(undefined == null); // true

console.log(undefined === null); //false

// =************************************************************





