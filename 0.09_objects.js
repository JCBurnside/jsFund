function ranNum(start,end){
	return Math.round(Math.random()*(end-start)+start)
}
var alphabet=[];
for(let ctr=0;ctr<26;ctr++)alphabet.push(String.fromCharCode(ctr+65));
function randomLetter(){
	return alphabet[ranNum(0,26)]
}
var shows=["FMA","SNL","MLP","SuperMan","Batman","Green Latern","Green Arrow","Spongebob","Spiderman","Deadpool"];
function randomShows(){
	return shows[ranNum(0,shows.length)];
}
function Person(Name,Age,Sex,Shows=["MLP","Attack On Titian","Naruto","FMA","SNL"]){
	if(!Shows instanceof Array||Shows==null||Shows.length<5) throw "Argument Error"
	this.name=Name;
	this.age=Age;
	this.sex=Sex;
	this.favoriteShows=Shows;
	this.getAge=function() {return age};
	this.getName=function(){return name};
	this.getSex=function(){return sex};
	this.birthDay=function(){age++};
	this.compareShows=function(person){
		if(!person.favoriteShows)throw "Argument Error";
		let found=false;
		person.favoriteShows.forEach((show)=>{
			this.favoriteShows.forEach((check)=>{
				if(show.toLowerCase()==check.toLowerCase()) console.log(show);
				found=found||show==check
			});
			
		});
		if(!found) console.log("No shows in common");
	}
	this.sayStuff=function(){
		console.log("Hello, my name is %s and I am %d years old, and one of my favorite shows is %s",this.name,this.age,this.favoriteShows[ranNum(0,this.favoriteShows.length-1)]);
	}
	this.toString=function(){return "Person:"+this.name}
}
Array.prototype.toString=function(){
	var out="["
	this.forEach((element)=>{
		out+=element.toString()+",";
	});
	out=out.substr(0,out.length-1)+"]";
	return out;
}
function Child(Name,Age,Sex,Shows=null,School=null){
	
	if(Shows!=null&&Shows instanceof Array&&Shows.length>=5)Person.call(this,Name,Age,Sex,Shows);
	else Person.call(this,Name,Age,Sex)
	this.school=School;
}
function ranPerson(name=("").concat(randomLetter(),randomLetter(),randomLetter(),randomLetter(),randomLetter()),age=ranNum(1,50),sex="M"){
	return new Person(name,age,sex,[randomShows(),randomShows(),randomShows(),randomShows(),randomShows()]);
}
function addPeople(count=5){
	if(count<=0)throw "Argument Error";
	for(let ctr=0;ctr<count;ctr++)people.push(ranPerson())
}
function sortPeopleByName(peoples){
	if(!peoples instanceof Array)throw "Argument Error"
	peoples.sort((p1,p2)=>{
		return (p1.name.toLowerCase().charCodeAt(0)-p2.name.toLowerCase().charCodeAt(0));
	})
	return peoples;
}
function removeTheVowels(peoples){
	if(!peoples instanceof Array)throw "Argument Error"
	var out=[];
	peoples.forEach((element)=>{
		if(!isVowel(element.name.toLowerCase().charAt(0))) out.push(element);
	})
	return out;
}
function isVowel(char){
	if(!char instanceof String)throw "Argument Error"
	char=char.toLowerCase();
	return char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="y"
}
function oldest(peoples){
	if(!peoples instanceof Array)throw "Argument Error";
	let old=null;
	peoples.forEach((element)=>{
		old=!old||element.age>old.age?element:old;
	})
	return old;
}
function sortByAge(peoples,up=true){
	peoples.sort((p1,p2)=>{
		return (up?p1:p2).age-(up?p2:p1).age
	})
	return peoples
}
try{	
	var Geroge=new Person("Geroge",30,"M");
	var Joe=new Child("Joe",5,"M",["Attack On Titian","Naruto","FMA","Green Latern","SuperMan"]);
}catch(e){
	console.log(e)
}
console.log(Geroge)
console.log(Joe)
Joe.compareShows(Geroge)
Joe.sayStuff()
var Nill=new Person("Jill",25,"F",[randomShows(),randomShows(),randomShows(),randomShows(),randomShows()])
var Fack=new Person("Jack",35,"M",[randomShows(),randomShows(),randomShows(),randomShows(),randomShows()])
var Mess=new Person("Jess",10,"F",[randomShows(),randomShows(),randomShows(),randomShows(),randomShows()])
var people=[Joe,Geroge,Nill,Fack,Mess]
console.log(''+people);
addPeople();
console.log(''+people);
console.log(''+sortPeopleByName(people))
console.log(''+removeTheVowels(people))
console.log(''+oldest(people))
console.log(''+sortByAge(people))