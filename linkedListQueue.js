import  LinkedList  from "./linkedList.js";
// const linkedList=require('./linkedList')


class LinkedListQueue{
    constructor(){
        this.items=new LinkedList()
    }

    enqueue(value){
        this.items.appand(value)
    }

    dequeue(){
        this.items.remove(0)
    }

    print(){
        return this.items.print()
    }

    getSize(){
        return this.items.getSize()
    }

    isEmpty(){
        return this.items.isEmpty()
    }

    peek(){
        return this.items.first()
    }
}

const lq=new LinkedListQueue
console.log(lq.isEmpty())
lq.enqueue(10)
lq.enqueue(20)
lq.enqueue(30)

lq.dequeue()
lq.dequeue()

console.log(lq.getSize())
lq.print()
console.log(lq.peek())