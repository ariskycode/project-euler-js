/*Multiples of 3 and 5 -
#Ref - https://projecteuler.net/problem=1
Problem Statement:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below a given number 'n'

Possible enchancements - 
Use bigNumber.js library to handle extemely large inputs
*/

function getSumofMultiplesOfTwoNumberUptoN(firstNumber, secondNumber, n) {
   return getSumOfMultiplesUptoN(firstNumber, n-1) + getSumOfMultiplesUptoN(secondNumber, n-1) - getSumOfMultiplesUptoN(firstNumber * secondNumber, n-1);
}

function getSumOfMultiplesUptoN(number, n) {
    let k = Math.floor(n/number);
    return number*(k)*(k+1)*(0.5);
}

function main() {
    console.log("Problem 001 - Multiples of 3 and 5")
    console.log("For n = 1000");
    let n = 1000;
    let firstNumber = 3;
    let secondNumber = 5;
    console.log("Sum of all multiples of 3and 5 upto n = " ,getSumofMultiplesOfTwoNumberUptoN(firstNumber, secondNumber, n));
}

