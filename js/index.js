console.log('aditya');
//alert("hello I'm aditya");

//this is use as commenting the line//


//*****************variable*******************/

var b ='adi';
console.log(b);

var number='45';
console.log(number);

//***********************variable end******************************/




///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
                //***We can easily take the html code and then change it with js jusy by using  */

                        //document.getElementById('hello').innerHTML = 'aditya';
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 



 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
                       //we can store data from user to a place by using (prompt) code .....//

                               //prompt("What is your age");
                            //var age=prompt("What is your age");
                    //document.getElementById('hello').innerHTML = age;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //****************************************************Numbers in js*****************************/

    var num1=22;//integer
    var num2=5.7;//float

//And we can also perform many action with numbers in our js like addition and substraction
//console.log(5*10);
//console.log(50/10);

var num3=33;
//num3=num3+2;


//Increment num by 1
//num3++;

//Decrement num by 1
//num3--;
//console.log(num3);

//We can also multiply ,divide and find reminder by %
//console.log(num1%2);

//Increment and Decrement by any number
//console.log(num3+=10);


/* FUNCTIONS START
1. CREATE A FUNCTION
2. CALL A FUNCTION 
*/

function   fun() {                                //generation of function
    alert("You are a good boy")
}

// fun();              //calling of a function



//////////////////////////////////////example////////////////////////////////////////////////////////
/*Create a function that will take your name and 
return with saying  hello followed by your name
example: if name = aditya
        return: hello aditya
*/
function greeting() {
    name = prompt("What is your name: ?");
    result = 'Hello'+' '+name;      //this is known as string concatination
    console.log(result);
}

//greeting();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//function for addition of two number
function addNumbers(x,y){
    result = x+y;
    console.log(result)
}

//addNumbers(5,5);

//take two number and add them together by making function

function sum(){
    alert("Here you can add two number");

    var  x=prompt('Enter the first  number:');
    var  y=prompt('Enter the second number:');

    result = x+y;

    console.log(result);
}
//sum();

//greeting function

function hello(yourName){
    var username='Hello'+' '+yourName;
    //console.log(username);
    alert(username);
}

//var name=prompt("what is your name ? ")

//hello(name);


//***********************************************FUNCTIONS END**********************************************/




//*************************************************WHILE LOOP**********************************************/

/*var num = 0;

while(num<100){
    num=+1;
    console.log(num);
}*/


//*************************************************WHILE LOOP**********************************************/


//*************************************************FOR LOOP**********************************************/


/*for(let num1=0 ; num1<=100 ; num1++){
    alert(num1);
}*/


//*************************************************FOR LOOP**********************************************/


//************************************************DATA TYPES***********************************************/

let yourAge = 18;                                       //number
let yourName = 'adi'                                    //string
let name = {first:'aditya' ,last:'mishra'}              //object
let truth = false                                       //boolean
let groceries = ['apple','banana','orange']             //array
let random;                                             //undefined
let nothing = null                                      //value null


//String in javascript (comman method)


let fruit ='banana,orange,apple,blackbarry';
let moreFruit = 'banana\napple';                        //new line by '\n'

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));                           // split by character
console.log(fruit.split(','));                          // split by comma



//ARRAY IN JAVASCRIPT

let fruits = ['banana','apple','orange','pineapple'];
fruits = new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);                                  // access value from index 2nd

fruits[0]='pear';
console.log(fruits);


for (let i=0; i<=fruits.length; i++){
    console.log(fruits[i]);
}

//array (comman method)

console.log('to string',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);                       //remove last item
console.log(fruits.push('nem fruit'),fruits);           //appends
console.log(fruits[4]);
console.log(fruits[3]);
fruits[4]='blackbarry';                                 //same as push
fruits[fruits.length]='blackbarry';                     //same as push
console.log(fruits);
fruits.shift();                                         //remove first element from array
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);



let vegetable = ['tomato','potato','chili'];
let allGroceries = fruits.concat(vegetable);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());




let someNumber = [1,2,225,6,9,7,458,2,2,7,6,335];
console.log(someNumber.sort());
console.log(someNumber.sort(function(a,b){return a-b}));    //sorted in accending order 
console.log(someNumber.sort(function(a,b){return b-a}));    //sorted in desending order





let emptyArray = new Array();
for (let num=0 ; num<10 ;num++){
    emptyArray.push(num);
}
//console.log(emptyArray);

//objects in javascript
//dictionaries in python

let student ={
    first:'aditya',
    last:'mishra',
    age:25,
    height:177, 
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
}

//console.log(student.first);
//console.log(student.last);
student.first='vikash';                                        //change the value
//console.log(student.first);
student.age++;
//console.log(student.age);
console.log(student.studentInfo());


//*************************************************DATA TYPES***********************************************/

//conditional ,control flow(if ,else statement)
// 18-35 is my client
// && AND
// || OR

//var age = prompt('What is you age ?');
/*if( (age>=18) && (age<=35) ){
    status = 'You are my client';
    console.log(status);
}
else{
    status = 'You are not my client';
    console.log(status);
}*/


// switch statement
// difference between weekday and weekend
// day 0--> Sunday --> weekend
// day 1--> Monday --> weekday
// day 2--> Tuesday --> weekend
// day 3--> Wednesday --> weekday
// day 4--> Thursday --> weekend
// day 5--> Friday --> weekday
// day 6--> Saturday --> weekend

switch(6){
    case 0:
        text ='weekend';
        break;
    case 1:
        text ='weekday';
        break;
    case 6:
        text ='weekend';
        break;
    default:
        text = 'weekday';        

}


console.log(text);








