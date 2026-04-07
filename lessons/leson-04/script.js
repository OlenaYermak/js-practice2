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

// console.log("Example 4 — Перевірка властивості");

// const user4 = { name: "Olena", age: 25 };

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