class MartList {
  constructor(name,age,job,drink){
    ho : {
      this.name = name,
      this.age = age,
      this.job = job
    }
    no : {
      this.snack = "과자",
      this.ice = "아이스크림",
      this.drink = drink
    }
  }
  set name(value){
    if(typeof(value)==='string'){
      this._name = value;
    }
  }
  get name(){
    return this._name
  }
}

const doIt = () => {
  const martList = new MartList("신지윤",22,"마트관리자","토마토쥬스");
  
  return console.log(martList.ho)
}
console.log(doIt())