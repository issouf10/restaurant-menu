//// STRING FUNCTIONS ////

function reverseString(str) {
    return str.split("").reverse().join("");
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


//// ARRAY FUNCTIONS ////

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr) {
    return arr.filter(num => num > 5);
}


//// MATH FUNCTIONS ////

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function fibonacci(n) {
    let seq = [0, 1];

    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }

    return seq;
}
console.log(reverseString("bonjour"));
console.log(countCharacters("bonjour"));
console.log(capitalizeWords("bonjour tout le monde"));

console.log(findMax([2,5,1,9]));
console.log(findMin([2,5,1,9]));
console.log(sumArray([1,2,3,4]));
console.log(filterArray([2,7,3,9]));

console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacci(7));