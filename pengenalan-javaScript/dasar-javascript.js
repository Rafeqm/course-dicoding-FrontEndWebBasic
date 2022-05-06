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
x = 100;
var x;
console.log(x);

// Always use the 'let' keyword instead
y = 100;
let y;
console.log(y); // ReferenceError: Cannot access 'y' before initialization

// This is a 'const'ant variable, so it can't be changed/reassigned
const z = 100;
console.log(z);

z = 200; // TypeError: Assignment to constant variable.
console.log(z);
