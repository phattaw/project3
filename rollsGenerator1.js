
//with every spin, the result is unshift into the rolls array
var rolls = [];
//the key of each key/value pair in hits object is the roulette number and the value is the number of hits
var hits = {};
var winsArrayH = [];
var winsArrayHSorted = [];
var winsArrayHRevSorted = [];
var lucyLosers = [];
var nateNumbers = [];
var moneyWinnersSorted = [];
var lastHitsArray = [];
var letItRideArray = [];
// wheelSpins controls how many time the wheel is spun.  We can allow user input to set the value    
var wheelSpins = 100;

//Christian creates an object of roulette numbers and records when the number first hit
function Christian(roulNumber, hitNumber) {
    this.roulNumber = roulNumber;
    this.hitNumber = hitNumber;
}
//Henry creates an object of roulette numbers and records the total hits
function Henry(numberH, totalWinsH) {
    this.numberH = numberH;
    this.totalWinsH = totalWinsH;
}

function numberSort(x, y) {
    return x - y;
}

function numberSort2(x, y) {
    return y - x;
}
//fuction populates the rolls array with each wheel spin and tracks the number of hits for each number in hits object
function createSpins() {
    var j = 0;
    //create an object of 38 key/value pairs with the initial value of wins set to 0. 
    for (var i = 0; i < 38; i++) {
        hits[i] = 0;
    }
    //create an array of wheelSpins number of spins with the most recent winning number at front of array.
    while (j < wheelSpins) {
        var rnd = Math.floor(Math.random() * 38);
        rolls.unshift(rnd);
        hits[rnd]++;
        j++
    }
    //console.log(hits);
    console.log(rolls);
}
//function Jerry creates an unsorted array of 38 objects consisting of a key representing a wheel number and a value representing the number of hits
function Jerry() {
    for (var [key, value] of Object.entries(hits)) {
        winsArrayH.push(new Henry(key, value));
    }
    //console.log("The winnersArrayH, Jerry, of roulette numbers and hits is ",winsArrayH);
}

//Renders array sorted by fewest wins to most
function Josh() {
    winsArrayHSorted = [...winsArrayH].sort((x, y) => numberSort(x.totalWinsH, y.totalWinsH));
    //console.log("winsArrayHSorted, least to most wins, is ", winsArrayHSorted);
}
//Renders array sorted by most wins to fewest
function Jim() {
    winsArrayHRevSorted = [...winsArrayH].sort((x, y) => numberSort2(x.totalWinsH, y.totalWinsH));
    //console.log("winsArrayHRevSorted, most to least wins,  is ", winsArrayHRevSorted);
}

//Renders array of five worst numbers over last 100
function Lucy() {
    lucyLosers = winsArrayHSorted.slice(0, 5);
    for (var i = 0; i < lucyLosers.length; i++) {
        //console.log("Lucy, The worst five numbers- " + lucyLosers[i].numberH + " won " + lucyLosers[i].totalWinsH )
    }
}
//Renders array of five best numbers over last wheelSpins number
function Nate() {
    nateNumbers = winsArrayHRevSorted.slice(0, 5);
    for (var i = 0; i < lucyLosers.length; i++) {
        //console.log("Nate, The best five numbers- " + nateNumbers[i].numberH + " won " + nateNumbers[i].totalWinsH )
    }
}

//renders an array of all numbers that would have won if played on all spins
function moneyWinners() {
    var i = 0;
    while (winsArrayHRevSorted[i].totalWinsH >= wheelSpins / 35) {
        moneyWinnersSorted.push(winsArrayHRevSorted[i]);
        i++;
    }
    //console.log("moneyWinners, The number of winners if bet wheelSpins times is ",moneyWinnersSorted);
}

//renders an array of all numbers  by their first hit in the wheelSpins sample
function Jackie() {
    for (var i = 0; i < 38; i++) {
        //console.log("index of i is " + rolls.indexOf(i));
        var lastHit = new Christian(i, rolls.indexOf(i));
        if (lastHit.hitNumber !== -1) {
            lastHitsArray.push(lastHit);
        }
    }
    lastHitsArray.sort((x, y) => numberSort(x.hitNumber, y.hitNumber));
    //console.log("Jackie, The lastHitsArray/index of last hit is ", lastHitsArray);
}

//This array renders the numbers that hit in the first 35 spins, which means they would be net winners if bet consecutively
function rollUntilHit() {
    var i = 0;
    //console.log("rollUntilHit", lastHitsArray[i]);

    do {
        letItRideArray.push(lastHitsArray[i]);
        i++;
    }

    while (lastHitsArray[i].hitNumber < 36);
    //console.log("\n If you had bet these numbers 35 times consecutively, you would have walked away a winner- ");
    var winCount = 0;
    for (var j = 0; j < letItRideArray.length; j++) {
        //console.log("winCount is " + winCount);
        if (letItRideArray[j].hitNumber !== -1) {
            //console.log("Number: " + letItRideArray[j].roulNumber + " hit on spin "+letItRideArray[j].hitNumber);
            winCount++
        }
    }
    //console.log("\n Out of 38 possible numbers, " + winCount + " of them would have been net winners in the last 35 spins")
    //console.log("letItRide array is ", letItRideArray);
}

function split(name, num1, num2) {
    this.name = name;
    this.nums = [num1, num2];
    this.hits = 0;
}; //two adjoining
function splitWins() {
    var splitWinsArray = [];
    splitWinObjects(splitWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        for (var j = 0; j < splitWinsArray.length; j++) {
            if (splitWinsArray[j].nums.includes(rolls[i])) {
                splitWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < splitWinsArray.length; k++) {
        console.log(splitWinsArray[k].name + " " + " " + splitWinsArray[k].hits);
    }
}

function splitWinObjects(splitWinsArray) {

    var split12 = new split("split12", 1, 2);
    splitWinsArray.push(split12);

    var split14 = new split("split14", 1, 4);
    splitWinsArray.push(split14);

    var split23 = new split("split23", 2, 3);
    splitWinsArray.push(split23);

    var split25 = new split("split25", 2, 5);
    splitWinsArray.push(split25);

    var split36 = new split("split36", 3, 6);
    splitWinsArray.push(split36);

    var split45 = new split("split45", 4, 5);
    splitWinsArray.push(split45);

    var split47 = new split("split47", 4, 7);
    splitWinsArray.push(split47);

    var split56 = new split("split56", 5, 6);
    splitWinsArray.push(split56);

    var split58 = new split("split58", 5, 8);
    splitWinsArray.push(split58);

    var split69 = new split("split69", 6, 9);
    splitWinsArray.push(split69);

    var split78 = new split("split78", 7, 8);
    splitWinsArray.push(split78);

    var split710 = new split("split710", 7, 10);
    splitWinsArray.push(split710);

    var split89 = new split("split58", 8, 9);
    splitWinsArray.push(split89);

    var split912 = new split("split912", 9, 12);
    splitWinsArray.push(split912);

    var split1011 = new split("split1011", 10, 11);
    splitWinsArray.push(split1011);

    var split1013 = new split("split1013", 10, 13);
    splitWinsArray.push(split1013);

    var split1112 = new split("split1112", 11, 12);
    splitWinsArray.push(split1112);

    var split1114 = new split("split1114", 11, 14);
    splitWinsArray.push(split1114);

    var split1215 = new split("split1215", 12, 15);
    splitWinsArray.push(split1215);

    var split1314 = new split("split1314", 13, 14);
    splitWinsArray.push(split1314);

    var split1316 = new split("split1316", 13, 16);
    splitWinsArray.push(split1316);

    var split1415 = new split("split1415", 14, 15);
    splitWinsArray.push(split1415);

    var split1417 = new split("split1417", 14, 17);
    splitWinsArray.push(split1417);

    var split1518 = new split("split1518", 15, 18);
    splitWinsArray.push(split1518);

    var split1617 = new split("split1617", 16, 17);
    splitWinsArray.push(split1617);

    var split1619 = new split("split1619", 16, 19);
    splitWinsArray.push(split1619);

    var split1718 = new split("split1718", 17, 18);
    splitWinsArray.push(split1718);

    var split1720 = new split("split1720", 17, 20);
    splitWinsArray.push(split1720);

    var split1821 = new split("split1821", 18, 21);
    splitWinsArray.push(split1821);

    var split1920 = new split("split1920", 19, 20);
    splitWinsArray.push(split1920);

    var split1922 = new split("split1922", 19, 22);
    splitWinsArray.push(split1922);

    var split2021 = new split("split2021", 20, 21);
    splitWinsArray.push(split2021);

    var split2023 = new split("split2023", 20, 23);
    splitWinsArray.push(split2023);

    var split2124 = new split("split2124", 21, 24);
    splitWinsArray.push(split2124);

    var split2223 = new split("split2223", 22, 23);
    splitWinsArray.push(split2223);

    var split2225 = new split("split2225", 22, 25);
    splitWinsArray.push(split2225);

    var split2324 = new split("split2324", 23, 24);
    splitWinsArray.push(split2324);

    var split2326 = new split("split2326", 23, 26);
    splitWinsArray.push(split2326);

    var split2427 = new split("split2427", 24, 27);
    splitWinsArray.push(split2427);

    var split2526 = new split("split2526", 25, 26);
    splitWinsArray.push(split2526);

    var split2528 = new split("split2528", 25, 28);
    splitWinsArray.push(split2528);

    var split2627 = new split("split2627", 26, 27);
    splitWinsArray.push(split2627);

    var split2629 = new split("split2629", 26, 29);
    splitWinsArray.push(split2629);

    var split2730 = new split("split2730", 27, 30);
    splitWinsArray.push(split2730);

    var split2829 = new split("split2829", 28, 29);
    splitWinsArray.push(split2829);

    var split2831 = new split("split2831", 28, 31);
    splitWinsArray.push(split2831);

    var split2930 = new split("split2930", 29, 30);
    splitWinsArray.push(split2930);

    var split2932 = new split("split2932", 29, 32);
    splitWinsArray.push(split2932);

    var split3033 = new split("split3033", 30, 33);
    splitWinsArray.push(split3033);

    var split3132 = new split("split3132", 31, 32);
    splitWinsArray.push(split3132);

    var split3134 = new split("split3134", 31, 34);
    splitWinsArray.push(split3134);

    var split3233 = new split("split3233", 32, 33);
    splitWinsArray.push(split3233);

    var split3235 = new split("split3235", 32, 35);
    splitWinsArray.push(split3235);

    var split3336 = new split("split3336", 33, 36);
    splitWinsArray.push(split3336);

    var split3435 = new split("split3435", 34, 35);
    splitWinsArray.push(split3435);

    var split3536 = new split("split3536", 35, 36);
    splitWinsArray.push(split3536);
}


function street(name, num1, num2, num3) {
    this.name=name;
    this.nums = [num1, num2, num3];
    this.hits = 0;
};//three in a row
function streetWins() {
    var streetWinsArray = [];
    streetWinObjects(streetWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        for (var j = 0; j < streetWinsArray.length; j++) {
            if (streetWinsArray[j].nums.includes(rolls[i])) {
                streetWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < streetWinsArray.length; k++) {
        console.log(streetWinsArray[k].name + " " + " " + streetWinsArray[k].hits);
    }
}

function streetWinObjects(streetWinsArray) {

    var street123 = new street("street123", 1, 2, 3);
    streetWinsArray.push(street123); 
    
    var street456 = new street("street456", 4,5,6);
    streetWinsArray.push(street456);
    
    var street789 = new street("street789", 7,8,9);
    streetWinsArray.push(street789);
    
    var street789 = new street("street789", 7,8,9);
    streetWinsArray.push(street789);
    
    var street789 = new street("street789", 7,8,9);
    streetWinsArray.push(street789);
    
    var street101112 = new street("street101112", 10,11,12);
    streetWinsArray.push(street101112);
    
    var street131415 = new street("street131415", 13,14,15);
    streetWinsArray.push(street131415);
    
    var street161718 = new street("street161718", 16,17,18);
    streetWinsArray.push(street161718);
    
    var street192021 = new street("street192021", 19,20,21);
    streetWinsArray.push(street192021);
    
    var street222324 = new street("street222324", 22,23,24);
    streetWinsArray.push(street222324);
    
    var street789 = new street("street789", 7,8,9);
    streetWinsArray.push(street789);
    
    var street789 = new street("street789", 7,8,9);
    streetWinsArray.push(street789);



function corner(name, num1, num2, num3, num4) {
    this.name=name;
    this.nums = [num1, num2, num3, num4];
    this.hits = 0;
};//four touching at a corner

function basket() {
    this.name=basket;
    this.nums = [0, 1, 2, 3, 37];
    this.hits = 0;
}//the five numbers at the top

function sixLine(name, num1, num2, num3, num4, num5, num6) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6];
    this.hits = 0;
}; //any two adjoining streets or rows

function vertCols(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];
    this.hits = 0;
}//columns of twelve numbers, each three greater than the last 

function dozens(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];
    this.hits = 0;
};//groups of twelve consecutive numbers

function oddEven(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18];
    this.hits = 0;
}//columns of twelve numbers, each three greater than the last;//easy enough

function redBlack(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18];
    this.hits = 0;
};//self-explanatory 

//This conglomerate() function makes it possible to call all the functions when the window loads
function conglomerate() {
    createSpins();
    Jerry();
    Josh();
    Jim();
    Lucy();
    Nate();
    moneyWinners();
    Jackie();
    rollUntilHit();
    splitWins();
}

//Calls all the functions when page loads
conglomerate();
