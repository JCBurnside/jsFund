function concat(arg0,arg1){
	console.log(arg0+arg1);
}
function bills(...args){
	var sum=0;
	for(i in args){
		sum+=args[i];
	}
	console.log("Your total is $%d",sum);
}
function soda(price,count){
	var x=price*count;
	console.log("%d Cokes will at %d will cost you %d",count,price,x+.7*x)
}
concat("this is"," two strings");
bills(11.30,300.2,551.02);
soda(.99,100)

function calc(num1,act,num2){
	if(typeof(num1)!=="number"||typeof(num2)!=="number"){
		console.log(typeof(num1)," ",typeof(num2))
		throw 'Argument Error';
	}
	switch(act){
		case '*':
			return num1*num2;
		case '+':
			return num1+num2;
		case '-':
			return num1-num2;
		case '/':
			return num1/num2;
		case 'mod':
		case '%':
			return num1%num2;
		case '**':
			return Math.pow(num1,num2);
		default:
			throw "Argument Error";
	}
}
try{
	console.log(calc(1000,"**",200));
}catch(e){
	console.log(e);
}