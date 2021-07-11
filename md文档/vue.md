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

  



# **刷题部分：**基础知识

## js 实现 链表

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



## var/let/const的区别及使用场景

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



## 排序函数的应用 sort

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



## js数组的基本操作

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


# 力扣刷题：

### **49 题 字母 异位分组**

// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

 ```
 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 输出:
 [
   ["ate","eat","tea"],
   ["nat","tan"],
   ["bat"]
 ]
 ```

解题思路 ：

1. 非暴力 但非最优      

   先把每一个元素都排序      然后匹配相同就好了

2. 优秀解法 

```
var groupAnagrams = function(strs) {
    if(strs.length === 0){
        return []
    }
    let map = new  Map()
    for(const str of strs){
        var temple =Array(26).fill(0)
        for(let i=0;i<str.length;i++){
            let asci_i = str.charCodeAt(i) - 97
            temple[asci_i]++
          
        }

        const key = temple.join(".")
        console.log(key)

        if(map.has(key)){
            map.set(key,[...map.get(key),str])
        }else{
            map.set(key,[str])
        }
    }

    const result = []
    for(const arr of map){
        result.push(arr[1])
    }

    return result
}; 

let strs =["bdddddddddd","bbbbbbbbbbc"]

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let strs = ["eat", "tea"]
console.log(groupAnagrams(strs))
```

### 54 螺旋矩阵

给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素

![img](vue.assets/spiral1.jpg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

```
var spiralOrder = function(matrix) {
    if(matrix.length ==0){
        return []
    }

    let left = 0,top=0,bottom=matrix.length-1,right=matrix[0].length-1

    let result = []
    direction = "right"

    while(left<=right && top<=bottom){
        if(direction == 'right'){
            for(let i=left;i<=right;i++){
                result.push(matrix[top][i])
            }
            top++
            direction = 'bottom'
        }
        else if(direction == 'bottom'){
            for(let i=top;i<=bottom;i++){
                result.push(matrix[i][right])
            }
            right--
            direction = 'left'
        }
        else if(direction == 'left'){
            for(let i=right;i>=left;i--){
                result.push(matrix[bottom][i])
            }
            bottom--
            direction = 'top'
        }
        else if(direction == 'top'){
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left++
            direction = 'right'
        }
    }
    return result
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix))
```

### 55 跳跃游戏

给定一个非负整数数组 `nums` ，你最初位于数组的 **第一个下标** 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

##### ！！！ 动态规划

 ```
 var canJump = function(nums) {
   if(nums.length==1)return false
   
   const dp = Array(nums.length-1).fill(false)
   console.log(dp)
 
   dp[0] = true
 
   for(let i=1 ;i<nums.length;++i){
       for(let j=i-1;j>=0;--j){
           if(!dp[j])continue
           if(nums[j]< i-j) continue
           dp[i]=true
           break
       }
   }
   return dp[nums.length-1]
 
 };
 
 // let nums = [2,3,1,1,4]
 let nums = [3,2,1,0,4]
 console.log(canJump(nums))
 ```

### 56合并区间

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

思路 ：先给所有的区间排序   然后 当一个区间的前一个值等与小于前一个区间   那就说明有重复的区域

```
var merge = function(intervals) {
    if(intervals.length<2) return intervals

    intervals.sort(function (a,b) {
        return a[0]-b[0]
    })

    let curr = intervals[0]
    let result = []
    
    for(let i=1; i<intervals.length; i++){
        if(curr[1]>=intervals[i][0]){
            curr[1] = Math.max(curr[1],intervals[i][1])
        }else{
            result.push(curr)
            curr = intervals[i]
        }
    }

    result.push(curr)
    return result
};

intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))
```

### 62. 不同路径

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。问总共有多少条不同的路径？

![img](vue.assets/robot_maze.png)

```
输入：m = 3, n = 7
输出：28
```

##### ！！！动态规划

```
var uniquePaths = function(m, n) {
    let memo = Array()

    for(let i=0;i<m;i++){
        memo.push([])
    }

    for(let row=0;row<m;row++){
        memo[row][0] = 1
    }
    for(let col=0;col<n;col++){
        memo[0][col] = 1
    }

    for(let row=1 ;row<m;row++){
        for(let col=1 ; col<n; col++){
            memo[row][col] = memo[row-1][col]+memo[row][col-1]
        }
    }
    return memo[m-1][n-1]
};

const m = 3, n = 7
console.log(uniquePaths(m,n))
```



### 66 加一

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。

```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

```
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i]!=9){
            digits[i]++
            return digits
        }else{
            digits[i] = 0
        }
    }
    const result  = [1,...digits]
    //const result  = [1].concat(digits)
    return result
};
let digits = [9,9]
console.log(plusOne(digits))
```

### 70 爬楼梯

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

```
var climbStairs = function(n) {
    let memo = Array(n+1)
    memo[0] = 1
    memo[1] = 1
    for(let i=2; i<n+1; i++){
        memo[i] = memo[i-1] + memo[i-2]
    }
    return memo[n]
};

let n = 2
console.log(climbStairs(n))
```

### 930. 和相同的二元子数组

给你一个二元数组 `nums` ，和一个整数 `goal` ，请你统计并返回有多少个和为 `goal` 的 **非空** 子数组。

**子数组** 是数组的一段连续部分。

输入：nums = [1,0,1,0,1], goal = 2
输出：4
解释：
有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]

```
var numSubarraysWithSum = function(nums, goal) {
    let sum = 0
    let result = 0
    let preSum = []    
    for(let i = 0 ; i<nums.length+1 ;i++){
        preSum[i] = sum
        sum += nums[i]
        for(let j =0 ;j<i ;j++){
            if(preSum[i]-preSum[j] == goal){
                result +=1
            }
        }
    }
    return result
};

let nums = [0,0,0,0,0], goal = 0
console.log(numSubarraysWithSum(nums,goal))
```

### 17.10. 主要元素

数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。

```
输入：[1,2,5,9,5,9,5,5,5]
输出：5
```

```
var majorityElement = function(nums) {
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums[0]
    let map = new Map()
    let maxNum = Math.ceil(nums.length/2) , key = 0
    for(let i = 0 ; i<nums.length ; i++){
        key = nums[i]
        if(map.has(key)){
            map.set(key, map.get(key) + 1)
            if(map.get(key)>=maxNum){
                return key
            }
        }else{
            map.set(key,1)
        }
    }
    return -1
};

let nums = [1,2,5,9,5,9,5,5,5]
console.log(majorityElement(nums))
```

### 704 二分查找

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

```
var search = function(nums, target) {
    
    let left = 0 ,right = nums.length -1
    let mid = 0
    while(left<=right){
        mid = Math.floor((right+left)/2)
        if(nums[mid] == target){
            return mid
        }else if(nums[mid] < target){
            left = mid+1
        }else if(nums[mid] > target){
            right = mid-1
        }
    }
    return -1
};

let nums = [5], target = 5
console.log(search(nums,target))
```

### 34. 在排序数组中查找元素的第一个和最后一个位置

给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

```
var searchRange = function(nums, target) {
    const findLeft =function (nums,target){
        let left = 0 ,right = nums.length -1
        let mid = 0
    
        while(left<=right){
            mid = Math.floor((right+left)/2)
            if(nums[mid] == target){
                right = mid-1
            }else if(nums[mid] < target){
                left = mid+1
            }else if(nums[mid] > target){
                right = mid-1
            }
        }
        return left
    }

    let result = new Array(2)
    if(findLeft(nums,target)>=nums.length || nums[findLeft(nums,target)]!=target) {
        return [-1,-1]
    }
    else{
        result=[findLeft(nums,target),findLeft(nums,target+1)-1]
    }

    return result
};

let nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums,target))
```

73 矩阵置0

给定一个 `*m* x *n*` 的矩阵，如果一个元素为 **0** ，则将其所在行和列的所有元素都设为 **0** 。请使用 **[原地](http://baike.baidu.com/item/原地算法)** 算法**。**

![img](vue.assets/mat1.jpg)

```
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
```

思路：

```
var setZeroes = function(matrix) {
    let firstColHasZero = []
    let firstRowHasZero = []
    for(let i=0;i<matrix.length;i++){  //行数 
        if(matrix[i][0]==0){
            firstRowHasZero.push(i)
        }
    }
    console.log(firstRowHasZero)

    for(let i=0;i<matrix[0].length;i++){ //列数
        if(matrix[0][i]==0){
            firstColHasZero.push(i)
        }
    }

    console.log(firstColHasZero)

    for(let row = 1; row <matrix.length ;row++){
        for(let col = 1; col<matrix[0].length ;col++){
            if(matrix[row][col]==0){
                matrix[0][col] = 0
                matrix[row][0] = 0
            }
        }
    }


    for(let row = 1; row <matrix.length ;row++){
        for(let col = 1; col<matrix[0].length ;col++){
            if(matrix[row][0]==0 || matrix[0][col]==0){
                matrix[row][col] = 0
            }
        }
    }


    //如果有行有为0 的数  那么 把该 行 列 变成0 
    if(firstRowHasZero.length>0 ){
        for(let i=0;i<firstRowHasZero.length;i++){
            //取出 行  为0 的位置 
            for(let row = 0; row <matrix.length ;row++){    
                matrix[row][0] = 0
            }
            for(let col = 0; col<matrix[0].length ;col++){
                matrix[firstRowHasZero[i]][col] = 0
            }
        }
    }
   console.log(matrix)

   if(firstColHasZero.length>0){
    for(let i=0;i<firstColHasZero.length;i++){  
            for(let row = 0; row <matrix.length ;row++){
                matrix[row][firstColHasZero[i]] = 0
            }
            for(let col = 0; col<matrix[0].length ;col++){
                matrix[0][col] = 0
            }
        }
    }
    return matrix
}

let matrix = [[1,0]]

console.log(setZeroes(matrix))
```

### 121.买卖股票的最佳时机

```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

minPrice的作用：必然是用当前的值减去前面最低的值用于更新，所以取一个变量存储前面的最小值。

Math.max(result,prices[i]-minPrice)如果出现 [3,7,1,2]这种情况，就需要比较两个上升的段哪一段利润最大。

```
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let result = 0
    for(let i = 0; i<prices.length; i++){
        minPrice = Math.min(minPrice,prices[i])
        result = Math.max(result,prices[i]-minPrice)
    }
    return result
};

let prices = [1,2]
console.log(maxProfit(prices))
```

### 122. 买卖股票的最佳时机 II

给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

输入: prices = [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

及其简单的算法：

求！！求所有增长趋势的利润！！！

```
var maxProfit = function(prices) {
    let profit = 0
    for(let i = 0; i<prices.length; i++){
      if(prices[i]<prices[i+1]){
          profit += prices[i+1]-prices[i]
      }
    }
    return profit
};

let prices =  [7,1,5,3,6,4]
console.log(maxProfit(prices))
```

