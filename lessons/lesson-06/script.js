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
    constructor() {
        this.products = [];
    }
}
 
addProduct(product){
    this.products.push(product);
}

const user7 = new User2("Olena", 25);

console.log(user7);

// =************************************************************

console.log("Example 8 — Метод класу");

class User3 {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


// =************************************************************

console.log("Example 9 — Наслідування");

class User9 {
    constructor(name) {
        this.name = name;
    }
}

class Admin extends User9{
    role;
}

console.log(Admin);

// =************************************************************

console.log("Example 10 — super()");

class User10 {
    constructor(name) {
        this.name = name;
    }
}

class Admin2 extends User10{
    constructor(name) {
        
        super(name)
    }
}

const admin2 = new Admin2({
    name: "Olga"
})

console.log(admin2)


// =************************************************************

console.log("Example 11 — Приватна властивість");

class BankAccount { 
    #balanse
    constructor(balanse) {
        this.#balanse = balanse;
    }

    get balanse() {
        return this.#balanse;
    }
}


// =************************************************************

console.log("Example 12 — Getter і Setter");

class User12 {
    #email;
    constructor(name, email) {
        this.name = name;
        this.#email = email;
    }

    get email() {
        return this.#email
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}

// =************************************************************

console.log("Example 13 — Статичний метод");

class MathHelper {
    static square(num) {
        return num * num;
    }
 }

console.log(MathHelper.square(4));

// =************************************************************

console.log("Example 14 — Реальний кейс (кошик)");

class Cart {
    constructor(params) {
        this.name = params.name;
        this.price = params.price;
    };

    addProduct(product) {
       let productList = productList.push(product);
    }

    // getTotalPrice() {
    //   let totalPrice =
    // }
}

const cart = new Cart();


//=************************************************************

console.log("Example 15 — Міні-челендж (this)");

const user15 = {
    name: "Olena",
    showName() { console.log(this.name); }
};
console.log(user15.showName());

