let bikes=["duke","mt15","fz","ktm","shine"];
//.pop()
let a=bikes.pop();//remove last value "shine"
console.log(a);

console.log(bikes); //return that value "shine"

//.push()
let b=bikes.push("bmw"); //add new value at last of array "bmw"
console.log(b);

console.log(bikes); //return bikes length "5"

//.shift()
let c=bikes.shift();  //remove first value of array
console.log(c);

console.log(bikes); //return that value "duke"

//.unshift()
let d=bikes.unshift("hero","ct100"); // add new value to start of the array
console.log(d);

console.log(bikes); //return bikes length "6"

//.slice()
let e=bikes.slice(2);// 
console.log(e); //  return selected value in the array to new array

console.log(bikes);// old array values not changed 

let f=bikes.slice(2,4);
console.log(f);

console.log(bikes);

//.splice
let g=bikes.splice(0,2,"pulzer","ktm");
console.log(g); //removed values in the array

console.log(bikes); //return the total length of the array add new values

//.indexOf
let h=bikes.indexOf("ktm");
console.log(h); // return the value position

console.log(bikes); //old array not changed

//.lastIndexOf
let i=bikes.lastIndexOf("ktm");
console.log(i);// return the value position

console.log(bikes);//old array not changed


// pop method

let animals1=["monkey","kingkong","lion","elepant","tiger"];

let spl=animals1.pop();

//return that value
console.log(spl);

//map method

let numbers=[1,2,3,4,5,6];
function myFun(num){
    return num*2;
}
let multi=numbers.map(myFun)

// return total array 
console.log(multi);

//shift method

let filter=animals1.shift();

//return that value
console.log(filter);

//sort method

let order=(animals1.sort()).reverse();

//return total array 
console.log(order);

//filter method

let ages=[22,17,19,33,25,13,110];

let odr=ages.sort();
console.log(odr);

function chechAdult(age){
    return age > 18;
}
//return filter numbers
let adults=ages.filter(chechAdult);

console.log(adults);


//10/10/2022

//unshift method

ages.unshift(21,11);

//add values at starting position and return array
console.log(ages);

//slice method

let removeAge=ages.slice(1,4);

//return selected values from the array
console.log(removeAge);

//forEach method

let evenNum=[2,4,6,8];

firstFun = (item,index) =>{
    let multipleOf = index + ";" + item*2;
    console.log(multipleOf);
}

evenNum.forEach(firstFun);

//every method
secFun = (age) =>{
    return age > 10;
}

let check=evenNum.every(secFun);
//return boolean
console.log(check);

//find method

findOut = (spl) =>{
    return 6 < spl;
}

let splNum=evenNum.find(findOut);

//return the first passed value for the condition
console.log(splNum);



var inpnum=123;
var add=0;
while(0<inpnum){

	let rem=inpnum%10;
	add=rem+(add*10);
	inpnum=Math.floor(inpnum/10);

}
console.log(add);

while(0<add){
	let rem2=add%10;
	if(rem2==0){
		console.log("zero");
	}
	else if(rem2==1){
		console.log("one");
	}
	else if(rem2==2){
		console.log("two");
	}
	else if(rem2==3){
		console.log("three");
	}
	else if(rem2==4){
		console.log("four");
	}
	else if(rem2==5){
		console.log("five");
	}
	else if(rem2==6){
		console.log("six");
	}
	else if(rem2==7){
		console.log("seven");
	}
	else if(rem2==8){
		console.log("eight");
	}
	else{
		console.log("nine");
	}
	add=Math.floor(add/10);
}
//concat method

let games=["cricket","carrom","football","chess"];
let newGames=["handball","kabadi"];
let indianGame=["hockey"];

//concatenates one or more array return array 
let allGames=indianGame.concat(newGames,games);

console.log(allGames);

//fill method

let oneGame=games.fill("cricket");

//fill one value in hole array index position
console.log(oneGame);

//reduce method

let sum=[100,40,20];

function  sumFun(total,values) {
	return total - values;
}

//return single value the function accumulated result
let result=sum.reduce(sumFun);
	
console.log(result);

//join method

let gamesList=newGames.join("&");

console.log(gamesList);

//reverse method

let names=["mani","sakthi","arun","bala","thangaraj","karthik","jegan","naveen","jayaprakash"];
let namesOrder=names.sort();

//return alphabets in reverse order
console.log(namesOrder.reverse());