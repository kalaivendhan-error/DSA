class Stack{
    constructor(size){
        this.arr=[]
        this.top=-1
        this.size=size
    }

    pushing(value){
        if (this.arr.length==this.size){
            console.log('Stack Overflow, maximum stack reached')
            return;
        }
        this.arr[++this.top]=value
        console.log(`${value} pushed`)
        // console.log(this.top)
    }

    poping(){
        if (this.isEmpty()){
            console.log('Stack Underflow, there is no stack to delete')
            return;
        }
        console.log(`${this.arr[this.top]} poped`)
        this.arr.pop()
        --this.top
    }
    
    peek(){
        if(this.isEmpty()){
            console.log('there is no stack ')
        }
        console.log(this.arr[this.top])
    }

    display(){
        if(this.isEmpty()){
            console.log('there is no stack ')
            return
        }
        console.log(this.arr)
    }

    isEmpty(){
        return this.top==-1
    } 
    
}

var stack =new Stack(5)
stack.pushing(1)
stack.pushing(2)
stack.pushing(3)
stack.pushing(4)
stack.pushing(5)
stack.pushing(6)

stack.poping()
// stack.isEmpty()

stack.peek()


stack.display()