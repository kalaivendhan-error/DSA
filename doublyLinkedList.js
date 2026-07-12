

class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    prepand(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }

    appand(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }

    insert(index, value){
        const node =new Node(value)
        if(this.isEmpty() && index!=0){
            console.log('list is Empty')
        }
        else if(index<0 || index>this.size){
            console.log("invalid index")
        }
        else if(index==0 && this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
        }
        else if(index==0 && !this.isEmpty()){
            node.next=this.head
            this.head.prev=node
            this.head=node
            this.size++
        }
        else if(index==this.size){
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
            this.size++
        }
        else{
            var prev_node=this.head
            for(let i=1; i<index; i++){
                prev_node=prev_node.next
            }
            var index_node=prev_node.next
            prev_node.next=node
            node.prev=prev_node

            index_node.prev=node
            node.next=index_node
            this.size++
        }
    }

    deleteValue(value){
        if(this.isEmpty()){
            console.log('List is Empty')
        }else{
            if(this.head.value==value){
                this.head=this.head.next
                this.head.prev=null
            }
            else if(this.tail.value==value){
                this.tail=this.tail.prev
                this.tail.next=null
            }
            else{
                var curr_node=this.head
                while(curr_node.value !=value){
                    curr_node=curr_node.next
                }
                var next_node=curr_node.next
                var prev_node=curr_node.prev
                prev_node.next=next_node
                next_node.prev=prev_node
            }
            this.size--
        }
    }

    remove(index){
        if(this.isEmpty()){
            console.log('List is already Empty')
        }
        else if(index==0){
            if(this.size==1){
                this.head=null
                this.tail=null
            }else{
                this.head=this.head.next
                this.head.prev=null
            }this.size--
        }else if(index==this.size-1){
            this.tail=this.tail.prev
            this.tail.next=null
            this.size--
        }else{
            var target_node=this.head.next
            for(let i=1; i<index; i++){
                target_node=target_node.next
            }
            var prev_node=target_node.prev
            var next_node=target_node.next

            prev_node.next=next_node
            next_node.prev=prev_node
            this.size--
        }
    }

    reverse(){
        if(this.isEmpty()){
            console.log('Failed!!, List is Empty to reverse')
        }else{
            var curr_node=this.head
            this.tail=this.head
            var next_node=curr_node.next
            curr_node.next=null
            
            for(let i=1; i<this.size; i++){
                if(!next_node.next){
                    this.head=next_node
                }
                var upComing_Node=next_node?.next

                curr_node.prev=next_node
                next_node.next=curr_node
                next_node.prev=upComing_Node

                curr_node=curr_node.prev  //to be remembered
                next_node=next_node.prev
            }
        }
    }

    search(value){
        var curr_node=this.head
        var i=0;
        while(curr_node.value!=value){
            curr_node=curr_node.next
            if(curr_node==null){return `${value} not found`}
            i++
        }
        return i
    }


    print(){
        var curr_node=this.head
        var result= ''
        while(curr_node){
            result+= `${curr_node.value} `
            curr_node=curr_node.next
        }
        console.log(result)
    }

    first(){
        return this.head?.value
    }

    last(){
        return this.tail?.value
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size ==0   
    }
}

const dll=new DoublyLinkedList

dll.insert(0,10)
dll.insert(0,20)
dll.insert(0,30)
dll.insert(3,5)

dll.print()
console.log(dll.first())
console.log(dll.last())
console.log(dll.getSize())
// console.log(dll.search(5))
dll.reverse()
dll.print()
console.log(dll.first())
console.log(dll.last())