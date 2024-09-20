
// Answer 1:

function printFullName(firstName, lastName) {
    console.log(firstName, lastName);
}

// Answer 2:

function checkPositive(num) {
    if(num > 0) {
        console.log("positive");
    } else if(num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }
}

// Answer 3:

function printNumbers() {
    for(let i=1; i<11; i++) {
        console.log(i);
    }
}

// Answer 4:

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Aditya");

// Answer 5:

let arr = [1, 2, 3 ,4, 5];

function sumOfArray(arr) {
    let sum=0;
    for(let i=0; i<5; i++) {
        sum += arr[i];
    }

    return sum;
}
