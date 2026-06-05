
// Javascript Basics - Variables and Operators

// let firstName = "John";
// let lastName = "Doe";

// console.log(firstName);
// console.log(lastName);

// let age = 11;
// console.log(age); // outputs 11 to the console

// age = 54;

// console.log(age); // what will be output now?

// const pi = 3.14;
// //pi = 10;

// console.log(pi); // What will be output?

// // Assignment 1: Add two numbers together
// console.log(23 + 97)

// // Assignment 2: Add 6 numbers together
// console.log(7+8+9+112+3+6)

// // Assignment 3: Capture the log of the expression: (4+6+9)/77 
// // -- answer should be 0.24675
// console.log((4 + 6 + 9) / 77.)

// // Assignment 4: variables a and b
// let a = 10
// console.log(a)
// a=200
// console.log(a)

// let b = 7 * a
// console.log(b)

// // Assignment 5: const sequence of steps
// const max = 57
// const actual = max - 13
// const percentage = actual / max
// console.log(percentage) // should be 0.7719

// // Assignment 6: play around some more

// // Code from Javascript info on variables
// let message;

// message = 'Hello'; // store the string 'Hello' in a variable called message
// alert(message); // shows the variable content

// let a1 = 1, b1 = 1;
// let c1 = ++a1;
// let d1 = b1++;
// console.log('a1 is: ', a1);
// console.log('b1 is: ', b1);
// console.log('c1 is: ', c1);
// console.log('d1 is: ', d1);

// a = 2;
// let x = 1 + (a *= 2);
// console.log('x is: ', x);

// // Code from MDN: What is Javascript?
// function updateName() {
//     const name = prompt("Enter a new name");
//     button.textContent = `Player 1: ${name}`;
// }

// const button = document.querySelector("button");

// button.addEventListener("click", updateName);

// Javascript datatypes (from javascript.info)
// alert(1/0); //Infinity
// alert( Infinity); // also Infinity

// NaN
// alert("not a number" / 2); //NaN
// alert( NaN + 1);    // NaN
// alert(3*NaN);   //NaN
// alert("not a number"/2-1);   //NaN
// alert(NaN * 0); //answer is 1

// BigInt
// const bigInt = 1234567890123456789012345678901234567890n;
// alert(bigInt);

//String
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = ` can embed another ${str}`;
// alert(str);
// alert(str2);
// alert(phrase);

// let name = "John";

// // embed a variable
// alert(`Hello, ${name}!`);   //Hello, John!

// //embed an expression
// alert(`the result of 1+2 is ${1+2}`);   //the result is 3

//Boolean type
// let nameFieldChecked = true;
// let ageFieldChecked = false;
// alert('nameFieldCheck: ' + nameFieldChecked);
// alert('ageFieldChecked: ' + ageFieldChecked);
// let isGreater = 4 > 1;
// alert('isGreater: ' + isGreater);

// typeof operator
// alert(typeof undefined);// "undefined"
// alert(typeof 0); // "number"
// alert(typeof 10n); // "bigint"
// alert(typeof true); // "boolean"
// alert(typeof "foo"); // "string"
// alert(typeof Symbol("id")); // "symbol"
// alert(typeof Math );// "object"  (1)
// alert(typeof null); // "object"  (2)
// alert(typeof alert); // "function"  (3)

// MDN Strings
// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// alert(joined); // "Hello, how are you?"

// const button = document.querySelector("button");

// function greet() {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContext = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click",greet);

// const newLine = `One day you finally knew
// what you had to do, and began,`;
// console.log(newLine);
// alert(newLine);

// Numbers vs. strings
// const myString = "123";
// const myNum = Number(myString);
// alert(myNum);

// const myNum2 = 123;
// const myString2 = String(myNum2);
// alert(typeof myString2);

//Javascript string methods
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// alert("Text: " + text + " and the length: " + length);
// let char = text.charAt(0);
// alert("First char: " + char);
// let charCode = text.charCodeAt(0);
// alert("charCodeAt: " + charCode);

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    // if (choice === "sunny") {
    //     para.textContent =
    //         "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    // } else if (choice === "rainy") {
    //     para.textContent =
    //         "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    // } else if (choice === "snowing") {
    //     para.textContent =
    //         "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    // } else if (choice === "overcast") {
    //     para.textContent =
    //         "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    // } else {
    //     para.textContent = "";
    // }

    switch (choice) {
        case 'sunny':
            para.textContent =
                "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;
        case "rainy":
            para.textContent =
                "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
            break;
        case "snowing":
            para.textContent =
                "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;
        case "overcast":
            para.textContent =
                "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;
        default: para.textContent = "";
    }
}
