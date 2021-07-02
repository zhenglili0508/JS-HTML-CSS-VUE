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







