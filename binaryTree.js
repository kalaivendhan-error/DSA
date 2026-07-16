class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newRoot = new Node(value)
        if (this.isEmpty()) {
            this.root = newRoot
        } else {
            this.insertValue(this.root, newRoot)
        }
    }
    insertValue(root, newRoot) {
        if (root.value > newRoot.value) {
            if (root.left == null) {
                root.left = newRoot
            } else {
                this.insertValue(root.left, newRoot)
            }
        } else {
            if (root.right == null) {
                root.right = newRoot
            } else {
                this.insertValue(root.right, newRoot)
            }
        }
    }

    search(value) {
        var curr_node = this.root
        while (curr_node.value != value) {
            if (curr_node.value > value) {
                if (curr_node.left == null) { return 'match not found' }
                curr_node = curr_node.left
            } else {
                if (curr_node.rigth == null) { return 'match not found' }
                curr_node = curr_node.right
            }
        }
        return 'match found'
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    bfsSearch(root) {
        var queue=[]
        queue.push(root)

        while(queue.length){
            let curr_node=queue.shift()
            console.log(curr_node.value)
            if(curr_node.left){queue.push(curr_node.left)}
            if(curr_node.right){queue.push(curr_node.right)}
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    removeNode(root, value){
        this.root =this.deleteNode(root, value)
    }  
    deleteNode(root, value){
        if(root ==null){
            return root
        }
        if(root.value > value){
            root.left=this.deleteNode(root.left, value)
        }
        else if(root.value < value){
            root.right=this.deleteNode(root.right, value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right, root.value)
        }
        return root
    }

    isEmpty() {
        return this.root == null
    }
}

const bt = new BinaryTree
console.log(bt.isEmpty())
bt.insert(10)
bt.insert(7)
bt.insert(27)
bt.insert(2)
bt.insert(8)
bt.insert(9)
bt.insert(30)
// bt.postOrder(bt.root)
// bt.bfsSearch(bt.root)
// console.log(bt)
// console.log(bt.min(bt.root))
bt.removeNode(bt.root, 9)
bt.bfsSearch(bt.root)
// console.log(bt.search(6))


