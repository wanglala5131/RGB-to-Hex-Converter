(function () {
  const body = document.querySelector('body')
  const sliders = document.querySelector('#sliders')
  const redRange = document.querySelector('#red-range')
  const greenRange = document.querySelector('#green-range')
  const blueRange = document.querySelector('#blue-range')
  const redValue = document.querySelector('.red-value')
  const greenValue = document.querySelector('.green-value')
  const blueValue = document.querySelector('.blue-value')
  const hexValue = document.querySelector('.hex p')

  sliders.addEventListener('input', event => {
    event.target.nextElementSibling.innerText = event.target.value

    //拿出值後轉成數字+16進位，再放入函式中
    let redHex = transToTwo(Number(redValue.innerText).toString(16))
    let greenHex = transToTwo(Number(greenValue.innerText).toString(16))
    let blueHex = transToTwo(Number(blueValue.innerText).toString(16))

    //將值傳入hexValue，並改變背景色
    hexValue.innerText = `#${redHex}${greenHex}${blueHex}`
    body.style.backgroundColor = hexValue.innerText
  })

  //補到2位數，傳入的num須為字串
  function transToTwo(num) {
    if (num.length < 2) {
      num = '0' + num
    }
    return num
  }


})()