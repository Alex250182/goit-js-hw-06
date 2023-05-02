// Создай переменную counterValue в которой будет
// храниться текущее значение счетчика и инициализируй
//  её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых
// увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной
// counterValue

const buttonMinus = document.querySelector('button[data-action="decrement"]')
const counterValue = document.querySelector('#value')
const buttonPlus = document.querySelector('button[data-action="increment"]')

let countValue = 0

buttonMinus.addEventListener('click',() => {
    countValue = countValue - 1
    counterValue.textContent = countValue
})
buttonPlus.addEventListener('click', () => {
   countValue = countValue + 1
    counterValue.textContent = countValue    
})