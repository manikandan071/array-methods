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

let ages=[22,17,19,33,25,13];

function chechAdult(age){
    return age > 18;
}
//return filter numbers
let adults=ages.filter(chechAdult);

console.log(adults);

