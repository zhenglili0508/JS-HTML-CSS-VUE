 //创建一个动画函数
//attr 执行动画的样式 ,left  top  
//target  目标方向 0 或者 800
//speed    正 左    负右
//callback  是回调函数 
function move (obj,attr,target,speed,callback){
    clearInterval(obj.timer)

    //判断速度的正负值
    //如果从日向8日8移动,则speed为正//如果从8日日向移动,则speed为负
    var current = parseInt(getStyle(obj,attr))
    if(current>target){
        speed = -speed
    }

    //开启一个定时器  让它可以实现往右移动的功能
    ///向执行动画的对象中添加一个timer属性,用来保存它自己的定时器的标识
    obj.timer = setInterval(function(){
        //获取源值
        var oldvalue = parseInt(getStyle(obj,attr))  
        // alert(oldvalue)
        //设置新值
        var newValue = oldvalue + speed
        // if 判断要考虑两种情况
        if(speed<0 && newValue<target ||speed>0&&newValue>target){
            newValue = target
        }
        obj .style[attr] = newValue +"px"
        //当元素移动到 800px 的时候  关闭
        if(newValue == target){
            clearInterval(obj.timer)

            callback&&callback()
        }
    },30)
}
// 函数实现 
function getStyle(obj,name){
if(window.getComputedStyle){
    return getComputedStyle(obj,null)[name]
}else{
    return obj.currentStyle[name]
}
}

 // 定义一个函数   来向元素中添加之指定的 class 属性值 
 function addClass(obj,cn){
    if(!hasClass(obj,cn)){
       obj.className +=" "+cn
    }
   
}
//判断是不是有该类 
function hasClass(obj,cn){
   //var reg = /\bb2\b/
   var reg = new RegExp("\\b"+cn+"\\b")
   return reg.test(obj.className)
}
//移除样式
function removeClass(obj,cn){
   var reg = new RegExp("\\b"+cn+"\\b")
    obj.className = obj.className.replace(reg," ")
}
//切换 样式 
function toggleClass(obj,cn){
   if(hasClass(obj,cn)){
       removeClass(obj,cn)
   }else{
       addClass(obj,cn)
   }
}