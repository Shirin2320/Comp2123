// Variable substitutions (using Back quote)
let fN = "John";
let lN = "smith";
let fullName = `Welcome ${fN}, ${lN}!`;
console.log(fullName);

// //// ---- 
let price = 10;
let Tax = 0.25;
let total = ` Total: ${(price* (1 + Tax)).toFixed(2)}`; //toFixed for decimal part
console.log(total);

/// /// ---------------

const arr = [10, 20, 30];
for (let v of arr) {console.log(v)};

// ///// -----------
function myFun(){console.log("Hello");}
myFun();

function myFun2(a) {return a+2;}
var v=myFun2(3);
console.log(v);


////- -------- assign function to variable
var hello =function() {console.log("1: Hello World!");}
hello();

hello = function() {return "2: Hello World!";}
console.log(hello());

/// ----- we cant use arrow functio non-return function
////// because the value of variable will be undefind
var hello = () => {console.log("temp: Hello world!");}
hello();


hello = () => {return " 3: Hello World!";}
console.log(hello());

// // /// arrow fun with return value: there is no needs return statment 
hello = () => "4: Hello World!";
console.log(hello());

//// with parameter
hello= (val) => "Hello " + val;
console.log(hello("Ali"));

////  parathesis could also be removed when there is only one parameter .
hello= val => "Hello " + val;
console.log(hello("Shirin"));

/// tow function
function add (a, b) {return + b ;}
console.log("Using arrow function: "+ add(2, 3)); // output: 5

const addArrow = (a, b) => a +b;
console.log("using arrow function: " + addArrow(2, 3)); //output : 5

 /// /// use substition with arror function
 let currency = n => `$${n}`
 console.log(currency(80)) // $80

/// /////// -----------------------------------
// spread Opertor
/// The JavaSript spread operator (...) allows us to quickly
/// copy all or part of an existing array r object into another array or object. 

const arrOne = [1, 2, 3];
const arrTwo = [4, 5,6];
const arrComb = [...arrOne, ...arrTwo]
console.log(arrComb) //// [1,2,3,4,5,6]

////The spread operator is often used in combination with detructing
const Num = [1, 2, 3, 4, 5, 6];
const [v1, v2, ...remain] = Num;
console.log(v1,v2," - ",remain);


//// split string
var s ="hello";
var arrS = s.split("");
console.log(arrS);

///join Array
var s2=arrS.join(",");
console.log(s2);

///spread operator with functions
var myArr=[1,8,5,7];
const addTwoFirstItem=([v1,...rem])=>v1+2;
console.log(" adding to myArr : " +addTwoFirstItem(myArr));

function capFC1(s) { return s[0].toUpperCase() + s.slice(1);}
console.log(capFC1("helo"));

const capFC2 = ([f1, ...rw]) => f1.toUpperCase() + rw.join("");
console.log(capFC2("Hello"));

////// //// -----------------------------------------------------

//Array.prototype.map
var num = [1, 4, 9, 4, 16]; 

var newNum1 = num.map((n) => Math.sqrt(n));
console.log(newNum1);

const add3=v=>v+3;
var newNum2 = num.map(add3);
console.log(newNum2);


//// Array.protoype.filter

var num2= [12, 5, 8, 130, 44];
var f1 = num2.filter((va1)=>va1>=10); 
var f2 = [12, 5, , 8, 130, 44].filter((va1)=>va1>10);
console.log(f1);
console.log(f2);

//Filler with function

function isBig(v) {return v >= 10;}
var f3 = [12, 5, 8, 130, 44].filter(isBig);
console.log(f3);

var words=['spray', 'eliter', 'exuberant', 'destruction', 'present'];
var r = words.filter((w) => w.length > 6);
console.log(r);


///The array .protoype.reduce()

const arrRed = [10, 8, 30, 41, 60];
const myReducer = (t,e)=>t+e;

console.log(arrRed.reduce(myReducer));
console.log(arrRed.reduce(myReducer, 20));


//  // ------------------------------------- 
class person {
    constructor(name, age){
        this.name= name;
        this.age= age;

    }
    setName(n){this.name=n;}
    getName() {return this.name;}

    setAge(a) {this.age=a;}
    getAge() {return this.age;}

    details(){
        var det= this.name+" , "+this;
        return det;

    }
}

const person1 = new person("Sara", 30);;
person1.setName("Jordan");
console.log(person1.name);
console.log(person1.age);

console.log("Details : "+person1.details());

//super and subclass

class Car {
    constructor(brand) {this.brand = brand;}
    getCarName() {return 'I Have a ' + this.brand;}

}
 class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;

    }
    show() {return this.getCarName() + ', it is a ' + this.model;}


 }

 let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());










