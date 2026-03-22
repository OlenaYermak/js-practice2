console.log("Example 1 - Доступ до акаунта");


const isLoggedIn = true;
const isEmailVerified = false;

if (isLoggedIn && isEmailVerified) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// =************************************************************

console.log("Example 2 - Знижка");

const isNewUser = false;
const hasPromo = true;

if (isNewUser || hasPromo) {
    console.log("Discount applied");
} else {
    console.log("No discount");
}

// =************************************************************

console.log("Example 3 - Перевірка пароля");

const password = "qwerty123";

if (password.length < 8) {
    console.log("Weak password");
} else if (password.includes("123")) {
    console.log("Unsafe password");
} else {
    console.log("Password is valid");
}
    
// =************************************************************

console.log("Example 4 - Форматування імені");

const name = " olena ";
let trimmed = name.trim();
let formattedName = trimmed[0].toUpperCase() + trimmed.slice(1);

console.log(formattedName);

// =************************************************************

console.log("Example 5 - Доставка");

const orderAmount = 800; 

if (orderAmount >= 1000) {
    console.log("Free delivery");
} else {
    console.log("Delivery cost: 100 UAH");
}

// =************************************************************

console.log("Example 6 - Перевірка email");

const email = "user@gmail.com";

if (email.includes("@") && email.endsWith("gmail.com")) {
    console.log("Valid email");
} else {
    console.log("Invalid email");
}

// =************************************************************

console.log("Example 7 - Модерація коментаря");

const comment = "This is stupid";

comment.includes("stupid") || comment.includes("hate") ? console.log("Comment blocked") : console.log("Comment allowed"); //записано тернарним оператором

// =************************************************************

console.log("Example 8 - Доступ за віком");

const age = 17;
const hasID = true;

if (age >= 18) {
    console.log("Access granted");
} else if ((age === 16 || age === 17) && hasID) {
    console.log("Limited access");
} else {
    console.log("Access denied");
}

// =************************************************************

console.log("Example 9 - Генерація slug");

const title = " JavaScript for Beginners ";

let slug = title.trim().toLocaleLowerCase().replace(/ /g, "-"); // (/ /g, "-") - цей запис означає замінити всі пробіли на тире, якщо написати (" ", "-") то зміниться лише перший пробіл на тире, а всі інші пробіли залишаться.

console.log(slug);

// =************************************************************

console.log("Example 10 - Фінальна ціна");

const price = 200;
const discount = 10;
const isMember = true;

let total = price;

if (isMember) {
    total = total * 0.9;
}

if (discount > 0) {
    total = total * (1 - discount / 100);
}

console.log(`Final price: ${total}`);

// =************************************************************

console.log("Example 11 — День тижня");

const day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Working day");
        break;
    case "Tuesday":
        console.log("Working day");
        break;
    case "Wednesday":
        console.log("Working day");
        break;
     case "Thursday":
        console.log("Working day");
        break;
    case "Friday":
        console.log("Working day");
        break;
     case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day")
        
}

// =************************************************************

console.log("Example 12 — Мова сайту");

const lang = "ua";

switch (lang) {
    case "ua":
        console.log("Привіт");
        break;
    case "en":
        console.log("Hello");
        break;
    case "pl":
        console.log("Cześć");
        break;
    default:
        console.log("Unknown language");
}

// =************************************************************

console.log("Example 13 — Очищення тексту");

const text = " HELLO world ";

let textTrim = text.trim().toLowerCase();

let result = textTrim[0].toUpperCase() + textTrim.slice(1);

console.log(result);

// =************************************************************

console.log("Example 14 — Перевірка домену");

const url = "https://my-site.com";

url.startsWith("https") ? console.log("Secure") : console.log("Not secure");

// =************************************************************

// console.log("Example 15 — Вирізання username");

// const email2 = "olena@gmail.com";

// let username = email2.split(0, 5);

// console.log(username);

// =************************************************************

console.log("Example 16 — Цензура");

const textMesage = "This is stupid and bad";

let changeMessage = textMesage.replace("stupid", "***").replace("bad", "***");

console.log(changeMessage);

// =************************************************************

console.log("Example 17 — Ініціали");

const fullName = "Olena Yermak";

let firstLetterName = fullName.slice(0, 1);
let firstLettetrSurname = fullName.slice(6, 7);

let initials = `${firstLetterName}.${firstLettetrSurname}.`;
console.log(initials);

// =************************************************************

console.log("Example 18 — Логін система");

const username = " admin ";
const password2 = "Admin123";

let usernameTrimmed = username.trim();

if (usernameTrimmed === "admin" && (/\d/.test(password2))) {
    console.log("Welcome admin");
}
else {
    console.log("Access denied");
}

// =************************************************************

console.log("Example 19 — Категорія товару");

const category = "electronics";
const price2 = 1000;

let finalPrice;

switch (category) {
    case "electronics":
        finalPrice = price2 * 0.9;
        console.log(`Final price: ${finalPrice}`);
        break;
    
    case "clothes":
        finalPrice = price2 * 0.8;
       console.log(`Final price: ${finalPrice}`);
        break;
    
    case "food":
     finalPrice = price2;
        console.log(`Final price: ${finalPrice}`);
        break;   
}

// =************************************************************

console.log("Example 20 — Повідомлення користувача");

// =************************************************************

console.log("Example 21 — Перевірка файлу");

const fileName = "photo.png";

if (fileName.endsWith(".jpg") || fileName.endsWith(".png")) {
    console.log("Image file");
} else if (fileName.endsWith(".pdf")) {
    console.log("Document");
} else {
    console.log("Unknown format");
}

// =************************************************************

// console.log("Example 22 — Генерація пароля");

// const password3 = "qwerty";

// let newPsw;

// if (password3.length <= 6) {
    
// }
