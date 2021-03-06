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

  ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>用js实现瀑布流</title>
      <style>
         *{
             margin: 0;
             padding: 0;
             background: #333;
         }
         img{
             width: 300px;
         }
         #main{
            position: relative;
         }
        .box{
              float: left;
              padding: 15px 0 0 15px;
         }
         .pic {
              padding: 10px;
              border: 1px solid #ccc;
          }
         
      </style>
  </head>
  <body>
  
      <div id="main">
          <div class="box">
              <div class="pic">
                  <img src="./img/1.jpg">
              </div>
          </div>
  
          <div class="box"><div class="pic"><img src="./img/2.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/3.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/4.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/5.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/6.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/7.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/8.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/9.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/10.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/11.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/12.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/13.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/14.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/15.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/16.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/17.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/18.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/19.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/20.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/21.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/22.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/23.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/24.jpg"></div></div>
          <div class="box"><div class="pic"><img src="./img/25.jpg"></div></div>    
  
      </div>
      
      <script>
    
          window.onload = function () {
          var father = document.getElementById("main")
          var allBox = document.getElementsByClassName("box")
          
          var boxWidth = allBox[0].offsetWidth
          var screen = document.body.clientWidth || document.documentElement.clientWidth
          console.log(screen+'zzz')
         
          var cols = parseInt(screen/boxWidth)
  
          father.style.width = cols*boxWidth +'px'
          father.style.margin = '0 auto'
  
          // console.log(father.style.width)
  
          var heightArr = [] ,boxHeight = 0, minBoxHeight = 0, minIndex = 0
  
          for(let i=0;i<allBox.length ; i++){
              boxHeight = allBox[i].offsetHeight
              if(i < cols){
                  heightArr.push(boxHeight)
              }else{
                  minIndex = minbox(heightArr)
                  minBoxHeight = heightArr[minIndex]
                  allBox[i].style.position = 'absolute'
                  allBox[i].style.left = minIndex * boxWidth +'px'
                  allBox[i].style.top = minBoxHeight + 'px'
  
                  heightArr[minIndex] += boxHeight
              }
  
          }
           function minbox(box){
              var j = 0
              for(let i=0;i<box.length;i++){
                  if(box[i]<box[j]){
                      j=i
                  }
              }
              return j
           }  
  
          }
      //节流 监测 窗口大小
      window.addEventListener("resize", debounce(callbackFN, 200))
  
      function callbackFN() {
          return window.onload()
      }
      function debounce(callbackFN,delay){
          let timer = null
          return function(){
              if(timer){
                  clearTimeout(timer)
              }
              timer = setTimeout(callbackFN, delay);
          }
      }
  
      </script>
  </body>
  </html>
  ```
  
  

# 自定义指令

需求1:定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- 
    需求1:定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。 
-->

<div id="root">
<h2>当前的n值是： <span v-text="n"> </span></h2>
<h2>自定义指令n的十倍是： <span v-big="n"> </span></h2>
<button @click="n++">点我n+1</button>
</div>

<script type="text/javascript" src="../../Vue框架/js/vue.js"></script>
<script type="text/javascript">
    new  Vue({
        el:'#root',
        data:{
            n:1
        },
        directives:{
            big(element,binding){  
                //big函数何时会被调用?1.指令与元素成功绑定时（一上来)。2.指令所在的模板被重新解析时.
                //console.log(a instanceof HTMLElement) // element是获取的绑定的真实的dom元素，binding是个对象，绑定对象
                console.log("big")
                element.innerText = binding.value*10
            }
        }    
    })
</script>
</body>
</html>
```

需求2:定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。

```
<input type="text" v-fbind:value="n">
            
            fbind:{
            bind(element,binding){
            element.value = binding.value
            },
            inserted(element,binding){
            element.focus()
            },
            update(element,binding){
            element.value = binding.value
            }
            }

```

里面的this  是 window  而不是vm



# axios +promise

基本结构

```
function axios({url,method='',param = {},data={}}){
    
    //返回一个promise 对象！
    return new Promise((resolve,reject)=>{ //执行器函数
        //1.发送Ajax请求    

        // 2.1请求成功了就调用resolve()

        // 2.2失败了调用 reject()
    })
}

axios({
    url :'/xxx'
})
```

所有步骤！

```
function axios({url,method='',param = {},data={}}){
    
    //返回一个promise 对象！
    return new Promise((resolve,reject)=>{ //执行器函数
        //1.发送Ajax请求
            //1.1创建xhr对象
            const request = new XMLHttpRequest()
            //1.2打开连接 初始化请求
            request.open(method,url,true)
            //1.3发送Ajax请求
            if(method === 'GET'){
                request.send()
            }else if(method === 'POST'){
                request.send(JSON.stringify(data))
            }
        // 绑定状态改变的监听
        request.onreadystatechange = function(){
            if(request.readyState!==4){
                return
            }
            const {status,statusText} = request
        }
        // 2.1请求成功了就调用resolve()
        if(status>=200 && status<=299){
            const response = {
                data:JSON.parse(request.response),
                status,
                statusText
            }
            resolve(response)
        }else{ // 2.2失败了调用 reject()
            reject(new Error('request error status is '+ status))
        }
    })
}


axios({
    url :'/xxx'
}).then( //两个回调函数
    response =>{
        console.log(response)
    },
    error =>{
        alert(error.message)
    }
)
```



# 常用的mint-ui

button 组件   先引入  再注册全局组件标签  再使用 

退出登录时用了 MessageBox 与Toast 

```
          <mt-button type='danger' style="width:100%" v-if="userInfo._id" @click="logout">退出登陆</mt-button>
        
     
      logout(){
      MessageBox.confirm('乖乖，确认退出?').then(
          action => {
            //请求退出  
            this.$store.dispatch('logout')
            Toast('退出成功')
          },
          action => {
              console.log("点击了取消！")
          }
      );
    }         
```



# 三种主流的预编译器   less    sass   stylus   

优点：结构化  父级引用   css的复用 



# 1. webpack与grunt、gulp的不同？

三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

所以总结一下：

- 从构建思路来说

gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工

- 对于知识背景来说

gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路