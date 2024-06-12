const date = new Date()
const today = date.getHours()
const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}

const container = () => {

  const helper= () => {
    if(today >= 12){
    return `${tagComponent('div', '오후네용')}`
    }else{
    return `${tagComponent('div', '오전이네용')}`
    }
  }
  return `
    ${tagComponent('header', '헤더부분')}
    ${helper()}
    ${tagComponent('footer', '푸터부분')}
  `;
}
console.log(container())