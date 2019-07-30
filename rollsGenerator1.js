const API = require( "./client/src/utils/API.js");

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
    console.log("rolls lenght is "+rolls.length);
    API.saveRolls(rolls.map(r=>{ return {roll:r}; })).then(res=>{console.log(res)});
}
//function Jerry creates an unsorted array of 38 objects consisting of a key representing a wheel number and a value representing the number of hits
function Jerry() {
    for (var [key, value] of Object.entries(hits)) {
        winsArrayH.push(new Henry(key, value));
    }
    console.log("The winnersArrayH, Jerry, of roulette numbers and hits is ",winsArrayH);
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
    //console.log("\n If you had bet any of these numbers 35 times consecutively, you would have walked away a winner- ");
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
        //console.log(splitWinsArray[k].name + " " + " " + splitWinsArray[k].hits);
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
    //console.log("rolls streetWins is "+ rolls.length)
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        for (var j = 0; j < streetWinsArray.length; j++) {
            if (streetWinsArray[j].nums.includes(rolls[i])) {
                streetWinsArray[j].hits++;
            }
        }
    }
    streetWinsTotal = 0;
    for (var k = 0; k < streetWinsArray.length; k++) {
        //console.log(streetWinsArray[k].name + " " + " " + streetWinsArray[k].hits);
        streetWinsTotal+=streetWinsArray[k].hits;
        //The console.log below verifies that it works. streetWinsTotal will equal 100 minus the hits for 0 and 37
        //console.log("StreetWinsTotal equal " +streetWinsTotal);
    }
}

function streetWinObjects(streetWinsArray) {

    var street123 = new street("street123", 1, 2, 3);
    streetWinsArray.push(street123); 
    
    var street456 = new street("street456", 4,5,6);
    streetWinsArray.push(street456);
    
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
    
    var street252627 = new street("street252627", 25,26,27);
    streetWinsArray.push(street252627);
    
    var street282930 = new street("street282930", 28,29,30);
    streetWinsArray.push(street282930);
    
    var street313233 = new street("street313233", 31,32,33);
    streetWinsArray.push(street313233);
    
    var street343536 = new street("street343536", 34,35,36);
    streetWinsArray.push(street343536);
}

function corner(name, num1, num2, num3, num4) {
    this.name=name;
    this.nums = [num1, num2, num3, num4];
    this.hits = 0;
};//four touching at a corner

function cornerWins() {
    var cornerWinsArray = [];
    cornerWinObjects(cornerWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        for (var j = 0; j < cornerWinsArray.length; j++) {
            if (cornerWinsArray[j].nums.includes(rolls[i])) {
                cornerWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < cornerWinsArray.length; k++) {
        //console.log(cornerWinsArray[k].name + " " + " " + cornerWinsArray[k].hits);
    }
}

function cornerWinObjects(cornerWinsArray) {
    var corner1245 = new corner("corner1245", 1, 2, 4, 5);
    cornerWinsArray.push(corner1245); 

    var corner2356 = new corner("corner2356", 2,3,5,6);
    cornerWinsArray.push(corner2356); 
    
    var corner4578 = new corner("corner4578", 4,5,7,8);
    cornerWinsArray.push(corner4578);  
    
    var corner5689 = new corner("corner5689", 5,6,8,9);
    cornerWinsArray.push(corner5689); 
    
    var corner781011 = new corner("corner781011", 7,8,10,11);
    cornerWinsArray.push(corner781011); 
    
    var corner891112 = new corner("corner891112", 8,9,11,12);
    cornerWinsArray.push(corner891112); 
    
    var corner10111314 = new corner("corner10111314", 10,11,13,14);
    cornerWinsArray.push(corner10111314); 
    
    var corner11121415 = new corner("corner11121415", 11,12,14,15);
    cornerWinsArray.push(corner11121415); 
    
    var corner13141617 = new corner("corner13141617", 13,14,16,17);
    cornerWinsArray.push(corner13141617); 
    
    var corner14151718 = new corner("corner14151718", 14,15,17,18);
    cornerWinsArray.push(corner14151718); 
    
    var corner16171920 = new corner("corner16171920", 16,17,19,20);
    cornerWinsArray.push(corner16171920); 
    
    var corner17182021 = new corner("corner17182021", 17,18,20,21);
    cornerWinsArray.push(corner17182021);   
    
    var corner19202223 = new corner("corner19202223", 19,20,22,23);
    cornerWinsArray.push(corner19202223); 
    
    var corner20212324 = new corner("corner20212324", 20,21,23,24);
    cornerWinsArray.push(corner20212324);  
    
    var corner22232526 = new corner("corner22232526", 22,23,25,26);
    cornerWinsArray.push(corner22232526);   
    
    var corner23242627 = new corner("corner23242627", 23,24,26,27);
    cornerWinsArray.push(corner23242627);   
    
    var corner25262829 = new corner("corner25262829", 25,26,28,29);
    cornerWinsArray.push(corner25262829);   
    
    var corner26272930 = new corner("corner26272930", 26,27,29,30);
    cornerWinsArray.push(corner26272930);   
    
    var corner28293132 = new corner("corner28293132", 28,29,31,32);
    cornerWinsArray.push(corner28293132);  
    
    var corner28293132 = new corner("corner28293132", 28,29,31,32);
    cornerWinsArray.push(corner28293132);  
    
    var corner29303233 = new corner("corner29303233", 29,30,32,33);
    cornerWinsArray.push(corner29303233);  
    
    var corner31323435 = new corner("corner31323435", 31,32,34,35);
    cornerWinsArray.push(corner31323435);  
    
    var corner32333536 = new corner("corner32333536", 32,33,35,36);
    cornerWinsArray.push(corner32333536); 
}

function basketWins() {
    var basket = {
    name:"basket",
    nums : [0, 1, 2, 3, 37],
    hits : 0
}//the five numbers at the top
    //var cornerWinsArray = [];
    //cornerWinObjects(cornerWinsArray);
    //var Jolie = new basket(Jolie);
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        //for (var j = 0; j < cornerWinsArray.length; j++) {
            if (basket.nums.includes(rolls[i])) {
                basket.hits++;
            }
        //}
    }
    
        //console.log("The basket of 0,00,1,2,3 had " + basket.hits);
   
}function dozens(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];
    this.hits = 0;
};//groups of twelve consecutive numbers

//three contiguous numbers of 0, 00, 1,2, or 3
function trio(name, num1, num2, num3) {
    this.name=name;
    this.nums = [num1, num2, num3];
    this.hits = 0;
}; //any two adjoining streets or rows

function trioWins() {
    var trioWinsArray = [];
    trioWinObjects(trioWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        for (var j = 0; j < trioWinsArray.length; j++) {
            if (trioWinsArray[j].nums.includes(rolls[i])) {
                trioWinsArray[j].hits++;
            }
        }
    }
    
    for (var k = 0; k < trioWinsArray.length; k++) {
        //console.log(trioWinsArray[k].name + " " + " " + trioWinsArray[k].hits);
    }
}

function trioWinObjects(trioWinsArray) {
    var trio012 = new trio("trio012", 0,1,2);
    trioWinsArray.push(trio012);

    var trio0023 = new trio("trio0023", 37,1,2);
    trioWinsArray.push(trio0023);
}

function sixLine(name, num1, num2, num3, num4, num5, num6) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6];
    this.hits = 0;
}; //any two adjoining streets or rows

function sixLineWins() {
    var sixLineWinsArray = [];
    sixLineWinObjects(sixLineWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        //console.log(rolls[i]);
        for (var j = 0; j < sixLineWinsArray.length; j++) {
            if (sixLineWinsArray[j].nums.includes(rolls[i])) {
                sixLineWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < sixLineWinsArray.length; k++) {
        //console.log(sixLineWinsArray[k].name + " " + " " + sixLineWinsArray[k].hits);
    }
}

function sixLineWinObjects(sixLineWinsArray) {
    var sixLine1_6 = new sixLine("sixLine1_6", 1, 2, 3, 4, 5, 6);
    sixLineWinsArray.push(sixLine1_6);

    var sixLine4_9= new sixLine("sixLine4_9", 4,5,6,7,8,9);
    sixLineWinsArray.push(sixLine4_9); 

    var sixLine7_12= new sixLine("sixLine7_12", 7,8,9,10,11,12);
    sixLineWinsArray.push(sixLine7_12); 

    var sixLine10_15= new sixLine("sixLine10_15", 10,11,12,13,14,15);
    sixLineWinsArray.push(sixLine10_15);  

    var sixLine13_18= new sixLine("sixLine13_18", 13,14,15,16,17,18);
    sixLineWinsArray.push(sixLine13_18); 

    var sixLine16_21= new sixLine("sixLine16_21", 16,17,18,19,20,21);
    sixLineWinsArray.push(sixLine16_21); 

    var sixLine19_24= new sixLine("sixLine19_24", 19,20,21,22,23,24);
    sixLineWinsArray.push(sixLine19_24); 

    var sixLine22_27= new sixLine("sixLine22_27", 22,23,24,25,26,27);
    sixLineWinsArray.push(sixLine22_27);  

    var sixLine25_30= new sixLine("sixLine25_30", 25,26,27,28,29,30);
    sixLineWinsArray.push(sixLine25_30); 

    var sixLine28_33= new sixLine("sixLine28_33", 28,29,30,31,32,33);
    sixLineWinsArray.push(sixLine28_33); 

    var sixLine31_36= new sixLine("sixLine31_36", 31,32,33,34,35,36);
    sixLineWinsArray.push(sixLine31_36);
    //console.log("sixLineWinsArray is " + sixLineWinsArray);
}

function columns(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];
    this.hits = 0;
};//groups of twelve consecutive numbers
function columnsWins() {
    var columnsWinsArray = [];
    columnsWinObjects(columnsWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        for (var j = 0; j < columnsWinsArray.length; j++) {
            if (columnsWinsArray[j].nums.includes(rolls[i])) {
                columnsWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < columnsWinsArray.length; k++) {
        console.log(columnsWinsArray[k].name + " " + " " + columnsWinsArray[k].hits);
    }
}

function columnsWinObjects(columnsWinsArray) {
    var columnsLeft = new columns("columnsLeft", 1,4,7,10,13,16,19,22,25,28,31,34);
    columnsWinsArray.push(columnsLeft)
    
    var columnsMiddle = new columns("columnsMiddle", 2,5,8,11,14,17,20,23,26,29,32,35);
    columnsWinsArray.push(columnsMiddle);
    
    var columnsRight = new columns("columnsRight", 3,6,9,12,15,18,21,24,27,30,33,36);
    columnsWinsArray.push(columnsRight);
}


function dozens(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12];
    this.hits = 0;
};//groups of twelve consecutive numbers
function dozensWins() {
    var dozensWinsArray = [];
    dozensWinObjects(dozensWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        for (var j = 0; j < dozensWinsArray.length; j++) {
            if (dozensWinsArray[j].nums.includes(rolls[i])) {
                dozensWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < dozensWinsArray.length; k++) {
        //console.log(dozensWinsArray[k].name + " " + " " + dozensWinsArray[k].hits);
    }
}

function dozensWinObjects(dozensWinsArray) {
    var dozens1_12 = new dozens("dozens1_12", 1, 2, 3, 4, 5, 6,7,8,9,10,11,12);
    dozensWinsArray.push(dozens1_12);
    
    var dozens13_24 = new dozens("dozens13_24", 13,14,15,16,17,18,19,20,21,22,23,24);
    dozensWinsArray.push(dozens13_24);
    
    var dozens25_36 = new dozens("dozens25_36", 25,26,27,28,29,30,31,32,33,34,35,36);
    dozensWinsArray.push(dozens25_36);
}

//the eighteen lowest and eighteen highest numbers 
function highLow(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18];
    this.hits = 0;
}
function highLowWins() {
    var highLowWinsArray = [];
    highLowWinObjects(highLowWinsArray);
    var rollsJim=0;
    for (var i = 0; i < rolls.length; i++) {
        for (var j = 0; j < highLowWinsArray.length; j++) {
            if (highLowWinsArray[j].nums.includes(rolls[i])) {
                highLowWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < highLowWinsArray.length; k++) {
        console.log(highLowWinsArray[k].name + " " + " " + highLowWinsArray[k].hits);
    }
}

function highLowWinObjects(highLowWinsArray) {
    var highLow1_18 = new highLow("highLow1_18", 1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18);
    highLowWinsArray.push(highLow1_18);

    var highLow19_36 = new highLow("highLow19_36", 19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36);
    highLowWinsArray.push(highLow19_36);
}

function oddEven(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18];
    this.hits = 0;
}
function oddEvenWins() {
    var oddEvenWinsArray = [];
    oddEvenWinObjects(oddEvenWinsArray);
    var rollsJim=0;
    for (var i = 0; i < rolls.length; i++) {
        rollsJim++
        //console.log(rolls[i]);
        for (var j = 0; j < oddEvenWinsArray.length; j++) {
            if (oddEvenWinsArray[j].nums.includes(rolls[i])) {
                oddEvenWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < oddEvenWinsArray.length; k++) {
        console.log(oddEvenWinsArray[k].name + " " + " " + oddEvenWinsArray[k].hits);
    }
}

function oddEvenWinObjects(oddEvenWinsArray) {
    var odd = new oddEven("odd", 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35);
    oddEvenWinsArray.push(odd);

    var even = new highLow("even",2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36);
    oddEvenWinsArray.push(even);
}

function redBlack(name, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18) {
    this.name=name;
    this.nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18];
    this.hits = 0;
};//self-explanatory 

function redBlackWins() {
    var redBlackWinsArray = [];
    redBlackWinObjects(redBlackWinsArray);
    for (var i = 0; i < rolls.length; i++) {
        for (var j = 0; j < redBlackWinsArray.length; j++) {
            if (redBlackWinsArray[j].nums.includes(rolls[i])) {
                redBlackWinsArray[j].hits++;
            }
        }
    }
    for (var k = 0; k < redBlackWinsArray.length; k++) {
        console.log(redBlackWinsArray[k].name + " " + " " + redBlackWinsArray[k].hits);
    }
}

function redBlackWinObjects(redBlackWinsArray) {
    var red = new redBlack("red", 1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36);
    redBlackWinsArray.push(red);

    var black = new redBlack("black",2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35);
    redBlackWinsArray.push(black);
}


//This conglomerate() function makes it possible to call all the functions when the window loads
function conglomerate() {
    createSpins();
    // Jerry();
    // Josh();
    // Jim();
    // Lucy();
    // Nate();
    // moneyWinners();
    // Jackie();
    // rollUntilHit();
    // splitWins();
    // streetWins();
    // cornerWins();
    // basketWins();
    // sixLineWins();
    // highLowWins();
    // dozensWins();
    // trioWins();
    // columnsWins();
    // oddEvenWins();
    // redBlackWins();
}
//Calls all the functions when page loads
conglomerate();
