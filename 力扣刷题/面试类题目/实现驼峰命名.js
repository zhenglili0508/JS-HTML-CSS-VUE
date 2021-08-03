function transformStr ( str ) {
    const newStr = []
    for(let i=0;i<str.length;i++){
        if(str[i]=='-'){
            i = i+1
            newStr.push(str[i].toUpperCase())

        }else{
            newStr.push(str[i].toLowerCase())
        }
    }
    return newStr.join('')
}

var stringTuoFeng='Get-elEment-by-id';
console.log(transformStr(stringTuoFeng))