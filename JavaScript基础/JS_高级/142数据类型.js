// undefined 与null 的区别 
//undefined 是定义未赋值
//null  是定义而且赋值  赋值为 null
//  var a   
//  console.log(a)
//  a=null
//  console.log(a)

// var b =null
// b = [1,1,2,2,2]
// console.log(b)
// b = null

// console.log(b)

// var obj = {name:'zl'} // 这里的obj是在栈内存中有一块存储了 后面对象的地址值


// var b = a 
// b.name = "jake"
// console.log(b.name,b.age,a.name)  //jake 11 jake

// var a = {name:"tom",age:11}
// function fun(obj){
// obj ={name:'jake'}
// }
// fun(a)
// console.log(a.name) //tom

// function showinfo(age){
// if(age<18){
// console.log("未成年")
// }else if (age>60){
//     console.log("过60了")
// }else{
//     console.log("刚刚好")
// }
// }

// showinfo(45)
// showinfo(16)
// showinfo(77)

// var obj ={}
// function test (){

//     this.name = 'zzll'
// }
// //obj.test()  //obj.test is not a function
// test.call(obj)

// console.log(obj.name) //zzll

// (function () {
//     var a=1
//     function test(){
//         console.log(++a)
//     }
//     window.$ = function(){
//         return{
//             test:test
//         }
//     }
// })()

// $().test()、

// function Person(color){
//     console.log(this)
//     this.color = color;
//     this.getColor = function (){
//         console.log(this)
//         return this.color
//     } 
//     this.setColor = function (color) {
//         console.log(this)
//         this.color = color
//     }
// }

// Person("red") // this是谁  window
// var p = new Person("yellow")  //this是谁  p
// p.getColor();   //p
// var obj = {}
// p.setColor.call(obj,"black")  //  this是谁  obj
// var test = p.setColor
// test() //  this是谁  window

// function fun1(){
//     function fun2(){
//         console.log(this)
//     }
//     fun2()
// }
// fun1() //  this是谁  window


console.log(Date.prototype) 
function fun() {
    
}
console.log(fun.prototype)//默认空对象