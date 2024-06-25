class Test{
  constructor(hobby, want, age){
    this.hobby = hobby;
    this.want = want;
    this.age = age;
  }

  render(){
    return `
    <h1>${this.hobby}</h1>
    <h2>${this.want}</h2>
    <h3>${this.age}</h3>
    `
  }
}

const test = new Test("네일하기","응용잘하기",25)
console.log(test.render())