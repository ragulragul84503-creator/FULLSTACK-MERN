// var a = 10; //reinitialize & redeclare
// let b = 20; //reinitialize
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num = 10;
// var str = "ragul";
// var undefine;
// var Null = null;
// var boolean = true;

// console.log( typeof num);
// console.log( typeof str);
// console.log( typeof undefine);
// console.log( typeof Null);
// console.log( typeof boolean);

// var bigInt = 123n;
// var symbol = Symbol('li');

// console.log( typeof bigInt);
// console.log(typeof symbol);

// var arr = [10, 20, 30, 40,]
// console.log(typeof arr, arr);

// var obj = {
//     name: "ragul",
//     dept: ["ct"]
// };
// console.log(typeof obj, obj);

//arthimatic operater(+,-,%,*,/)

// var a = 10;
// var b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b)
// console.log(a % b);
// console.log(a / b);

// //logical operater(&&,||,!)

// var a = true;
// var b = false;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);
// console.log("relational operater(<,>,<=,>=,==,!=,===,!==");

// a = 10;
// b = 20;

// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a<b);
// console.log(a!=b);
// console.log(b==a);
// console.log(b>a);

// a = 2;

//  console.log(a**a);

// //assingment operter(=,==,-=,%=,*=,**=);
//  a = 10;
//  b = 20;

//  a = a+b;//30
//  a += b;
// console.log(a);
// a -= b;
// console.log(a);



// //unary operation(++,--)
// a = 10;
// console.log(a++)
// console.log(a--)
// console.log(--a)
// console.log(++a)


 //if conditional statement
// var a= 10;
// var b= 20;
// if (true){
//     console.log(`${a} + ${b} = ${a+b}`)
// }



// var a = 10;
// let b = 20;
// const c = 20;
// if(true){
//     console.log(a);
//     let b = 30;
//     const c = 30;
//     console.log(b);
//     console.log(c);
// }
// console.log(a)
// // console.log(b)
// // console.log(c)



// //if else
//     var a = 10;
// if(a%2===0){
//     console.log(`${a}is even`)
// }
// else{
//     console.log(`${a}is odd`)
// }



// //else if
// var mark = 30
// if(mark>= 100){
//     console.log("o grade")
// }
// else if(mark>= 90){
//     console.log("a grade")
// }
// else if(mark>= 60){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }


// //ternary operater
//  var a = 10
//  var result = a%2===0 ? "even" : "odd";
// //  console.log(result)



//  var mark = 30;
// var result = mark>= 90 ?"o grade": mark>= 70? "a grade" : mark>= 30? "pass": "fail"
// console.log(result)



// var day = 2;
// switch(day){
//     case 1:
//     {
//         console.log("sunday");
//         break;
//     }
//     case 2:
//      {
//         console.log("monday")
//         break;

//      }
// case 3:
//     {
//         console.log("tuesday")
//         break;
//     }



// default :
//     {
//         console.log("invalid input")
//         break;
//     }
// }



// //loop statement
//  for(var i = 1; i<= 10; i++){
// console.log(i);
// //  }

// var val = 10246
// var count = 0;
// while( val > 0){
//     count++
//      val = Math.floor(val/10);

// }



// console.log(count);

// // do...while
// do{
//     console.log("*")
// }while(false);



// // //countinues
// //  for (let i=1;i<=10;i++)
// //  {
// //     if(i%2===0){

    
// //         continue;
// //  }
// // //  console.log(i)
// // }



// //arrow function



// var demo =()=>{
//     console.log(10 + 20);
// }
// demo();

// arrow function
// var demo =( a = 5, b = 6)=>{
//     console.log(10 + 20);
// }


//  demo(10,20);
//  demo();
//  demo(10);


// //spread  operater
// var arr = [10,20,30]
// var arr2 = [...arr,40 ,50]
// console.log(arr2)

//destructure operation array
// var[m1,m2,m3,m4,m5] = [90,99,78,79,87]
// console.log(m1,m2,m3,m4,m5)


//destructuring operter object
// var{mobile, name,dept} = {
//     mobile:1234567890,
//     name:"asdhjk",
//     dept:"ct"
// }
// console.log(mobile, name,dept)


// for in& for of

// var arr = [10,20,30,40]
// for(let index in arr){
//     console.log(index)
// }
// for(let value of arr){
//     console.log(value)
// }

// // object
// var obj = {
//     name:"rex",
//     dept:"ct",
//     mobile:1234567890
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

//array of map
// var arr = [1,2,3,4,5]

// var result = arr.map((val)=>(val*2))
// console.log(result)
// console.log(arr)

// var arr = [1,2,3,4,5]

// //filter
// var even = arr.filter((val)=>val%2===0)
//  console.log(even)

// //  reduce
//  var sum = arr.reduce((add,val)=>(add + val),0)
//  console.log(sum)

var userName = {
                  name:"rex"
}
var user = {
                ...name,
                password:1234567890
}
    console.log(user);