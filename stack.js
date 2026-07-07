                //Stack Implementation in array

// class StackArr{
//     constructor(size){
//         this.arr=[]
//         this.top=-1
//         this.size=size
//     }

//     pushing(value){
//         if (this.arr.length==this.size){
//             console.log('Stack Overflow, maximum stack reached')
//             return;
//         }
//         this.arr[++this.top]=value
//         console.log(`${value} pushed`)
//     }

//     poping(){
//         if (this.isEmpty()){
//             console.log('Stack Underflow, there is no stack to delete')
//             return;
//         }
//         console.log(`${this.arr[this.top]} poped`)
//         this.arr.pop()
//         --this.top
//     }
    
//     peek(){
//         if(this.isEmpty()){
//             console.log('there is no stack ')
//         }
//         console.log(this.arr[this.top])
//     }

//     length(){
//         if(this.top==-1)  {return 0} else {return this.top+1}
//     }

//     display(){
//         console.log(this.arr)
//     }

//     isEmpty(){
//         return this.top==-1
//     } 
    
// }

// var stack =new StackArr(5)
// console.log(stack.isEmpty())  //O(1)
// stack.pushing(20)               //O(1)
// console.log(stack.length())
// stack.pushing(1)               
// stack.pushing(2)
// stack.pushing(3)
// stack.pushing(4)
// stack.pushing(5)
// stack.pushing(6)
// stack.poping()                //O(1)
// console.log(stack.isEmpty()) 
// stack.peek()       //O(1)
// stack.display()     //O(n)





                //Stack Implementation in Object
class stackObj{
    constructor(size){
        this.obj={}
        this.top=-1
        this.size=size
    }

    push(value){
        if(this.size==this.top){
            console.log('stack is Overloaded')
            return;
        } 
        // this.top++
        this.obj[++this.top]=value
        console.log(`${value} pushed`)
    }

    pop(){
        if(this.isEmpty()){
            console.log('stack Underflow, no stack to delete')
            return
        }
        console.log(`${this.obj[this.top]} poped`)
        delete this.obj[this.top]
        this.top--
    }

    length(){
        if(this.isEmpty()){
            return 0
        }else{return this.top+1}
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack is Empty'
        }
        return this.obj[this.top]
    }

    isEmpty(){
        return this.top==-1
    }

    display(){
        console.log(this.obj)
    }
    
}

const stack =new stackObj(5)
console.log(stack.isEmpty())
stack.push(20)
stack.push(30)
// stack.push(40)
stack.pop()
console.log(stack.length())
console.log(stack.peek())
console.log(stack)
stack.display()