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

// Arrays
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Objek
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

// Assignment Operator
let j = 10;
let k = 5;

j += k; // artinya -> x = x + y;
j -= k; // artinya -> x = x - y;
j *= k; // artinya -> x = x * y;
j /= k; // artinya -> x = x / y;
j %= k; // artinya -> x = x % y;
