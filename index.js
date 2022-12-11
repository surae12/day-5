
//odd numbers...!!
const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds = [];
numbers.forEach((num) => {
    if (num % 2 === 1) {
        odds.push(num);
    }
});
console.log(odds);

//convert all the struings to title caps in an array

const str = "foo bar baz";
const newStr = str.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
console.log(newStr);

//sum of all the numbers in an array
var myNumbers = [1, 2, 3, 4, 5]
var total = 0;
for (var i = 0; i < myNumbers.length; i++) {
    total += myNumbers[i];
}

//Return all the prime numbers in an array

function sumPrimes(num) {

    let numArray = [];
    for (let i = 1; i <= num; i++) {
        numArray.push(i);
    }


    numArray.map((number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                let index = numArray.indexOf(number);
                return numArray.splice(index, 1);
            }
        }
    });

    return numArray;

}

sumPrimes(10);

// Return all the pallindromes in an array

const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;
};
const findPalindrome = arr => {
    return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));


// Rotate an array in k times

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
function RightRotate(a, n, k) {

    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {
            document.write(a[n + i - k] + " ");
        }
        else {
            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
}

RightRotate(Array, N, K);

var Arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(Arr));