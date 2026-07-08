            //Queue implementation in array

// class Queue{
//     constructor(queue_max){
//         this.arr=[]
//         this.front=-1
//         this.size=queue_max
//     }

//     push(value){
//         if(this.front==this.size-1){
//             console.log('Queue Overflow')
//             return
//         }
//         this.arr.unshift(value)
//         this.front++
//         console.log(`${value} pushed`)
//     }

//     pop(){
//         if(this.front==-1){
//             console.log('Failed !!!!, Queue is Empty')
//             return
//         }
//         console.log(`${this.arr[0]} poped`)
//         this.arr.splice(0,1)
//         this.front--
//     }

//     isEmpty(){
//         return this.front==-1
//     }

//     length(){
//         return this.front+1
//     }

//     display(){
//         console.log(this.arr)
//     }

//     first(){
//         return this.arr[0]
//     }

//     clear(){
//         for(let i=0; i<this.front+1; i++){
//             this.arr.shift()
//         }
//         this.front=-1
//     }
// }

// const queue=new Queue(5)
// console.log(queue.isEmpty())
// queue.push(10)
// queue.push(20)
// queue.push(30)
// queue.push(40)
// queue.push(50)
// queue.push(60)
// queue.push(70)
// queue.pop()
// console.log(queue.length())
// queue.display()
// console.log(queue.first())
// console.log(queue.isEmpty())
// queue.clear()


// console.log(queue)




                // Queue  implementaton is Object
class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }

    enqueue(value){
        this.items[this.rear]=value
        this.rear++
        console.log(`${value} added in queue`)
    }

    dequeue(){
        if(this.rear==this.front){
            console.log('failed !!!, Queue is empty')
            return
        }
        console.log(`${this.items[this.front]} removed from the queue`)
        delete this.items[this.front]
        this.front++
    }

    isEmpty(){
        return this.front==this.rear
    }

    first(){
        if(this.rear==this.front){
            console.log('Queue is empty')
            return null;
        }
        return this.items[this.front]
    }

    size(){
        return this.rear-this.front
    }
}

const queue=new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)

console.log(queue.size())
console.log(queue.first())

console.log(queue.isEmpty())

queue.dequeue()
queue.dequeue()

console.log(queue)