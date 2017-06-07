var age=34;
if(age>=65){
	console.log("Congrats you can retire");
} else if(age>=21){
	console.log("You can now drink");
} else if(age>=18){
	console.log("You can vote now");
} else if(age>=16){
	console.log("You can go get your driver's license");
} else {
	console.log("You were born!!!!");
}

var wins=0;
var loses=0;
if(wins>loses){
	console.log("Are you guys actually trying now?")
}else if(wins===loses){
	if(wins==0){
		console.log("Ready to lose for the first time this year?")
	}else{
		console.log("We shall win!!")
	}
}else{
	console.log("The sun was in our eyes.")
}

for(var i=1;i<=100;i++){
	let s="";
	if(i%3==0){
		s+="Fizz";
	}
	if(i%5==0){
		s+="Buzz";
	}
	console.log(s===""?i:s);
}