const component = (name,age,job) => {
  return {
    name : name,
    age : age,
    job : job
  }
}
let decision = (langugae='학생') =>{
  if(langugae==='학생'){
    return component('신지윤',21,'학생')
  }
  if(langugae==='직장인'){
    return component('심지윤',20,'직장인')
  }
}
console.log(decision('직장인'))