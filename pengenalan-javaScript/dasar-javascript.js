alert("Terima kasih.");

// ini merupakan komentar satu baris komentar

// alert("Terima kasih")

/* Ini merupakan komentar dengan lebih dari satu baris
Teks apapun yang berada disini akan dijadikan komentar.
Ketika menggunakan ini, jangan lupa untuk menutupnya.
*/

var firstName = "Mya";
console.log(firstName);

firstName = "Alda";
console.log(firstName);

// The controversial hoisting when using the 'var' keyword
yes = 100;
var x;
console.log(yes);

// Always use the 'let' keyword instead
no = 100;
let y;
console.log(no); // ReferenceError: Cannot access 'y' before initialization

// This is a 'const'ant variable, so it can't be changed/reassigned
const z = 100;
console.log(z);

z = 200; // TypeError: Assignment to constant variable.
console.log(z);

/* Undefined */
let a;
console.log(typeof d);

/* Numbers */
let b = 10;
console.log(typeof e);

let c = 17.25;
console.log(typeof d);

/* Perhitungan aritmatika */
let d = 12;
let e = 9;

console.log(d + e);
console.log(d - e);
console.log(d * e);
console.log(d / e);
console.log(d % e);

/* Increment dan Decrement */
let postfix = 5;
console.log(postfix++);

let prefix = 5;
console.log(++prefix);

/* Strings */
let greet = "Hello";
console.log(typeof greet);

let moreGreet = greet + greet;
console.log(moreGreet);

/* Boolean */
let yes = true;
let no = false;

console.log(typeof yes);
console.log(typeof no);

/* Operator komparasi */
const f = 10;
const g = 12;

let isGreater = f > g;
let isLess = f < g;

console.log(isGreater);
console.log(isLess);

/* Null */
let someLaterData = null;
console.log(someLaterData);

/* Dynamic typing */
let x; // x merupakan undefined
x = 1; // sekarang x merupakan number
x = true; // sekarang x merupakan boolean
x = "Harry"; // sekarang x merupakan string

/* Arrays */
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* Objek */
let object = { key1: "value1", key2: "value2", key3: "value3" };
let user = {
  firstName: "Harry",
  lastName: "Potter",
  age: 20,
  isMuggle: false,
  stuff: ["Wand", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

// firstName dan lastName dapat dikelompokan kembali dalam sebuah objek baru
user = {
  name: {
    first: "Harry",
    last: "Potter"
  },
  age: 20,
  isMuggle: false,
  stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");

/* Assignment Operator */
let j = 10;
let k = 5;

j += k; // artinya -> x = x + y;
j -= k; // artinya -> x = x - y;
j *= k; // artinya -> x = x * y;
j /= k; // artinya -> x = x / y;
j %= k; // artinya -> x = x % y;

/* Logical and Comparison Operators */
let m = 10;
let n = 12;

console.log(m < n);
console.log(m > n);

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// AND operator
console.log(m < 15 && n > 10); // (true && true) -> true
console.log(m > 15 && n > 10); // (false && true) -> false

// OR operator
console.log(m < 15 || n > 10); // (true || true) -> true
console.log(m > 15 || n > 10); // (false || true) -> true

/* If/Else Statement */
if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}

let language = "English";
let greeting = "Selamat Pagi!";

if (language === "English") {
  greeting = "Good Morning!";
}

console.log(greeting);

language = "French";
if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayogozaimasu!";
}
console.log(greeting);

/* Loop */
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const users = ["Harry", "Ron", "Hermione", "Tom"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// For of loop
for (const user of users) {
  console.log(user);
}

/* Function */
function greeting() {
  console.log("Good Morning!");
}

greeting();

function greeting(name, language) {
  if (language === "English") {
    console.log("Good Morning " + name + "!");
  } else if (language === "French") {
    console.log("Bonjour " + name + "!");
  } else {
    console.log("Selamat Pagi " + name + "!");
  }
}

greeting("Velma", "French");

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);

function greeting(name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* Variabel Scope */
// global variable, dapat diakses pada parent() dan child()
const o = "o";

function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
  const p = "p";

  function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const q = "q";
  }
}

function multiply(num) {
  total = num * num;
  return total;
}

let total = 9;
let number = multiply(20);

console.log(total);
