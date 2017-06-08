const readline=require('readline');
process.stdin.setRawMode(true);
const rl =readline.createInterface(process.stdin,process.stdout,null);
let proceed=false;
var finish=function(){
	rl.question('Would you like to play again? [y/n]',(ans)=>{
			if(ans==='y')
				proceed=true;
			else
				proceed=false;
		});
}
do{
	let ctr=0;
	let number=Math.trunc(Math.random()*10+1);
	let ans=0
	console.log(number);
	rl.setPrompt('console>');
	rl.question('I am thinking of a number between 1 and 10 (inclusive).', (ans)=>{
		if(isNaN(ans)){
			rl.write("Not a number entered.  assuming 0");
		}
		if(ans==number){
			finish();
		}else{
			do{
				if(ans>number){
					rl.question("Higher!!!!",(ans1)=>{
						ans=ans1
					});
				}else{
					rl.question("Lower!!!!",(ans1)=>{
						ans=ans1
					});
				}
			}while(ans!=number)
			finish();
		}
	})
}while(proceed);
rl.close();