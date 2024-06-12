class BasicData {
  constructor(name,age,job){
    this.name=name;
    this.age = age;
    this.job = job;
  }
  set name(value){
    if(typeof(value)==='string'){
      this._name=value
    }
    else{
      console.log('이름이 문자열이 아닙니다.')
    }
  }
  set age(value){
    if(typeof(value)==='number'){
      this._age=value
    }
    else{
      console.log('나이가 숫자가 아닙니다.')
    }
  }
  set job(value){
    if(typeof(value)==='string'){
      this._job=value
    }else{
      console.log('직업이 문자열이 아닙니다.')
    }
  }
}
const component = () => {
  let obj = new BasicData('공욱재',26,'미남');
  const decision = () => {
    if(obj instanceof BasicData===true){
      return `<html>
      <head>
      <body>
      <h1>이름 : ${obj._name}</h1>
      <h2>나이 : ${obj._age}</h2>
      <h3>직업 : ${obj._job}</h3>
      </body></head></html>`
    }
    else{
      throw new Error();
    }
  }
  return decision()
}
console.log(component());