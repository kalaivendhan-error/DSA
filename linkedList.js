class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
    }

    
    prepand(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        // if(!this.isEmpty()){
        //     node.next=this.head
        // }
        // this.head=node
        this.size++
    }
    
    appand(value){
        const node =new Node(value)
        // var tails =this.tail
        // if(!curr){
        //     this.head=node
        //     this.size++
        //     return null;
        // }else{
        //     while(curr.next){   //O(n)
        //         curr=curr.next
        //     }
        // }
        // curr.next=node
        if(this.isEmpty()){    //O(1)
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
        this.size++

    }

    insert(index, value){
        if(index>this.size || index<0){
            console.log(`invalid index: ${index}, list size is ${this.size}`)
        }else{
            if(index==0){
                this.prepand(value)
                // if(!this.head.next){
                    // this.tail=node}
            }else{
            const node =new Node(value)
            let index_node=this.head
            for(let i=1; i<index; i++){
                index_node=index_node.next
            }
            if(!index_node.next){
                this.tail=node
            }
            node.next=index_node.next
            index_node.next=node
            this.size++}
        }
    }

    remove(index){
        if(index>=this.size || index<0){
            return null
        }else{
            if(index==0 && this.size==1 ){
                this.head=null
                this.tail=null
            }
            else if(index==0){
                this.head=this.head.next
            }else{
                var prev_node=this.head
                for(let i=0; i<index-1; i++){
                    prev_node=prev_node.next
                }
                var target_node=prev_node.next
                prev_node.next=target_node.next
                if(!target_node.next){
                    this.tail=prev_node
                }
                }
            }
            this.size--
        
    }

    delete(value){
        if( value <0 ){ return null}
        else{
            if(this.head.value == value && this.tail.value==1){
                this.head=null
                this.tail=null
                this.size--
            }
            else if(this.head.value==value){
                this.head=this.head.next
                this.size--
            }

            else{
                var index_node =this.head
                try{while(index_node.next.value !=value){
                    index_node=index_node.next
                }}catch{
                    console.log(`${value} not present in List `) 
                    return null}
                var target_node=index_node.next
                index_node.next=target_node.next
                if(!target_node.next){
                    this.tail=index_node
                }
                this.size--
            }
            
        }
    }

    display(){
        if(this.isEmpty()){
            console.log('List is Empty !!!')
            return null
        }
        var curr=this.head
        var items= `${curr.value} `
        while(curr.next){
            curr=curr.next
            items+= `${curr.value } `
        }
        console.log(items)
    }
    
    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    first(){
        if(this.isEmpty()){return null}
        else{return this.head.value}
        
    }

    last(){
        if(this.isEmpty()){return null}
        else{return this.tail.value}
    }
}

const ld=new linkedList
ld.insert(0,5)
ld.appand(10)
ld.insert(0,8)
// ld.delete(8)
ld.delete(5)
ld.remove(0)
ld.delete(20)
ld.delete(10)

ld.display()
console.log(ld.first())
console.log(ld.last())
console.log(ld.getSize())

// console.log(ld)