const a = (name, age, job) => {
  return{
    name:name,
    age:age,
    job:job
  }
}
// console.log(a());

const b = a("신지윤",25,"백수"); //객체를 만들어주는 캡슐
console.log(b);