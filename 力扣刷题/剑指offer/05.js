var replaceSpace = function(s) {
    S_array = s.split(" ") //字符传按照什么切割成数组
    console.log(S_array)
    // myList.join('|')
    S_add_20 = S_array.join('%20') // 数组中按照怎么拼接
    console.log(S_add_20)
};

s = "We are happy."
replaceSpace(s)