class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
        this.tail = null
    }


    prepand(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        // if(!this.isEmpty()){
        //     node.next=this.head
        // }
        // this.head=node
        this.size++
    }

    appand(value) {
        const node = new Node(value)
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
        if (this.isEmpty()) {    //O(1)
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.size++

    }

    insert(index, value) {
        if (index > this.size || index < 0) {
            console.log(`invalid index: ${index}, list size is ${this.size}`)
        } else {
            if (index == 0) {
                this.prepand(value)
                // if(!this.head.next){
                // this.tail=node}
            } else {
                const node = new Node(value)
                let index_node = this.head
                for (let i = 1; i < index; i++) {
                    index_node = index_node.next
                }
                if (!index_node.next) {
                    this.tail = node
                }
                node.next = index_node.next
                index_node.next = node
                this.size++
            }
        }
    }

    remove(index) {
        if (index >= this.size || index < 0) {
            console.log('Invalid Index')
            return null
        } else {
            if (index == 0 && this.size == 1) {
                this.head = null
                this.tail = null
            }
            else if (index == 0) {
                this.head = this.head.next
            } else {
                var prev_node = this.head
                for (let i = 0; i < index - 1; i++) {
                    prev_node = prev_node.next
                }
                var target_node = prev_node.next
                prev_node.next = target_node.next
                if (!target_node.next) {
                    this.tail = prev_node
                }
            }
        }
        this.size--

    }

    deleteValue(value) {
        if (value < 0 || this.size == 0) {
            console.log('List is Empty')
            return null
        }
        else {
            if (this.head.value == value) {
                this.head = this.head.next
                if (!this.head) { this.tail = null }
                this.size--
            }
            // else if(this.head.value==value){
            //     this.head=this.head.next
            //     this.size--
            // }

            else {
                var index_node = this.head
                while (index_node.next?.value != value) {
                    if (index_node.next == null) {
                        console.log("Invalid Value")
                        return
                    }
                    index_node = index_node.next
                }
                var target_node = index_node.next
                index_node.next = target_node.next
                if (!target_node.next) {
                    this.tail = index_node
                }
                this.size--
            }

        }
    }

    search(value) {
        var index
        var target = this.head

        for (let i = 0; i < this.size; i++) {
            if (target.value == value) {
                return index = i
            } else if (target.next == null) { return `${value} not fount` }
            target = target.next
        }
    }

    printReverse() {
        if (this.isEmpty()) { return 'list is Empty' }
        else {
            var result = ''
            var curr_node = this.head
            for (let i = 0; i < this.size; i++) {
                result = `${curr_node?.value} ${result}`
                // this.insert(0,curr_node?.value) 
                curr_node = curr_node?.next
            }
            console.log(result)
        }
    }

    reverse() {
        if (this.isEmpty()) { return 'failed to reverse!!!, string is Empty' }
        var curr_node = this.head
        var next_node = curr_node?.next
        curr_node.next = null
        this.tail = curr_node
        for (let i = 0; i < this.size - 1; i++) {  // 0,1
            var upComingNext = next_node?.next
            next_node.next = curr_node
            this.head = next_node
            curr_node = next_node
            next_node = upComingNext
        }
        // console.log('reversed')
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty !!!')
            return null
        }
        var curr = this.head
        var items = `${curr.value} `
        while (curr.next) {
            curr = curr.next
            items += `${curr.value} `
        }
        console.log(items)
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    first() {
        if (this.isEmpty()) { return null }
        else { return this.head.value }

    }

    last() {
        if (this.isEmpty()) { return null }
        else { return this.tail.value }
    }
}

const ld = new linkedList
ld.insert(0, 5)
ld.appand(10)
ld.insert(0, 8)
ld.appand(15)
ld.appand(20)
// ld.deleteValue(8)
// ld.deleteValue(5)
// ld.remove(0)
// ld.deleteValue(20)
// ld.deleteValue(10)
// ld.deleteValue(null)   //Stupid Idea(lol)

ld.print()
console.log(ld.first())
console.log(ld.last())
console.log(ld.getSize())
// console.log(ld.search(10))
ld.reverse()
ld.print()
console.log(ld.first())
console.log(ld.last())
// console.log(ld)