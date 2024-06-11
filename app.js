const app = () => {
  function a(tagName, im) {
    const aa = [];
    names.forEach((element) => {
      if(element!=='신지윤'){
        if(tagName === 'h2'){
          aa.push(`<${tagName}>${element}${im}</${tagName}>`)
        }
      }
      else{
        if(tagName === 'h1'){
          aa.push(`<${tagName}>${element}${im}</${tagName}>`)
        }
      }
    })
    return aa.join('')
  }
  return `${a('h1', '입니다.')}
          ${a('h2', '입니다.')}`
}