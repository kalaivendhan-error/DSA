import LinkedList from "./linkedList.js";

class LinkedListStack{
    constructor(){
        this.items=new LinkedList()
    }

    push(value){
        this.items.insert(0,value)
    }

    pop(){
        this.items.remove(0)
    }

    print(){
        return this.items.print()
    }

    peek(){
        return this.items.first()
    }

    isEmpty(){
        return this.items.isEmpty()
    }

    getSize(){
        return this.items.getSize()
    }
}

const ls=new LinkedListStack
console.log(ls.isEmpty())
ls.push(10)
ls.push(20)
ls.push(30)
ls.print()
// ls.pop()
console.log(ls.peek())
console.log(ls.getSize())
