// var pic = 'ammar'
// let ab = 'ammar'
// const bc = 'ammar'

// console.log(pic);
// console.log(ab);
// console.log(bc);

// yes they all are accessible globally




// function abc(){
//     var pic = 'ammar'
//     let ab = 'ammar'
//     const bc = 'ammar'
// }

// console.log(pic);
// console.log(ab);
// console.log(bc);
// abc()

// var , let and const is function scope so when u declare this in function scope it cannot be console outside the function scope


// {
//   var pic = 'ammar'
//   let ab = 'ammar'
//   const bc = 'ammar'    
// }
// console.log(pic);
// console.log(ab);
// console.log(bc);



// var is not block scope so it can console outside the block scope. but let and const is a blockscope so it can not console outside the block scope.


// console.log(abc);

// We get 'undifined' bcz var is hoisted variable so 'var abc' hoisted to top of this page so that's why we get undifined

// console.log(ab);

// let ab = 'ammar'

// console.log(bc);

// const bc = 'ammar'

// ab or bc  cannot access before initialization


// var name;
// var name;

// in var if u declare 2 variable with same variable there is no error the second one rewrite on the first one


// let name ;
// let name;
// using let if u declare 2 same variable there is an error in js file


// const name = 'ammar'
// const name = 'ammar'

// using const if u declare 2 same variable there is an error in js file


// var name = 'ammar'
// name ='ahmed'
// console.log(name);

// var can intitliaze variable

// let name = 'ammar'
// name ='ahmed'
// console.log(name);


// let can intitliaze variable


// const name = 'ammar'
// name = 'ahmed'
// console.log(name);


// const cannot be intitliaze variable

// console.log(abc);


// {
//     let abc = 'ammar'
// }

// console.log(abc);


// {
//     const abc = 'ammar'
// }

// let and const can not be get on before initilization


// function calculateDiscount() {
//     var discount = 10; 
//     if (true) {
//         var discount = 20; 
//     }
//     console.log(discount); 
// }

// calculateDiscount(); 


// function calculateTotalPrice(prices) {
//     let total = 0;

//     for (let i = 0; i < prices.length; i++) {
//         let price = prices[i]; 
//         total += price;
//     }

//     console.log("Total Price:", total);
// }

// calculateTotalPrice([10, 20, 30]); 



// function getUserDetails() {
//     const user = {
//         name: "Alice",
//         age: 25
//     };


//     user.age = 26;

//     console.log(user); 
// }

// getUserDetails();


// let firstName = 'ammar'
// let lastName = 'ahmed'

// console.log(`My name is ${firstName} ${lastName}`);

// const address = `
// 123 Main Street
// Apartment 4B
// Springfield, IL 62701
// USA
// `;

// console.log(address);



// const num1 = 5;
// const num2 = 7;

// const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

// console.log(result);



// function multiply(num1, num2) {
//     return num1 * num2;
// }


// const result = `The product of 8 and 5 is ${multiply(8, 5)}.`;

// console.log(result);




// function logTemplate(strings, ...values) {
//     console.log('Template parts:', strings);
//     console.log('Values:', values);
// }


// const name = 'Alice';
// const age = 25;

// logTemplate`Hello, my name is ${name} and I am ${age} years old.`;



// function uppercase(strings, ...values) {

//     let result = strings[0];
    
//     values.forEach((value, index) => {
//         result += value + strings[index + 1];
//     });

//     return result.toUpperCase();
// }


// const name = 'Alice';
// const city = 'Wonderland';

// const formattedString = uppercase`Hello, my name is ${name} and I live in ${city}.`;

// console.log(formattedString);


// const currentHour = new Date().getHours();

// const message = `${currentHour < 12 ? "Good morning!" : "Good afternoon!"}`;

// console.log(message);



// const shoppingList = ['Milk', 'Eggs', 'Bread', 'Butter', 'Cheese'];


// const htmlList = `
//   <ul>
//     ${shoppingList.map(item => `<li>${item}</li>`).join('')}
//   </ul>
// `;

// console.log(htmlList);


// const message = `This is a backtick: \``;

// console.log(message);



// const headers = ['Name', 'Age', 'City'];
// const data = [
//   ['Alice', 30, 'New York'],
//   ['Bob', 25, 'Los Angeles'],
//   ['Charlie', 35, 'Chicago']
// ];


// const tableHTML = `
//   <table border="1">
//     <thead>
//       <tr>
//         ${headers.map(header => `<th>${header}</th>`).join('')}
//       </tr>
//     </thead>
//     <tbody>
//       ${data.map(row => `
//         <tr>
//           ${row.map(cell => `<td>${cell}</td>`).join('')}
//         </tr>
//       `).join('')}
//     </tbody>
//   </table>
// `;

// console.log(tableHTML);

// const age = 20;

// const canVote = age >= 18 ? "Yes" : "No";

// console.log(canVote);



// const number = 7;

// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

// console.log(evenOrOdd);


// const score = 85;

// const grade = score >= 90 ? "A" : 
//               score >= 80 ? "B" : 
//               score >= 70 ? "C" : 
//               score >= 60 ? "D" : "F";

// console.log(grade);



// const isLoggedIn = true; 

// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// console.log(statusMessage);


// const isMember = true;  
// const purchaseAmount = 120;  

// const discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.10 : 0;

// console.log(discount);



// function maxValue(a, b) {
//     return a > b ? a : b;
//   }
  
//   const result = maxValue(5, 8);
//   console.log(result);


// function greet(name) {
//     return name ? `Hello, ${name}!` : "Hello, guest!";
//   }
  
//   console.log(greet("Alice"));  
  
//   console.log(greet("")); 
  
//   console.log(greet());  


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const modifiedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);

// console.log(modifiedNumbers);


// const strings = ['apple', 'hi', 'banana', 'cat', 'dog', 'elephant'];

// const longStrings = strings.filter(str => str.length > 3 ? true : false);

// console.log(longStrings);


// const originalArray = [1, 2, 3, 4, 5];

// const copiedArray = [...originalArray];

// console.log("Original Array:", originalArray);
// console.log("Copied Array:", copiedArray);

// console.log("Are they the same reference?", originalArray === copiedArray);



// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const mergedArray = [...array1, ...array2];

// console.log(mergedArray);



// const numbers = [2, 3, 4];

// const updatedNumbers = [1, ...numbers, 5];

// console.log(updatedNumbers);



// const originalObject = { name: "Alice", age: 25, city: "New York" };

// const copiedObject = { ...originalObject };

// console.log("Original Object:", originalObject);
// console.log("Copied Object:", copiedObject);

// console.log("Are they the same reference?", originalObject === copiedObject);



// const object1 = { name: "Alice", age: 25, city: "New York" };
// const object2 = { age: 30, city: "Los Angeles", country: "USA" };

// const mergedObject = { ...object1, ...object2 };

// console.log(mergedObject);


// const user = {
//     name: "John Doe",
//     age: 30,
//     email: "johndoe@example.com"
//   };
  
//   const updatedUser = {
//     ...user,              
//     email: "john.newemail@example.com",  
//     address: "123 Main St" 
//   };
  
//   console.log(updatedUser);



// function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   const numbers = [5, 10, 15];
  
//   const result = sum(...numbers);
  
//   console.log(result);



// function combineArrays(...arrays) {
//     return [].concat(...arrays);
//   }
  
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];
  
//   const result = combineArrays(array1, array2, array3);
  
//   console.log(result)


// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// const copiedArray = [...nestedArray];

// copiedArray[0][0] = 10;  
// copiedArray[2][1] = 20;  

// console.log("Original Array:", nestedArray);
// console.log("Copied Array:", copiedArray);


// const numbers = [10, 20, 30, 40, 50];

// const [first, ...rest] = numbers;

// console.log("First element:", first); 
// console.log("Remaining elements:", rest);


// const person = {
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//     address: "123 Main St"
//   };
  
  
//   const { name, email, ...rest } = person;
  
//   console.log("Name:", name);
//   console.log("Email:", email);
//   console.log("Rest of the properties:", rest);


// const student = {
//     id: 1,
//     name: "Jane Doe",
//     grades: [90, 85, 88],
//     info: {
//       age: 21,
//       major: "Computer Science"
//     }
//   };
  

//   const { id, name, info: { major }, ...rest } = student;
  
//   console.log("ID:", id); 
//     console.log("Name:", name); 
//   console.log("Major:", major); 
//   console.log("Rest of the properties:", rest);



// const colors = ["red", "green", "blue", "yellow"];

// const [primaryColor, , tertiaryColor] = colors;

// console.log("Primary Color:", primaryColor);  
// console.log("Tertiary Color:", tertiaryColor);




const nestedArray = [[1, 2], [3, 4], [5, 6]];

const [[a], [b], [c]] = nestedArray;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);