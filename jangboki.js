const rl = require('node:readline');
const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

class MartList {
  constructor(name, job, drink, wash, hand, susemi) {
    this.manager = () => {
      this.name = name,
        this.job = job
      return this.name + " " + this.job
    }
    this.food = () => {
      this.snack = "과자",
        this.ice = "빠삐코",
        this.drink = drink
      return this.snack + " " + this.ice + " " + this.drink
    }
    this.kitchen = () => {
      this.wash = [wash, hand, susemi],
        this.bowl = "밥그릇",
        this.rice = "밥주걱"
        return this.wash + " " + this.bowl + " " + this.rice
    }
  }
}

const doIt = () => {
  const martList = new MartList("신지윤", "마트관리자", "토마토쥬스","퐁퐁","고무장갑","수세미");
  return martList
}

const introduce = () => {
  return "저는 " + doIt().manager() + "이고"
}

const want = () => {
  const list = doIt().food().split(' ')
  if(list[0]==='과자'){
    console.log(`마트에서는 ${list[0]}와 ${list[1]}을 사고 ${list[2]}를 마시면서 왔습니다.`)
    readLine.question(`${list[0]}라면 어떤 과자를 샀을까요?`,(answer)=>{
      if(answer === '계란과자'){
        console.log(`맞아요! ${answer}를 샀습니다~`)
      }
      else{
        console.log(`${answer}도 맛있겠네요! 하지만 제가 산 과자는 아니에요`)
      }
    readLine.close();
    })
  }
}

const kitchenWant = () =>{
  const list = doIt().kitchen().split(" ")
  return `설거지를 위해서는 제일 중요한 ${list[0]}를 먼저 담았고
밥을 먹기 위해 ${list[1]}와 ${list[2]}를 샀습니다.`
}

const render = () => {
  return console.log(`${introduce()}
${kitchenWant()}`)+want()
}
render()