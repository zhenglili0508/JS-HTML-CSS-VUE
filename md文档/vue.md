原型链的继承

防抖的理解和实现

节流函数的理解和实现



# 原型链的继承

原型链的继承，子类的原型是父类的实例。

```
        Child.prototype = new Parent()
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

