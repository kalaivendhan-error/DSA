class Cqueue{
    constructor(size){
        this.items=[]
        this.front=0
        this.rear=0
        this.size=size
    }

    enqueue(value){
        if(this.items.length==this.size){
            console.log('Queue overflow !!!, Queue is already full')
            return null;
        }
        
        this.items[this.rear]=value
        this.rear++
        console.log(`${value} added to Queue`)
    }

    dequeue(){
        if(this.front==this.rear){
            console.log("Failed !!!, Queue is Empty")
            return null;
        }
        console.log(`${this.items[0]} is removed`)
        this.items.splice(0,1)
        this.rear--
    }

    isEmpty(){
        return this.front==this.rear
    }

    length(){
        return this.rear
    }

    first(){
        return this.items[this.front]
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

cqueue.enqueue(60)
console.log(cqueue.length())
console.log(cqueue.isEmpty())
console.log(cqueue.first())


console.log(cqueue)