/**
 * Javascript Relay Race: Loops and Arrays.
 * Feel free to declare new vars with any name you like for iterators, etc.
 * but if there's something already declared (like "myArray" or "start"), keep
 * the original name to avoid conflicts with the runner script. 
 */

/**
 * Question 1
 * Create a for loop that populates an array with the numbers 1 through 10 
 */

   var myArray = [];
   for(var i = 1; i < 11; i++){
   	myArray.push(i); 
   }

/**
 * Question 2
 * Using a while loop, subtract the numbers 1 through 10 from 100
 * Store the sum in the "sub" variable and print the sub and start to the console after each iteration.
 */

var sub = 100;
var start = 1;

while(start < 11) {
	sub = sub - start;
	console.log(sub);
	console.log(start);
	start++;
}

/**
 * Question 3
 * Using a for loop, programatically find the largest number in the array.
 * Store the largest number in a variable called "largest_num"
 */

var someNums = [3, 1, 88, -1, 33, 96, 35, 12, 72];
var largest_num = someNums[0];

for(var i=0; i<someNums.length; i++) {
	if (someNums[i] > largest_num) {
		largest_num = someNums[i];
	}
}


/**
 * Question 4
 * Using a for loop, programatically find the smallest number in the "someNums" array.
 * Store that number in "small"
 */

var small = someNums[0];
for(var i=0; i<someNums.length; i++) {
	if (someNums[i] < small) {
		small = someNums[i];
	}
}

/**
 * Question 5
 * Count how many elements appear in BOTH arrays. Store the number of duplicates in the 
 * variable "totalDuplicates". 
 * Hint: You will need to nest loops.
 */

var firstArray = ['peaches', 'apples', 'pears', 'oranges', 'plums', 'water melon', 'strawberries'];
var secondArray = ['blueberries', 'water melon', 'tomatoes', 'apples', 'plums', 'oranges', 'cantaloupe'];
var totalDuplicates = 0;

for(i=0; i<firstArray.length; i++) {
	for(j=0; j<secondArray.length; j++) {
		if (firstArray[i]== secondArray[j]) {
			totalDuplicates++;
		}
	}
}

/**
 * Question 6 
 * Count the number of unique elements are in the array. In other words, in the 
 * array [1, 2, 1] there are two unique numbers: 1 and 2.
 * Store the number of uniques in "totalUniques"
 * Hint: you'll need multiple for loops.
 */

var numbers = [3, 7, 1, 3, 23, 7, 98, 26, 1, 3];
var totalUniques = 0;
var found = [];

// numbers.sort();
for (i = 0; i < numbers.length; i++) {
	if(found.indexOf(numbers[i]) == -1) {
		found.push(numbers[i])
	}

}
console.log(found.length)
totalUniques = found.length;

	// for(j=0; j< numbers.length; j++){
	// 	if(numbers[i]==numbers[j]) {
	// 		found = true;
	// 		break;
	// 	}
	// 	if (!found) {totalUniques++}


