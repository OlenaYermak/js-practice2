// =************************************************************

console.log("Example 1 - Контекст виконання (this)");

const user = {
    name: "Olena",
    showName() { 
        console.log(this.name)
    }
};

user.showName();

// =************************************************************

console.log("Example 2 - Втрата контексту");

const user2 = {
    name: "Olena",
    showName() { console.log(this.name); }
};
const fn = user2.showName.bind(user2);
fn();


// =************************************************************

console.log("Example 3 — call()");

function showCity() {
    console.log(this.city);
}
const user3 = { city: "Kyiv" };

showCity.call(user3);

// =************************************************************

console.log("Example 4 — apply()");

function sum(a, b) {
    console.log(a + b);
}

// =************************************************************

console.log("Example 5 — Prototype");

function User(name) {
    this.name = name;
}

// Додаємо метод через prototype
User.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

const user5 = new User("Olena");

user5.sayHello(); 

// =************************************************************

console.log("Example 6 — Перевірка prototype");

function Car(model) {
    this.model = model;
}
Car.prototype.showModel = function () {
    console.log(this.model);
};

const audi = new Car("Audi");
audi.showModel();

// =************************************************************

console.log("Example 7 — Основи OOP");

class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 }

const user7 = new User2("Olena", 25);

console.log(user7);

// =************************************************************

console.log("Example 8 — Метод класу");

class User3 {
    constructor(name) {
        this.name = name;
    }
}