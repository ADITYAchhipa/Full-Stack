

// Answer 1
let arr = [1, 2, 3]
console.log(arr.push(4));
console.log(arr);

// Answer 2
console.log(arr.pop());
console.log(arr);

// Answer 3
console.log(arr.shift());
console.log(arr);

// Answer 4
console.log(arr.unshift(1));
console.log(arr);

// Answer 5
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.slice(7));
console.log(arr);
console.log(arr.splice(0, 3));
console.log(arr);

// Answer 6
let brr = arr.slice(2)
console.log(arr);
console.log(brr);
let crr = arr.slice(1, 4)
console.log(arr);
console.log(crr);

// Answer 7 
console.log(arr.indexOf(5));
console.log(arr.indexOf(-5));

// Answer 8

let newArr = arr.map((item, idx) => {
    return arr[idx] * 2;
})

let newArr2 = arr.map((item) => {
    return item * item;
})

console.log(newArr);
console.log(newArr2);

// Answer 9

let arr2 = arr.filter((item)=>{
    return item*item > 40;
})

console.log(arr2);

// Answer 10
let sum = arr.reduce((sum=0, item) => {
    return sum += item;
})  
console.log(arr);
console.log(sum);