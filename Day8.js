// Date , rest , spread , Dom

// let date = new Date();

// console.log(date);
// console.log(date.getDate());

// console.log(date.getMonth());   // 0-11
// console.log(date.getFullYear());    // year
// console.log(date.getDate());    // date 1-31
// console.log(date.getDay());    // 0-6
// console.log(date.getHours());    // greatest hour less than or equal current hours : minutes
// console.log(date.getMinutes());
// console.log(date.getSeconds());


// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toJSON());

/* ********************************************************************************* */

// Destructuring Arrays

// let arr = [10, 20, 30, 40, 50]
// let [num1, num2] = arr
// console.log(num1, num2);
// let [a, , b, , c] = arr

// let [p, ...q] = arr  // The is called rest operator
// console.log(p, q);


// let arr = [10]
// let [num1, num2] = arr
// console.log(num1, num2);

// let arr = [10]
// let [num1, num2 = 100] = arr

// console.log(num1, num2);


/* Desturcturing Objects */

let obj = {
    firstName : "Aditya",
    lastName : "Sharma",
    address : "my address"
}

// let {firstName} = obj;

// console.log(firstName);

let obj1 = {}

// obj1[firstName] = "shu"
// console.log(obj1);

let {lastName, ...other} = obj
console.log(lastName, other);