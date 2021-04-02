// let,const
// const age;
// age=31;
// console.log(age);//error

//datatype
//String,Numbers,Boolean,null,undefined
// const name='Jhon';
// const age=30;
// const rating=4.5;
// const isCool=true;
// const x=null;
// const y=undefined;
// let z;

//string
// const name='Jhon';
// const age=30;

// //concatenation
// console.log("My name is"+ name +"and I am "+ age);
// //Template String ` `
// console.log(`My name is ${name} and age ${age}` );

//length,toUpperCase(),toLowerCase()
// const s="Crown Stack"
// // console.log(s.length);//11
// //substring(start index,end index)
// //console.log(s.substring(0,5).toUpperCase());//CROWN

// //split()
// console.log(s.split(""));//each charecter return with double quotation.


//**Array:-variables that hold multiple values*********/
// const fruits=['apples','oranges','pears']
// //fruits=[]//reassign
// fruits[3]='grapes';
// fruits.push('mango')//add item in end
// fruits.unshift('Kiwi')//add item in first
// fruits.pop();//delete item from end
// fruits.shift();//delete item from start
// console.log(Array.isArray('hello'));//false ..if we pass fruits then true//is get in true/false value
// console.log(fruits.indexOf('oranges'));//2
// console.log(fruits[1]);

//3.Object Literals:-basic key & value pairs

/*const person={
    fName:'Jhon',
    lName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}
// console.log(person.fName,person.hobbies[1],person.address.city);//John,movies,Boston

//destructuring
// const {fName,lName,address:{city}}=person;
// console.log(fName,city);//John Boston

//if u want add email  in ur Object
person.email='john@gmail.com';
console.log(person);
*/

//**Array of objects:- */

// const todos=[
//     {id:1,
//     text:'Take out trash',
//     isCompleted:true
//     },
//      {id:2,
//     text:'Meeting with boss',
//     isCompleted:true
//     },
//      {id:3,
//     text:'Dentist appt',
//     isCompleted:true
//     }
// ]
// console.log(todos[1].text);

//json formate
// const todoJSON=JSON.stringify(todos);
// console.log(todo);//result formate json string

// //For loop-->simple for loop
// for(let i=0;i<=10;i++){
//     console.log(`For loop Number:${i}`)
    
// }

// //While
// let i=0;
// while (i<10) {
//     console.log(`While loop No.:${i}`);
//     i++;
    
// }

//for loop for array of objects
// for(let i=0;i<todos.length;i++){
    // console.log(`For loop No:${i}`);
// }

// for(let i=0;i<todos.length;i++){
//     console.log(todos[i].text);//Take out trash
        //Meeting with boss
        //Dentist app
// }
// OR
//best
// for(let todo of todos){
//     console.log(todo.text);//(todo.id);
// }

//forEach,map,filter
// todos.forEach(function (todo) {
//     console.log(todo.text);
//     // Take out trash
//     // Meeting with boss
//    // Dentist appt
// })

//map
// const todoText=todos.map(function(todo){
//     return todo.text;
// })
// console.log(todoText);

//fiter
// const todoCompleted=todos.filter(function(todo){
//     return todo.isCompleted===true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);//2value printed

//6. Condition
// const x=10;

// if(x==10){//== value equal match, no need this not match data type
//     console.log('x is 10');//true
// }

//const x='10';10
//if(x===10){//=== also dont match datatype string===number
 //   console.log('x is 10');//false,if x=10 put than true because both datatype same number
//}


//ternary operator
// const x=10;
// const color=x>10?'red':'blue'
// switch (color) {
//     case 'red':
//         console.log("color is red");
//         break;
//             case 'blue':
//         console.log("color is blue");
//         break;

//     default:
//     console.log("color is NOT red or blue");
//         break;
// }
// console.log(color);

//**7.Function:normal and arrow fn
// function addNums(num1,num2){
//     console.log(num1+num2);
// }
// // addNums();//call fn NaN printed
// addNums(5,4);//9

//arrow fn
// const addNums=(nums ,num2)=>{
//     return num1+num2;
// }
// console.log(addNums(5,4));//9

//**Oops concept:-prototypes &class */
//constructor function
/* function Person(fName,lName,dob){
    this.fName=fName;
    this.lName=lName;
    this.dob=new Date(dob);
    //1st.extra point to add this. this.
    // this.getBirthYear=function(){
        // return this.dob.getFullYear();
    // }
    //this.getFullName=function(){
       // return `${this.fName} ${this.lName}`
    //}
}

//**1st prototype topics */
//2nd add extra point prototype
/* Person.prototype.getBirthYear=function(){
     return this.dob.getFullYear();
 }
 Person.prototype.getFullName=function(){
return `${this.fName} ${this.lName}`;
 }
 //Instantiate object
const person1=new Person("Rahul","Verma","4-3-1995")
const person2=new Person("Sumit","Chauhan","6-2-1997")

// console.log(person1.fName,person2.fName,person2.dob.getFullYear());

//1st extra point
//console.log(person1.getBirthYear(),person1.getFullName());

//2nd extra point
console.log(person2.getFullName());
//talk about prototype
console.log(person1)//show prototype which one constructor or object in console
*/
//**2nd topics Class
/*class Person{
    constructor(fName,lName,dob){
        this.fName=fName;
        this.lName=lName;
        this.dob=new Date(dob)
    }
    //any method add
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.fName} ${this.lName}`;
    }
}


//Instantiate object
const person1=new Person("Rahul","Verma","4-3-1995")
const person2=new Person("Sumit","Chauhan","6-2-1997")

console.log(person2.getFullName());
console.log(person1);

//above doing same thing class..means prototype--do samething-->through Class */


//*****9.DOM Selection******* */
//in browser window object
// console.log(window);
// alert(1);

//Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
//querySelector just likie it jquery selector//for a long time people use jquery

//Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementByClassName("item"));
// console.log(document.getElementByClassName("li"));

// const items=document.querySelectorAll('.item');
// items.forEach((item)=>console.log(item));

//***9&10.DOM manipulation &Selection */
// single element
// const ul=document.querySelector('.items');
// //ul.remove();
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent='Hello';
// ul.children[1].innerHTML='<h1>Hello</h1>'

// const btn=document.querySelector('.btn')
// btn.style.background='red';
 
 //***11. Events */
//  const btn=document.querySelector('.btn')
// //  btn.addEventListener('click',(e)=>{//e->event
//       btn.addEventListener('mouseout',(e)=>{//mouseover,mouseout-->hover event
//      e.prventDefault();
//      document.querySelector("#my-form").style.background='#ccc';
//      document.querySelector('body').classList.add('bg-dark');//1st change body background color and 2nd form background color change
// document.querySelector('.items')
// .lastElementChild.innerHTML='<h1>Hello</h1>';
//     //  console.log(e.target.id);
  //  //  console.log('click')
//  });

//im comment out index.html me ul tag

//**12.Basics FormValidation */
const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.prventDefault();
    if(nameInput.value===''||emailInput.value===''){
msg.classList.add('error');
msg.innerHTML='Please enter all fields';
    }
    setTimeout(() => msg.remove(), 3000);
    else {
                // console.log('success');
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
    userList.appendChild(li);

    //Clear fields
    nameInput.value='';
    emailInput.value='';
 
    }
}