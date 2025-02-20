//Hiểu cách sử dụng let và const
let city = "Hà Nội";
console.log(city);
city = "Hồ Chí Minh";
console.log(city);

const country = "Việt Nam";
console.log(country);

//Viết hàm bằng Arrow Function
const sayHello = (name) => `Hello, ${name}!`;
console.log(sayHello("Alice"));

const welcome = () => "Welcome to ES6!";
console.log(welcome());

//Sử dụng Template Literals
const name = "John";
const age = 30;
const introduction = `My name is ${name}. I am ${age} years old and I live in New York.`;
console.log(introduction);

const html = `
  <h1>Hello, John</h1>
  <p>Welcome to ES6</p>
`;
console.log(html);

// Làm việc với Destructuring
const product = { name: "Laptop", price: 1500, brand: "Dell" };
const { name: productName, price } = product;
console.log(productName);
console.log(price);

const colors = ["red", "blue", "green"];
const [color1, color2] = colors;
console.log(color1);
console.log(color2);

//Sử dụng Spread và Rest Operator
const fruits = ["apple", "banana", "orange"];
const newFruits = [...fruits, "mango"];
console.log(newFruits);

const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sumAll(1, 2, 3, 4));

//Làm việc với Map, Filter, Reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//Tích hợp tất cả kiến thức
const processArray = (arr) => {
    const doubled = arr.map((num) => num * 2);
    const filtered = doubled.filter((num) => num > 5);
    const total = filtered.reduce((acc, num) => acc + num, 0);
    return total;
};

console.log(processArray([1, 2, 3, 4]));
