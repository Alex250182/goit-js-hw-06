function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector('.color')
const changeBtn = document.querySelector('.change-color')
const body = document.querySelector('body')

changeBtn.addEventListener('click', ()=> {
  
  let colorValue = getRandomHexColor()
  color.textContent = colorValue
  body.style.backgroundColor = colorValue
} )