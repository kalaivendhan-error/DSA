class Hashtable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0; i<key.length; i++){
            total+=key.charCodeAt(i)}
        return total % this.size
    }

    set(key,value){
        const index=this.hash(key)
        // this.table[index]=value
        var bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key, value]]
        }else{
            let sameKey=bucket.find(item => item[0]==key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key, value])
            }
        }
    }

    get(key){
        const index= this.hash(key)
        // return this.table[index]
        const bucket=this.table[index]
        if(bucket){
            const targetKey=bucket.find(item =>item[0]===key)
            if(targetKey){
                return targetKey[1]
            }
        }else{
            return undefined
        }
    }

    remove(key){
        const index=this.hash(key)
        // this.table[index]=undefined
        const bucket=this.table[index]
        if(bucket){
            var targetKey=bucket.find(item => item[0]==key)
            if(targetKey){
                bucket.splice(bucket.indexOf(targetKey),1)
            }
        }
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
table.set('nickname','error')
table.set('mane','Miss d')
table.set('gf','Nisha')
table.set('fg','Monisha')
table.set('age',25)
table.remove('name')
table.remove('fg')
table.remove('age')
table.set('age',20)
table.print()
// console.log(table.get('name'))
// console.log(table.table)