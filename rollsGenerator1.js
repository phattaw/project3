
 //with every spin, the result is unshift into the rolls array
    var rolls = [];
//the key of each key/value pair in hits object is the roulette number and the value is the number of hits
    var hits = {};
    var winsArrayH = [];
    var winsArrayHSorted = [];
    var winsArrayHRevSorted = [];
    var lucyLosers =[];
    var nateNumbers =[];
    var moneyWinnersSorted = [];
    var lastHitsArray = [];
    var letItRideArray = [];
// wheelSpins controls how many time the wheel is spun.  We can allow user input to set the value    
    var wheelSpins = 100;
    
//Christian creates an object of roulette numbers and records when the number first hit
function Christian(roulNumber, hitNumber){
    this.roulNumber = roulNumber;
    this.hitNumber = hitNumber;
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
    for(var i = 0; i < 38; i++){
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
    //console.log(rolls);
    }
    //function Jerry creates an unsorted array of 38 objects consisting of a key representing a wheel number and a value representing the number of hits
function Jerry(){        
    function Henry(numberH, totalWinsH) {
        this.numberH = numberH;
        this.totalWinsH = totalWinsH;
    }
    for (var [key, value] of Object.entries(hits)){
        winsArrayH.push(new Henry(key,value));
    }
    console.log("The winnersArrayH, Jerry, of roulette numbers and hits is ",winsArrayH);
}

//Renders array sorted by fewest wins to most
function Josh(){
    winsArrayHSorted = [...winsArrayH].sort((x,y)=> numberSort(x.totalWinsH, y.totalWinsH));
    console.log("winsArrayHSorted, least to most wins, is ", winsArrayHSorted);
}
//Renders array sorted by most wins to fewest
function Jim(){
    winsArrayHRevSorted = [...winsArrayH].sort((x,y)=> numberSort2(x.totalWinsH, y.totalWinsH));
    console.log("winsArrayHRevSorted, most to least wins,  is ", winsArrayHRevSorted);
}

//Renders array of five worst numbers over last 100
function Lucy(){
    lucyLosers = winsArrayHSorted.slice(0,5);
    for (var i= 0; i < lucyLosers.length; i++){
        console.log("Lucy, The worst five numbers- " + lucyLosers[i].numberH + " won " + lucyLosers[i].totalWinsH )
    }
}
//Renders array of five best numbers over last wheelSpins number
function Nate(){
    nateNumbers = winsArrayHRevSorted.slice(0,5);
    for (var i= 0; i < lucyLosers.length; i++){
        console.log("Nate, The best five numbers- " + nateNumbers[i].numberH + " won " + nateNumbers[i].totalWinsH )
    }
}

//renders an array of all numbers that would have won if played on all spins
function moneyWinners(){
    var i = 0;
    while(winsArrayHRevSorted[i].totalWinsH >= wheelSpins/35){
        moneyWinnersSorted.push(winsArrayHRevSorted[i]);
        i++;
    }
    console.log("moneyWinners, The number of winners if bet wheelSpins times is ",moneyWinnersSorted);
}

//renders an array of all numbers  by their first hit in the wheelSpins sample
function Jackie(){
    /*
    function Christian(roulNumber, hitNumber){
        this.roulNumber = roulNumber;
        this.hitNumber = hitNumber;
    } 
    */   
    for(var i = 0; i < 38; i++){
        var lastHit = new Christian(i, rolls.indexOf(i));
        if(lastHit.hitNumber!==-1){
        lastHitsArray.push(lastHit);
        }
    }
    lastHitsArray.sort((x,y)=> numberSort(x.hitNumber, y.hitNumber));
    console.log("Jackie, The lastHitsArray/index of last hit is ", lastHitsArray);
}

//This array renders the numbers that hit in the first 35 spins, which means they would be net winners if bet consecutively
function rollUntilHit(){
    var i = 0;
    //console.log("rollUntilHit", lastHitsArray[i]);
    
    do{
        letItRideArray.push(lastHitsArray[i]);
        i++;
    }
    
    while(lastHitsArray[i].hitNumber < 36);
    console.log("\n If you had bet these numbers 35 times consecutively, you would have walked away a winner- ");
    var winCount=0;
    for (var j=0;j<letItRideArray.length;j++){
        console.log("winCount is " + winCount);
        if(letItRideArray[j].hitNumber!==-1){
        console.log("Number: " + letItRideArray[j].roulNumber + " hit on spin "+letItRideArray[j].hitNumber);
        winCount++}
    }
    console.log("\n Out of 38 possible numbers, " + winCount + " of them would have been net winners in the last 35 spins")
    //console.log("letItRide array is ", letItRideArray);
}

//This makes it possible to call all the functions when the window loads
function conglomerate(){
createSpins();
Jerry();
Josh();
Jim();
Lucy();
Nate();
moneyWinners();
Jackie();
rollUntilHit();
}

//Calls all the functions when page loads
conglomerate();
