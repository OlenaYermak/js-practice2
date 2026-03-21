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

let result = text.trim().toLowerCase();

console.log(result);