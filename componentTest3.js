class Wallet {
    constructor(money,picture){
        this.money = money;
        this.picture = picture;
    }

    money(){
        return `<h1>나의 지갑에는 ${this.money}정도가 있습니다.</h1>`
    }
}
const wallet = new Wallet(1000,"부모님");
console.log(wallet.money())