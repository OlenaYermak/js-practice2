// =************************************************************

console.log("Example 1");

let countSheep = function (num) {
    let str = "";
    for (let i = 1; i <= num; i++){
       str += `${i} sheep...`
    }
    return str;
}

console.log(countSheep(3))

// =************************************************************

console.log("Example 2");

function solution(str){
    let newStr = "";


    for (let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }

    return newStr;
}

console.log(solution("world"));

// =************************************************************

console.log("Example 3");

function boolToWord( bool ){
    return bool === true ? "Yes" : "No";
}

console.log(boolToWord(true));
console.log(boolToWord(false));

// =************************************************************

console.log("Example 4");

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(10));

// =************************************************************

console.log("Example 5");

function addBinary(a,b) {
    let binary = (a + b).toString(2); //Метод toString() перетворює число на рядок, а передача аргументу 2 вказує на використання двійкової системи числення
    return binary;
}

console.log(addBinary(1, 1))
console.log(addBinary(5, 9))

// =************************************************************

console.log("Example 6");

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return n*m
  }
}

console.log(paperwork(5, 5))
console.log(paperwork(-5, 5))
console.log(paperwork(6, -5))
console.log(paperwork(6, 6))

// =************************************************************

console.log("Example 7");

function descendingOrder(n){
    let array = n.toString().split("");
    
    let desArr = array.toSorted((a, b) => { return b - a })
   let desNumb = parseInt(desArr.join(""))
  return desNumb
}

console.log(descendingOrder(1234))

// =************************************************************

console.log("Example 8");

function validatePIN(pin) {
  return (
    typeof pin === "string" &&
    (pin.length === 4 || pin.length === 6) &&
    /^\d+$/.test(pin)//перевірка що тільки цифри
  );
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));

// =************************************************************

console.log("Example 9");

function findAverage(array) {
    if (array.length === 0) { return 0 }
    else {
          let total = 0;
    for (let num of array) {
        total += num;
    }
    let avarage = total / array.length;
  return  avarage;
    }

  
}

console.log(findAverage([]))
console.log(findAverage([2, 2, 2, 2]))

// =************************************************************

console.log("Example 10");

function noSpace(x){
    let strNoSpace = x.split(" ").join("");
    return strNoSpace;
}

console.log(noSpace("8 j 8 mBliB8g imjB8B8 jl B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B B888 c hl8 BhB fd"));

// =************************************************************

console.log("Example 11-1");

function disemvowel(str) {
  const vowels = 'aeiou';
  
  return str
    .split('')
    .filter(char => !vowels.includes(char.toLowerCase()))
    .join('');
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

// =************************************************************

console.log("Example 11-2");

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels("No offense but,\nYour writing is among the worst I've ever read"))

// =************************************************************

console.log("Example 12");

let isSquare = function (n) {
    let sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt); 
}

console.log(isSquare(25));
console.log(isSquare(26));
console.log(isSquare(-1));
console.log(isSquare(0));