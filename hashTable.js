class Hashtable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0; i<key.length; i++){
            total+=key.charCodeAt(i)
        }
        // console.log(total% this.size)
        return total % this.size
    }

    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }

    get(key){
        const index= this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined
    }

    print(){
        for(let i=0; i<this.size; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

const table=new Hashtable(50)
// table.hash('kalai')
table.set('name','kalai')
table.set('frd','Miss d')
table.set('gf','Nisha')
table.set('age',25)
table.remove('frd')
console.log(table.get('name'))
table.print()
console.log(table.table)