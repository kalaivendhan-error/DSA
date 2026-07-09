class Cqueue{
    constructor(capacity){
        this.items=[]
        this.front=0
        this.rear=0
        this.size=0
        this.capacity=capacity
    }

    enqueue(value){
        if(this.isFull()){
            console.log('Queue is Full !!!')
            return null;
        }
        this.items[this.rear]=value
        this.rear=(this.rear +1) % this.capacity 
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Failed!!!!, Queue is empyt')
            return null;
        }
        this.items[this.front]=null
        this.front= (this.front+1) % this.capacity
        this.size--
    }

    isEmpty(){
        return this.size ==0
    }

    isFull(){
        return this.capacity==this.size
    }

    first(){
        return this.items[this.front]
    }

    display(){
        let result=[]
        if(this.rear>this.front){
            return result=this.items.slice(this.front, this.rear)
        }else{
        return result=this.items.slice(this.front,this.capacity).concat(this.items.slice(0,this.rear))}
    }

}

const cqueue= new Cqueue(5)
cqueue.dequeue()

cqueue.enqueue(10)
cqueue.enqueue(20)
cqueue.enqueue(30)
cqueue.enqueue(40)
cqueue.enqueue(50)

cqueue.dequeue()
cqueue.dequeue()

console.log(cqueue.first())

cqueue.enqueue(60)
cqueue.enqueue(70)
cqueue.enqueue(80)
console.log(cqueue.display())



// console.log(cqueue)