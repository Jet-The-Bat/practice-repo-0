"use strict";


// Write a function redundant that takes in a string str and returns a function that returns str.
function redundant(str) {
	return function (){
		return str;
	};
}

// Create a function that takes an array and returns the first element.
function getFirstValue(arr) {
	return arr[0];
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
	return ++num;
}

// Create a function that takes an array of numbers. Return the largest number in the array
function findLargestNum(arr) {
	return Math.max.apply(Math, arr);	
}