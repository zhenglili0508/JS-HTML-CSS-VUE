var CQueue = function() {
     this.stackA = []
     this.stackB = []
};

CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value)
};

CQueue.prototype.deleteHead = function() {
    if(this.stackB.length){   
        return this.stackB.pop()
    }else{
        while(this.stackA.length){
            this.stackB.push(this.stackA,pop())
        }
        // 现在 B 中有数据   就pop
        if(this.stackB.length){
            return this.stackB.pop()
        }else{
            return -1
        }
    }
};

// var deal = ["appendTail","appendTail","deleteHead","deleteHead"]
// var val = [[1],[3],[],[]]

// for(var i =0;i<deal.length;i++){
//     console.log(deal[i])
//     CQueue.prototype.deal[i](val[i])
// }
