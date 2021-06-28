// Vue 的插件库
(function(){
    //需要向外暴露的插件对象
    const MyPlugin = {}
    // 插件对象必须有的一个install 方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log("vue函数对象的方法myGlobalMethod（）")
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive',function(el,binding){
            console.log(el,binding)
            el.textContent = binding.value.toUpperCase()
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log("vue实例对象的方法：$myMethod()")
        }
      }
    // 插件向外暴露
      window.MyPlugin = MyPlugin
})()