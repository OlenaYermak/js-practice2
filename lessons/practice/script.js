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
