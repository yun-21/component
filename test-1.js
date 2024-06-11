function formatHTML(language = 'korean'){
  let htmlData = {
    titleOne : "신지윤",
    titleTwo : "shinjiyun",
    h1 : "내 이름은",
    p : "신지윤입니다",
  }

  //헬퍼함수
  let decision = () => {
    if(language==="korean"){
      return htmlData.titleOne;
    }
    if(language==="english"){
      return htmlData.titleTwo;
    }
  }
  
  let html = `
  <html>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `
  return html;
}
// console.log(formatHTML("korean"))
// console.log(formatHTML("english"))
console.log(formatHTML())