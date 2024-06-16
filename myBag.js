class MyBag {
    constructor(book, note, lunch){
        this.book = book,
        this.note = note,
        this.lunch = lunch
    }
    set book(value){
        if(typeof(value)==='string'){
            this._book=value
        }else{
            throw new Error('error')
        }
    }
    get book(){
        return this._book
    }

    set note(value){
        if(typeof(value)==='string'){
            this._note=value
        }else{
            throw new Error('error')
        }
    }
    get note(){
        return this._note
    }

    set lunch(value){
        if(typeof(value)==='string'){
            this._lunch=value
        }else{
            throw new Error('error')
        }
    }
    get lunch(){
        return this._lunch
    }
}

const inBag = (book,note,lunch) =>{
    const myBag = new MyBag(book,note,lunch);
    
    const helper = () => {
        if(book === '딥다이브'){
            console.log("javascript를 공부하시나봐요")
        }
        else if(book === '노드'){
            console.log("Node를 공부하시나봐요")
        }
        else if(book === 'git'){
            console.log("git에 대해 공부하시나봐요")
        }
        else{
            console.log(`${book}에 대해 공부하시나봐요`)
        }
    }
    helper()
    return myBag
}

const call = (callback) =>{
    const result = inBag("딥다이브","아이패드","불고기덮밥")
    callback(result,menu)
}
const menu = (result) =>{
    console.log(result)
}
call((result, callback)=>callback(result,menu))