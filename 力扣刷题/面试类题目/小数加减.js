function add(n1,n2){
    let num1 = n1.toString().split('.')[1].length
    console.log(num1)
    let num2 = n2.toString().split('.')[1].length
    console.log(num2)

    let m =Math.pow(10,Math.max(num1,num2))  
    return (n1*m+n2*m)/m

}
let num1=0.1
let num2=0.2
let result = add(num1,num2)
console.log(result)



function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    m += s1.split(".")[1].length 
    m += s2.split(".")[1].length 
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

console.log(accMul(0.33,0.44))



