const date = new Date()
const today = date.getDate()
const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}

const container = (value) => {

  const helper= () => {
    if(today === value){
    return `${tagComponent('div', '오늘이네용')}`
    }else{
    return `${tagComponent('div', '오늘이 아니네요..')}`
    }
  }
  return `
    ${tagComponent('header', '헤더부분')}
    ${helper()}
    ${tagComponent('footer', '푸터부분')}
  `;
}
console.log(container(11))