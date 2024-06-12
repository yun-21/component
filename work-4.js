const component = () => {
  let obj = {
    name : "신지윤",
    age : 25,
    job : "망고재배사"
  };
  
  let innerFunc = () =>{
    if(obj.age > 20){
      return "여름엔 역시 콕카콜라가 최고지!"
    }else{
      return "여름엔 역시 펩식콜라가 최고지!"
    }
  }
  
  let anotherFunc = () =>{
    if(obj.job === '망고재배사'){
      return "망고 많이 먹겠다.."
    }else{
      return "망고재배사가 아니라니 실망.."
    }
  }

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${anotherFunc()}</h3>
  `;
}
console.log(component())