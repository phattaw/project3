"use strict";

var $ = function (id) {
    return document.getElementById(id);
}

//Count the number of spins of the roulette wheel
var spinCounter = 0;
//Create an array of winning numbers
var winningNumbers = [];
//Each winning number/wheel spin is assigned to the wheelSpin variable
//in the createSpinArray function below.
var wheelSpin;
//numbersConcat is a concatenation of winning numbers/wheel spins.
var numbersConcat = "";
//Assign the winningNumbers to a newArray, sortedNumbers, so I can manipulate the numbers
//(sort(), etc.) without chahging the original winningNumbers array, esp. the order of 
//array elements
var sortedNumbers = [];
//topNumbersArray is an array composed of arrays (winnersArray) of winning numbers.  In other words, 
//every time a number comes up on the wheel, it is pushed to the appropriate sub-array, winnersArray
//
var topNumbersArray = [];
var winningArray = [];
var arraySlice = [];
var countWinnersArray = [];

//This function uses the Math.random method to simulate each spin of the roulette wheel.  
//The parameter topNum sets the upper limit of the range.  In this case, it's 38 the number
//of slots on an American roulette wheel.     
function randNum(topNum) {
    var flint;
    flint = Math.random();
    flint = Math.floor(flint * topNum);
    //flint = flint + 1;
    return flint;
}

function runProg() {
    createSpinArray();
    sortSpinArray();
    topNumbers();
    afterClone();
    countWinners();
    spinsSinceWin();

    //$("messageFour").innerHTML = "The minimum number of rolls was " + rollMin + "<br><br>";
    //$("messageThree").innerHTML = "Total Iterations of random numbers until equality equals " + turnCount + "<br><br>";
    //$("messageTwo").innerHTML = "Total Rolls equal " + rollTotal + "<br><br>";
    //$("message").innerHTML = printOut;
}

//This function spins the roulette wheel the specified number of times and 1) pushes the result to the
//winningNumbers array and concatenates it to the numbersConcat string.
function createSpinArray() {
    do {
        wheelSpin = randNum(38);
        //I had to assign the slot value "00" as a string replacement for the number 38 when 38 is randomly generated.
        //I'll probably have to come up with a way to convert string to number and number to string as needed for 
        //different operations.  
        //I KNOW!!  I could create a function (or object and method) to switch "00" to 0 and 0
        // to "00" as need be.        
        //if (wheelSpin === 37)
        //  {wheelSpin = "00"};
        winningNumbers.unshift(wheelSpin);
        //Note that I'm using unshift() because each spin goes to the beginning of the array
        spinCounter++;
        numbersConcat += ("<br>" + wheelSpin);
    }

    while (spinCounter < 1000);
    $("message").innerHTML = "MESSSAGE 2- The array of winning numbers is " + winningNumbers.join("<br>") + "<br><br>";
}


function numberSort(x, y) {
    return x - y;
   // return y - x;
}

function sortSpinArray() {
    /*
    REMEMBER THAT WE'LL NEED CODE TO HANDLE CONVERTING 37 TO 00
    for (var j = 0; j < winningNumbers.length; j++){
        if (winningNumbers[j] == "00"){
            winningNumbers[j] = 0;
        }
        */
    sortedNumbers = [...winningNumbers];
    sortedNumbers.sort(numberSort);
    //console.log("After sorting the winning numbers array is " + sortedNumbers);
    //$("messageTwo").innerHTML = "MESSAGE 1 - The winning numbers sorted are " + sortedNumbers.join("<br>");
}
function topNumbers() {
    var startSlice = 0;
    //I start the for loop with 1 because I only need to start comparing with the
    //second element in the array.
    //const sortedNumbers = [...winningNumbers];
    //sortedNumbers.sort(numberSort);
    console.log("The length of sortedNumbers is " + sortedNumbers.length);
    for (var k = 1; k < sortedNumbers.length; k++) {
        if ((sortedNumbers[k] !== sortedNumbers[k - 1])) {
            //console.log("the end of the string for slice is " + k);
            //This loops through the sorted array of winning numbers, sortedNumbers, and
            //pushs an element consisting of strings of matched numbers into the topNumbersArray.

            //var arrayLength = k - startSlice;
            //console.log("the value of k used in slice method is " + k);
            //console.log("the startSlice used in slice method is " + startSlice);
            //console.log("arrayLength used in slice method is " + arrayLength);
            // console.log("sorted numbers array is " + sortedNumbers.toString());
            console.log("startSlice is " + startSlice + " and k is " + k);
            arraySlice = sortedNumbers.slice(startSlice, k);

            //console.log("Array Slice is " + arraySlice);
            //console.log("array slice is " + arraySlice);
            //console.log("The array slice is ", arraySlice);
            //console.log(" ");
            topNumbersArray.push(arraySlice);
            //topNumbersArray[k - 1] = arraySlice
            //console.log("the top numbers array is " + topNumbersArray);
            startSlice = k;
            //console.log("the final startSlice is " + startSlice);
            //startingIndex = sortedNumbers[k];
        }
        if (k + 1 === (sortedNumbers.length)) {
            console.log(startSlice, k);
            arraySlice = sortedNumbers.slice(startSlice, k);
            topNumbersArray.push(arraySlice);
        }
    }

    //for (var l = 0; l < topNumbersArray.length; l++){
    //console.log("The next element of topNumbersArray is " + topNumbersArray[l]);
    //}
    console.log("top numbers array is ", topNumbersArray);

    console.log("The length of the arrays array topNumbersArray is " + topNumbersArray.length);
    //$("messageThree").innerHTML = "MESSAGE 3- The elements of the TopNumbers array is " + topNumbersArray.join("<br>");
    //topNumbersArray;
}

function afterClone() {
    //$("messageFour").innerHTML = "MESSAGE 4- The array of winning numbers after clone should be unchanged and is " + winningNumbers.join("<br>") + "<br><br>";
}
function countWinners() {
    for (var n = 0; n < topNumbersArray.length; n++) {
        console.log("the number of winners in " + n + " is " + topNumbersArray[n].length);
        countWinnersArray.push(topNumbersArray[n].length);
    }
    console.log("countWinners array is ", countWinnersArray);
    console.log("The length of countWinners array is ", countWinnersArray.length);
    $("messageFive").innerHTML = "MESSAGE 5- The number of winners from 0 to 37 is " + countWinnersArray.join("<br>");
}

function spinsSinceWin() {
    var spinsSinceWinMsg = "";
    for (var p = 0; p < 38; p++){
    // var p = 10;
    spinsSinceWinMsg += "The number of spins since a hit for " + p + " is " + winningNumbers.indexOf(p) + "<br>";
    // + p + " is " + winningNumbers.indexOf(p) + "<br>";
    }
    $("messageSix").innerHTML = spinsSinceWinMsg;
}

window.onload = function () {
    $("spinWheel").onclick = runProg;
}
