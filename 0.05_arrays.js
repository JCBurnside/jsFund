var hobbies=["CODING","GAMING","SLEEP","BEING AWESOME"];
var cars=["TESLAS","MUSTANGE","GTR"];
var arrays=[hobbies,cars,["PIZZA","ICECREAM","RAMEN"]];
for(let y in arrays){
	for(let x in arrays[y]){
		console.log(arrays[y][x])
	}
}
function ranNum(start,end){
	return Math.trunc(Math.random()*(end-start)+start)
}
function isPrime(number){
	for(let x=2;x++<number;){
		if(number%x==0)return false;
	}
	return true;
}
var ranNums=[];
for(let ctr=0;ctr++<15;){
	ranNums.push(ranNum(1,100));
}
var unsortedArray=[];
for(let ctr=0;ctr++<25; ){
	unsortedArray.push(ranNum(5,45));
}
console.log(unsortedArray);
var sortedArray=[];
for(let x in unsortedArray){
	if(unsortedArray[x]%5==0||unsortedArray[x]%3==0) continue;
	let test=unsortedArray[x].toString();
	sortedArray.push(test.substr(test.length-1,1)==1?0:unsortedArray[x])
}
console.log(sortedArray)
var words=["PIZZA","FRIES","SODA","CHEESE","TOMATO"];
var numbers=[];
var final=[]
for(let ctr=0;ctr<5;ctr++) numbers.push(ranNum(1,5));
for(let ctr=0;ctr<words.length;ctr++)final.push(words[ctr]+"-"+numbers[ctr]);
console.log(final)
alphabet=[];
for(let ctr=0;ctr<26;ctr++)alphabet.push(String.fromCharCode(ctr+97));
function randomLetter(){
	return alphabet[ranNum(0,26)]
}
words=[]
for(let ctr=0;ctr<5;ctr++){
	words.push(("").concat(randomLetter(),
		randomLetter(),
		randomLetter(),
		randomLetter(),
		randomLetter()));
}
console.log(words)