// =************************************************************

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]);  // Значення властивості з таким ключем
}

// =************************************************************

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment) {
    
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

// =************************************************************

function countProps(object) {
  
    let props = Object.keys(object);
    let propCount = props.length;
  



  return propCount;
}

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// =************************************************************

const booksLibrary = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  }
];


for (const book of booksLibrary) {
  console.log(book); // Об'єкт книги
  console.log(book.title); // Назва
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}

// =************************************************************

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

    for (const product of products) {
        if (product.name === productName) {
         
      return product.price
    } 
     }
    return null;
}

console.log(getProductPrice("Scanner"))

// =************************************************************

console.log("Example 1 - Доступ до властивостей");

const user = { name: "Olena", age: 25, isOnline: true };

console.log(`Name: ${user.name}`);
console.log(`age: ${user.age}`);
console.log(`isOnline: ${user.isOnline}`);

// =************************************************************

console.log("Example 2 — Додавання властивості");

const user1 = { name: "Olena" };

user1.email = "olena@gmail.com";

console.log(user1);

// =************************************************************

console.log("Example 3 — Зміна значення");

const user2 = { name: "Olena", age: 25 };

user2.age = 26;
console.log(user2);

// =************************************************************

console.log("Example 4 — Перевірка властивості");

const user4 = { name: "Olena", age: 25 };

for (let user in user4) {
  if (user === "email") {
    console.log("Email exists");
  } else {
    console.log("No email");
  }
}

// =************************************************************

console.log("Example 5 — Видалення властивості");

const user5 = { name: "Olena", age: 25, password: "12345" };

for (let user in user5) {
  console.log(user);
  if (user === "password") { delete user5[user]; }
  
}
console.log(user5);

// =************************************************************

console.log("Example 6 — Перебір ключів");

const user6 = { name: "Olena", age: 25, city: "Kyiv" };

let keysUser = [];

for (const key in user6) {
    keysUser.push(key);
}

console.log(keysUser);

// =************************************************************

console.log("Example 7 — Перебір значень");

const user7 = { name: "Olena", age: 25, city: "Kyiv" };

let valuesUser = Object.values(user7);

console.log(valuesUser);

// =************************************************************

console.log("Example 8 — Ключ + значення");

const user8 = { name: "Olena", age: 25 };

for (const u in user8) {
    console.log(`${u}: ${user8[u]}`);
}

// =************************************************************

console.log("Example 9 — Підрахунок властивостей");

const user9 = { name: "Olena", age: 25, city: "Kyiv" };

let userKeys = Object.keys(user9);

let userLength = userKeys.length;

console.log(userLength);

// =************************************************************

console.log("Example 10 — Пошук значення");

const user10 = { name: "Olena", age: 25, city: "Kyiv" };

let valuesUsser10 = Object.values(user10);
valuesUsser10.includes("Kyiv") ? console.log("Found") : console.log("Not found")

// =************************************************************

// console.log("Example 11 — Дані користувача");

// =************************************************************

console.log("Example 12 — Сума значень");

const salaries = { John: 1000, Anna: 1500, Mike: 800 };

let valueSal = Object.values(salaries);
let totalSal = 0;

for (let val of valueSal) {
  totalSal += val;
}
console.log(totalSal);

// =************************************************************

console.log("Example 13 — Найбільше значення");

const salaries2 = { John: 1000, Anna: 1500, Mike: 800 };

let valueSal2 = Object.values(salaries2);

console.log(Math.max(...valueSal2));

// =************************************************************

console.log("Example 14 — Оновлення об’єкта");

const product = { name: "Laptop", price: 1000 };

// for (let prod in product) {
//   if (prod === "price") {
//     if (product[prod] > 500) {
//       product[prod]=product[prod]-(product[prod]*0.1)
//     }
//   };
// }

///       2 variant
if (product.price > 500) {
  product.price *= 0.9;
}

console.log(product);


// =************************************************************

console.log("Example 15 — Копія об’єкта");

const user15 = { name: "Olena", age: 25 };
let newUser = { ...user15 };

newUser.isAdmine = false;
console.log(newUser)

// =************************************************************

console.log("Example 16 — Банківський акаунт (об’єкти + масиви + методи");

const Transaction = { DEPOSIT: "deposit", WITHDRAW: "withdraw", };
const account = {
  id: 0,
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    this.id +=1;
    return {id: this.id, amount, type};
     
  },

  deposit(amount) {
    this.balance += amount;
   const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(newTransaction);
  },
  
  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
      const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(newTransaction);
    } else console.log("Недостатньо коштів");
  },
  
  getBalance() {
    return this.balance
  },

  getTransactionDetails(id) {
    for (const trans of this.transactions) {
      if (trans.id === id) {
        return trans;
       }
     }
  },
  
  getTransactionTotal(type) {
    let total = 0; 
    for (const trans of this.transactions) {
      
      if (trans.type === type) {
        total += trans.amount;
      }
      
    }
    return total;
  },
};


console.log(account.deposit(2000));
console.log(account.deposit(1000));
console.log(account.deposit(200));
console.log(account.deposit(1500));
console.log(account);

console.log(account.withdraw(1000));
console.log(account);

console.log(account.withdraw(10000));
console.log(account);

console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal("deposit"));


// =************************************************************

console.log("Example 17 — Метод об'єкта");

const user17 = {
  name: "Olena",
  age: 25,
  getInfo() {
    return `${this.name} is ${this.age} years old`
  }
};

console.log(user17.getInfo());

// =************************************************************

console.log("Example 18 — Оновлення через метод");

const user18 = {
  name: "Olena",
  email: "old@gmail.com",
  changeEmail(newEmail){

    this.email = newEmail;
  },
};
user18.changeEmail("new@gmail.com"); 
console.log(user18.email);

// =************************************************************

console.log("Example 19 — Spread (об'єднання об'єктів");

const user19 = { name: "Olena", age: 25 };
const extra = { city: "Kyiv", isOnline: true };

const newUser19 = { ...user19, ...extra };

console.log(newUser19);

// =************************************************************

console.log("Example 20 — Spread (перезапис значення)");

const a = { x: 1, y: 2 };
const b = { y: 10, z: 5 };

const c = { ...a, ...b };

console.log(c);

// =************************************************************

console.log("Example 21 — Rest (збір властивостей)");

const user21 = { name: "Olena", age: 25, city: "Kyiv", };

const { name, ...rest } = user21;

console.log(name);
console.log(rest);


// =************************************************************

console.log("Example 22 — Rest в функції");

function sum(...numbers) {
  let totalSum = 0;

  for (let n of numbers) {
    totalSum += n;
   
  }
  return totalSum;
}

console.log(sum(1, 2, 3, 4));

// =************************************************************

console.log("Example 23 — Деструктуризація + метод");
 
const user23 = {
  name: "Olena",
  age: 25,
  getInfo() { 

    const { name, age } = user23;
    console.log(`Name: ${name}, Age: ${age}`);
    
  },
};

user23.getInfo();

// =************************************************************

console.log("Example 24 — Комбінований (spread + метод)");

const user24 = {
  name: "Olena",
  
  addProperty(key, value) {
    const updatedUser = {};

for (let user in user24) {
  updatedUser[user] = user24[user];
    }
    
    updatedUser[key] = value;

    return updatedUser;
  }
  
 };




console.log(user24.addProperty("age", 25));
console.log(user24.addProperty("city", "Kyiv"));

console.log(user24)



// function changeEven(numbers, value) {
//   let newNumbers = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newNumbers.push(element + value);
//     } else (newNumbers.push(element))
    
//   });

 
//   return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

