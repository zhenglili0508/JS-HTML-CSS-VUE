// var a = 123

// var result = typeof a;

// console.log(result)

// Number();
// console.log( a);
// console.log(typeof b);
 
// var str="锄禾日当午，"+
//         "汗滴禾下土，"+
//         "谁知盘中餐，"+
//          "粒粒皆辛苦."
// console.log(str)
// console.log("shfjks"+str)


// {
//     alert("zl")
// console.log("zl") 
// document.write("zl")
// var c=111
// }
//  console.log(c)

// var num=3;

// switch(num){
//     case 1:console.log("一");break;
//     case 2:console.log("二");break;
//     case 3:console.log("三");break;
//     case 4:console.log("四");break;
//     case 5:console.log("五");break;
//     default: console.log("不是1到5内的数字");
// }

// outer:
// for(var i=0;i<5;i++){
//     console.log("@外层循环"+i);
//     for(var j=0;j<5;j++){
//     break outer;
//     // break;
//     }
// }

//  对象的相关内容     
// var obj = new Object();

// obj.name = "sunwuk";

// var obj2 =obj;
// //修改obj的name属性

// // obj.name ="猪八戒";
// obj2 = null;
// console.log(obj);

// console. log(obj2);
// var obj3 =new Object();
// var obj4 =new Object();
// obj3.name ="沙和尚"
// obj4.name ="沙和尚"
// /*console.log(obj3);console.log(obj4);*/
// console. log(obj3 ==obj4);


// function isOu(num) {
//     return num%2==0;
// }
// var result  = isOu(14);
// console.log(result)
// funAdd=function (o) {
//     console.log(o.a+o.b+o.c+o.d+o.e);
// };

// var o ={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5
// }

// function fun(a) {
//     console.log("a="+a)
//     // a(o);
// }
// fun(funAdd)

// function fun2() {
//  var  obj={name:"沙和尚"}   
//  return obj;
// }
// var a = fun2();
// console.log("a="+a.name)
// function fun3() {
//  function fun4(){
//      console.log("我是fun4"); 
//  }    
// return fun4;
// }
// a= fun3()();
// console.log("a="+a)
// (function(){
//     console.log("我是一个匿名函数")
// })();
// var obj = new Object();
// obj.name = "sunweukong"
// obj.age = 18

// obj.sayname=function(){
// console.log(obj.name);
// };
// console.log(obj.sayname);
// obj.sayname();

// var obj2 = {
//     name:"猪八戒",age : 18,
//     sayName :function(){console. log(obj2.name)}
//      };
// obj2.sayName();
// var obj = {
//     name:"孙悟空",
//     age :16,
//     gender:"男",
//     address:"花果山",
// };
// // 枚举  for in 
// // 语法  for （var 变量 in 对象）｛｝
// for(var n in obj){
// console.log(obj[n]);
// }
// var a;
// console.log("a="+a);
// a=10;

// fun()
// fun1()
// function fun(){ 
//     console.log("我是 没有 var定义的fun")
// }
// var fun1= function (){
//     console.log("我是var定义的fun")
// }

// function fun3(){
//     fun4();
//     function fun4(){
//     console.log("函数内的a")
//     }
// }
// fun3()
// var a =10 
// function fun3(){
//   console.log("a="+a)
//   a ="函数内的a"
// }
// fun3()
// // 在全局输出 a的值 
// console.log("全局中输出a=  "+ a);
// e = 10;
// function fun3(e){
//     console.log("E=  " + e);
// }
// fun3(5)
// console.log(e)

// function fun(){
//     console.log(this.name)
//     }
//      var obj={
//         name : "孙悟空",
//         sayname: fun,
//     }
//     var obj1={
//         name : "猪八戒",
//         sayname: fun,
//     }

//     obj.sayname();
//     obj1.sayname();
//  var obj = {
//         name:"孙悟空",
//         age :16,
//         gender:"男",
//         address:"花果山",
//         sayname:function(){
//             console.log(this.name);
//         }
//     };

// function createperson(name,age,gender){
//         var obj = new Object();
//         obj.name=name,
//         obj.age= age,
//         obj.gender=gender,
//         obj.address="花果山",
//         sayname=function(){
//                  console.log(this.name);
//                  }
//         return obj;
//     }
// var obj2 = createperson("孙悟空","20","男");
// var obj3 = createperson("白骨精","99","女");
// console.log(obj2);
// console.log(obj3);


// function createDog(name,age){
//     var obj = new Object();
//     obj.name=name,
//     obj.age= age,
//     sayname=function(){
//              console.log(this.name);
//              }
//     return obj;
// }
// var obj4 = createDog("旺财","2");
// console.log(obj4);

// function Person(name,age,gender){
//     this.name=name,
//     this.age= age,
//     this.gender=gender,
//     sayname=function(){
//              console.log(this.name);
//              }
// }
// var per1 = new Person('孙悟空','19','男')
// var per2 = new Person('白骨精','99','女')
// var per3 = new Person('猪八戒','19','男')
// console.log(per1)
// console.log(per2)
// console.log(per3)

// console.log(per1 instanceof Person)

// function Dog(name,age){
//     this.name=name,
//     this.age=age,
//     sayname=function(){
//              console.log(this.name);
//              }
// }
// var dog1 = new Dog('旺财','1')
// console.log(dog1)

// console.log(per1 instanceof Object)
// console.log(dog1 instanceof Object)
// function Person(name,age,gender){
//     this.name=name,
//     this.age= age,
//     this.gender=gender
// }
// Person.prototype.sayname=function(){
//     console.log("用了prototype的 "+this.name);
//     }

// var per1 = new Person('孙悟空','19','男')
// var per2 = new Person('白骨精','99','女')
// var per3 = new Person('猪八戒','19','男')
// per1.sayname();
// per2.sayname();
// per3.sayname();
// Person.prototype.a = 1223
// per2.a="我是per2的a"
// // console.log(per1.a)
// // console.log(per2.a)
// // console.log(per3.a)
// // console.log("a"in per1)

// console.log(per1._proto_._proto_)

// console.log(per1.hasOwnProperty("a"))
// console.log(per2.hasOwnProperty("a"))

// console.log(per1.hasOwnProperty("hasOwnProperty"))
// console.log(per1._proto_.hasOwnProperty("hasOwnProperty"))


// function Person(name,age,gender){
//     this.name=name,
//     this.age= age,
//     this.gender=gender
// }
// Person.prototype.toString= function(){
//     return "name="+this.name+"age="+this.age+"gender="+this.gender
//     }
// var per1 = new Person('孙悟空','19','男');
// var per2 = new Person('猪八戒','39','男');


// console.log(per1.toString())
// console.log(per2.toString())
// var obj =  new Object();
// obj =  null
// obj.a = 123 
// console.log(obj)
// var arr = new Array();
// console.log(typeof arr )

// arr[0]=10;
// console.log(arr[0])
// arr.length = 10
// console.log (arr)
// arr[arr.length]=70
// console.log (arr)

// var arr = [];

// arr = [1,"hello",true,null,undefined,{name: "孙悟空"},{name:"沙和尚"},function(){console.log("数组内的函数")}];
// console.log( arr)
// arr[arr.length-1]()

// var arr = ["孙悟空","猪八戒","沙和尚"]
// var result = arr.push("蜘蛛精","唐三藏","玉兔精")
// for (var i=0;i<arr.length;i++){
//     console.log( arr[i])
// }
// function Person(name,age){
//     this.name=name,
//     this.age= age
// }
// Person.prototype.toString= function(){
//     return "name="+this.name+"age="+this.age
//     }
// var per1 = new Person('孙悟空','18');
// var per2 = new Person('猪八戒','39');
// var per3 = new Person('沙和尚','36');
// var per4 = new Person('红孩儿','8');
// var per5 = new Person('二郎神','39');

// perArr = [per1,per2,per3,per4,per5]
// function getAdul(arr){
//     var newArr=  [];
//     for (var i=0;i<arr.length ; i++){
//         if (arr[i].age>18){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// var result1 = getAdul(perArr)
// console.log(result1)
// var arr = ["孙悟空","猪八戒","沙和尚"]
// var result = arr.push("蜘蛛精","唐三藏","玉兔精")
// arr.forEach(function fun(value,index,obj){
//     console.log("value="+value)
//     console.log("index="+index)
//     console.log("obj="+obj)
// });
// console.log(arr)

// var arr = ["孙悟空","猪八戒","沙和尚","蜘蛛精","唐三藏","玉兔精"]
// var  result =arr.splice(1,1,"牛魔王","红孩儿")
// console.log(arr)
// console.log(result)
// var arr = [1,2,3,2,1,3,4,2,5];
// for (var i=0;i<arr.length ; i++){
//     for (var j=i+1;j<arr.length ; j++){
//            if (arr[i]==arr[j]){
//             arr.splice(j,1)
//            }
//     }
// }
// console.log(arr)
// var arr = ["孙悟空","猪八戒","沙和尚"]
// var arr2 = ["蜘蛛精","唐三藏","玉兔精"]
// var arr3 = arr.join("-")
// arr.reverse();

// var arr = [1,3,1,4,5,11,45];
// arr.sort(function(a,b){
//    return a-b;
// })
// console.log(arr)

// function A(){}
// function B(a){this.a = a; }
// function C(a){ if (a){ithis.a = a; } }
// // A. prototype.a = 1;
// // B. prototype. a = 1;
// // C. prototype. a = 1;
// console.log(A. prototype.a = 1)
// console.log(B. prototype.a = 1)
// console.log(C. prototype.a = 1)  
// function fun(){
//     console.log("我是fun函数！")
    
// }
// fun.apply();
// fun.call();
// fun();

//创建一个 Date 对象 
// var start =  Date.now();

// var d = new Date();
// console.log(d)
// var d2 = new Date("12/03/2016 11:10:30");
// console.log(d2)


// for (var i =0 ; i<100;i++){
//     console.log(Math.round(Math.random()*10))
// }

// var num = new Number(3);
// console.log(num)
// console.log(typeof num)

//  s= 123
//  s= s.toString();

//  console.log(s);
//  console.log(typeof s);

var str = "hello zl"
var zzz = str.charAt(0)
var zzz1 = str[0]
console.log(zzz)



