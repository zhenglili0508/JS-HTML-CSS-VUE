原型链的继承

防抖的理解和实现

节流函数的理解和实现



# 原型链的继承

原型链的继承，子类的原型是父类的实例。

```
        Child.prototype = new Parent()
```











## 闭包

```

        function test() {
            return function () {
                console.log("闭包测试")
            }
        }
        var biebao = test()
        console.log(biebao())
```

# 防抖的理解和实现 

非防抖的代码

```
 <input type="text" id="input"></input>
    <script>
        var input = document.getElementById("input")
        function debounce(delay,value){
            setTimeout(() => {
                console.log(value)
            }, delay);
        }
        input.addEventListener('keyup',function(e){
            debounce(1000,e.target.value)
        })
      </script>
```

执行了 定时器后

 思想： 

我们想清除的是setTimeout我们应该存储这个timer的变量timer变量需要一直保存在内存当中
既然你不想打印之前已经输入的结果清除以前触发的定时器我们应该存储这个timer的变量
一直要在内存当中内存的泄露闭包

```
  var input = document.getElementById("input")

        function debounce(delay){
            let timer  //定义变量存储要删除的定时器
            return function (value) {
                clearTimeout(timer) //如果再次进入的时候有定时器  就删除 
                timer = setTimeout(() => {  
                    console.log(value) 
                }, delay);
            }
        }
        
        var debounceFunc = debounce(1000)   //执行后  debounce(1000)return的就是定时器函数 
        input.addEventListener('keyup',function(e){
            debounceFunc(e.target.value)
        })
```



进一步放入封装 防抖函数 

```
 var input = document.getElementById("input")

        function debounce(delay,callback){
            let timer  //定义变量存储要删除的定时器
            return function (value) {
                clearTimeout(timer) //如果再次进入的时候有定时器  就删除 
                timer = setTimeout(() => {  
                    callback(value)
                }, delay);
            }
        }
        
        function fn(value) {
            console.log(value) 
        }

        var debounceFunc = debounce(1000,fn)   //执行后  debounce(1000)return的就是定时器函数 
        input.addEventListener('keyup',function(e){
            debounceFunc(e.target.value)
        })
```



# 节流函数的理解和实现

当持续触发事件的时候保证一段时间内只调用一次事件处理函数一段时间内只做一件事情

```
        function JieLiu(func) {
            let timer
            return function zzzll(){
                console.log("00000")
                if(!timer){
                    console.log("111")
                    timer = setTimeout(() => {
                        func()
                    }, 1000);
                }
            }
        } 

        function func(){
            console.log("节流点击成功")
        }
        document.getElementById('button').onclick = JieLiu(func)
```

闭包将 timer 暴露出来   达到一定时间内只有一次响应

# reduce

```
 var arr = [1,2,3,4]
        var sum = arr.reduce((pre,cur)=>{
            return pre+cur
        }) 
        console.log(sum)
```

# 使用js 编写更好的条件语句

## 1.数组方法   array.includes   

代替更多的或操作  判断操作   

```
 var animals = ["dog",'cat',"hamster"]
 function printAnimals(animal) {
      if(animals.includes(animal)){
           console.log(animal)
         }
    }
  console.log(printAnimals("cat"))
```

## 2.提前退出  提前返回

原始代码  明确需求

```
        function printAnimalDetails(animal) {
            var result = null
            if(animal){
                if(animal.type){
                    if(animal.name){
                        if(animal.gender){
                            result = `${animal.name} is a ${animal.gender} ${animal.type}`
                        }else{
                        result = 'no animal gender'
                        }
                    }else{
                        result = 'no animal name'
                    }
                }else{
                    result = 'no animal type'
                }
            }else{
                result = 'no animal'
            }
            return result
        }

console.log(printAnimalDetails())
        console.log(printAnimalDetails({name:'wangcai',type:"dog"}))
        console.log(printAnimalDetails({name:'wangcai',gender:"female"}))
        console.log(printAnimalDetails({name:'wangcai',gender:"female",type:"dog"})) //wangcai is a female dog
```



对象解构后 

```
 const printAnimalDetails = ({type,name,gender} = {})=>{
            if(!type && !name &&!gender)  return "无动物"
            if(!type) return 'no animal type'
            if(!name) return 'no animal name'
            if(!gender) return 'no animal gender'
            return`${name} is a ${gender} ${type}`
        }

        console.log(printAnimalDetails())
        console.log(printAnimalDetails({name:'wangcai',type:"dog"}))
        console.log(printAnimalDetails({name:'wangcai',gender:"female"}))
        console.log(printAnimalDetails({name:'wangcai',gender:"female",type:"dog"})) //wangcai is a female dog
```

## 3.对象字面量  代替switch 语句

传统的 switch 语句

```
        function printFruits(color) {
            switch(color){
                case 'red': return['apple']
                case 'yellow': return['banana']
                default : return []
            }
        }

        console.log(printFruits('yellow'))
```

对象字面量

```
        var fruitColoe = {
            red:['apple'],
            yellow:['banana']
        }

        function printFruits(color) {
            return fruitColoe[color] || []
        }

        console.log(printFruits("red"))
```

## 4.默认参数结构

 隐式调用 tostring的方法    

```
  var obj1 = {
            name:'xxx'
        }
        var obj2 = {
            name:'yyy'
        }

        var obj3 = {
            [obj1]:'22',
            [obj1]:'11',
        }

        console.log(obj3)  // {[object Object]: "11"}
```

用map的方法 

```
        const fruitsColor = new Map().set('red',['apple']).set('yellow',['banana'])

        function printFruits(color) {
            return fruitsColor.get(color) || []
        }

        console.log(printFruits('red'))
```

构造的数据结构如下 ：   键值对！

```
{"red" => Array(1), "yellow" => Array(1)}

0: {"red" => Array(1)}
1: {"yellow" => Array(1)}
```

## 5.用上 array.some  array.every

```
 // 需求 ： 检测是否所有的水果都是红色 
    const fruits = [
        {name:'apple', color:'red'},
        {name:'banana', color:'yellow'}
    ]
    
    function testeVery() {
        var isAllRed = fruits.every(f => f.color == 'red')
        console.log(isAllRed)  //false
    }

    testeVery()

    // 需求 ： 检测是否有水果颜色是 红色 
    function testSome() {
        var isAllRed = fruits.some(f => f.color == 'red')
        console.log(isAllRed) //ture 
    }
    testSome()
```



# 瀑布流 

定位后确定浏览器显示区域内，一行能放多少列图片盒子。

- 页面的宽度
  ●获取图片盒子的宽度
  ●显示的列数=页面宽度/图片盒子宽度. column = pageWidth / itemWidth

  



# **刷题部分：**

# js 实现 链表

单链表是表示一系列节点的数据结构，其中每个节点指向链表中的下一个节点。 相反，双向链表具有指向其前后元素的节点。

与数组不同，链表不提供对链表表中特定索引访问。 因此，如果需要链表表中的第三个元素，则必须遍历第一个和第二个节点才能到得到它。

- 节点

链表只是一系列节点，所以让我们从 Node 对象开始。

链表  一个节点有两条信息

- 指向链表中下一项的指针或引用(对于单链表)
- 节点的值

对于我们的节点，我们只需要创建一个函数，该函数接受一个值，并返回一个具有上面两个信息的对象:**指向下一个节点的指针和该节点的值**。

节点链表将包含五个方法：

- **push(value)**: 将值添加到链表的末尾
- **pop()** ：弹出链表中的最后一个值
- **get(index)**：返回给定索引中的项
- **delete(index)**：从给定索引中删除项
- **isEmpty()**: 返回一个布尔值，指示链表是否为空

**printList()**:不是链表的原生方法，它将打印出我们的链表，主要用于调试



# var/let/const的区别及使用场景

var 

- var定义的变量会预解析，

  简单的说就是如果变量没有定义就直接使用的话，JavaScript回去解析这个变量，代码不会报错，只会输出undefined

  ```
  console.log(a)
  var a = 1 // undefined
  ```

- var定义的变量可以反复去定义，当然后面的会覆盖前面的

  ```
  var a = 1
  var a = 2 
  console.log(a) //2
  ```

- var在循环中使用的时候，循环体外依然可以使用

  ```
  for(var i = 0 ;i<5;i++){
      console.log(i)
  }
  console.log(i)  //5
  ```

- 在循环绑定事件过程中，var定义的变量无法保存，循环会在瞬间执行完

  ```
    var arrLi = document.getElementsByTagName('li')
          for(var i=0;i<arrLi.length;i++){
              arrLi[i].onclick = function () {
                  console.log(arrLi[i])// undefined 
              }
          }
  ```

let 

- let定义的变量不会预解析，必须先声明再使用，否则会报错

  ```
  console.log(a)
  let a = 1 // ReferenceError: Cannot access 'a' before initialization
  ```

- let不能定义已经定义过的变量（无论之前是用var定义的还是let或者const定义的）

  ```
   var a = 1
          let a = 2 
          console.log(a) //Uncaught SyntaxError: Identifier 'a' has already been declared
  ```

- let是块级作用域，函数内部使用let定义后，对函数外部无影响，简单说就是在一个{}里面生效

  ```
   for(let i = 0 ;i<5;i++){
              console.log(i)
          }
          console.log(i)  //err
  ```

- 4，由于let是块级作用域，在循环绑定事件过程中let会在这个循环中生效，再次循环时let会重新定义生效

  ```
   var arrLi = document.getElementsByTagName('li')
          for(let i=0;i<arrLi.length;i++){
              arrLi[i].onclick = function () {
                  console.log(arrLi[i])
              }
          }
  ```

const

- const定义的变量不会预解析，必须先声明再使用，否则会报错

  ```
  console.log(a)
  const a = 1 // ReferenceError: Cannot access 'a' before initialization
  ```

- const定义的变量不允许修改

  ```
  const a = 1 
  console.log(a)
  a = 5 //TypeError: Assignment to constant variable.
  ```

  - 但是在数组里面，const的值是允许被修改的，这是因为const存储的是地址，值的内容可以变化

    ```
    const arr1 = [1,2,3,4,5]
    arr1[3] = 100 
    console.log(arr1) //[ 1, 2, 3, 100, 5 ]
    ```

    

所有 总结就是

一般变量不变的 用const

for循环中用  let

反复定义用 var 



# 排序函数的应用 sort

```
let nums = [-1,0,1,2,-4,-3,0,4]

let num2 = nums.sort()
console.log(nums) //[-1, -3, -4, 0, 0,  1,  2, 4]

let num1 = nums.sort(function (a,b) {
    return a-b
})   //正确的对nums的排序 
console.log(nums) //[-4, -3, -1, 0, 0,  1,  2, 4]
console.log(num2,num1) //[ -4, -3, -1, 0,0,  1,  2, 4] [ -4, -3, -1, 0,0,  1,  2, 4]

```

使用排序算法的时候  调用改方法会改变原数组的顺序 



# js数组的基本操作

- js中统计数组中元素出现的个数

  ```
  function getNumCount(arr) {
      return arr.reduce((pre,cur)=>{
          console.log(pre,cur)
          if(cur in pre){
              pre[cur]++
          }else{
              pre[cur] = 1
          }
          return  pre
      },{})
  }
  console.log(getNumCount([1,2,2,2,3,4,5,5])) 
  ```

  - js 数组去重

    ```
    function unique(arr) {
        return arr.reduce((pre,cur)=>{
            console.log(pre,cur)
            if(!pre.includes(cur)){
                pre.push(cur)
            }
            return  pre
        },[])
    }
    console.log(unique([1,2,2,2,3,4,5,5])) 
    ```

    注意 判断数组中是否有固定的某个数的方式

    返回 true 或者false的是 array.includes(searcElement[,fromIndex])  ！！！！

    - 1. 判断数组中是否存在某个值，如果存在返回true，否则返回false

      ```
      var arr=[1,2,3,4];
      if(arr.includes(3))
          console.log("存在");
      else
          console.log("不存在");
      ```

    - 2 array.indexOf   此方法判断数组中是否存在某个值，如果存在，则返回数组元素的下标，否则返回-1。

      ```
      var arr=[1,2,3,4];
      var index=arr.indexOf(3); 
      console.log(index); // 2  返回的是下标！！
      var index1=arr.indexOf(7); 
      console.log(index1); // -1
      ```

    - 3：array.find(callback[,thisArg])

      返回数组中满足条件的第一个元素的值，如果没有，返回undefined

      ```
      var arr=[1,2,3,4];
      var result = arr.find(item =>{
          return item > 9
      });
      console.log(result); //undefined
      
      ```

    - array.findeIndex(callback[,thisArg])

      返回数组中满足条件的第一个元素的下标，如果没有找到，返回`-1`

      ```
      var arr=[1,2,3,4];
      var result = arr.findIndex(item =>{
          return item > 3
      });
      console.log(result);
      ```

    - ```
      var arr=[1,2,3,4];
      var result = arr.findIndex(item =>{
          return item > 3
      });
      console.log(result);
      ```

      

      

      

      

      

      

    

- 遍历数组

  简单的 for  forEach

  ```
  var num = [1,3,4,5,7,9]
  for(let i=0; i<num.length;i++){
       console.log(num[i])
  }
  console.log("下面是用的forEach函数")
  num.forEach(element => {
      console.log(element)
  });
  ```

- 过滤数组

  *function(currentValue, index,arr)*    

  | *currentValue* | 必须。当前元素的值           |
  | -------------- | ---------------------------- |
  | *index*        | 可选。当前元素的索引值       |
  | *arr*          | 可选。当前元素属于的数组对象 |

  ````
  let arr = [56, 15, 48, 3, 7];
  let newArr = arr.filter((currentValue)=>{    // 参数的设置  currentValue 是当前的值 
      return currentValue%2===0
  })
  console.log(newArr)
  ````

- 条件筛选

  for 循环   filter 都行吧 

- 条件求和

  同上

- 最值筛选

  法子  可多了  不局限 

  ```
  var a=[1,3,9,8,5];
  var i,result=0;
  for(i=0;i<a.length;i++)
  {
  result=Math.max(result,a[i]);
  }
  console.log(result);
  ```

  

