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

}