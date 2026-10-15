


let name = "Alex";
let age = 20;
let isStudent = true;
let favoriteColor = null;
let hobbies = ["coding", "reading"];

console.log(name, typeof name);               
console.log(age, typeof age);                 
console.log(isStudent, typeof isStudent);     
console.log(favoriteColor, typeof favoriteColor); 
console.log(hobbies, typeof hobbies);         

let result = text
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);

let number = Math.floor(Math.random() * 100) + 1;

console.log("Random number:", number);
console.log("Is even:", number % 2 === 0);
console.log("Square root:", Math.sqrt(number).toFixed(2));
console.log("10" + 2 * 3);


console.log(("10" + 2) * 3);


console.log(0 || "default");


console.log(0 ?? "default");


console.log(typeof NaN);


console.log("Kigali".slice(-3));

const price = 2500;
let qty = 3;

let total = price * qty;

console.log(`Total: ${total} RWF`);

let discount = 0.1;
discount = 0.2;

console.log(`Discount: ${discount * 100}%`);