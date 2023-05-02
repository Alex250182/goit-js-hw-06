// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.

const volume = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

volume.addEventListener('input', e => {
    spanText.style.fontSize = `${e.target.value}px`
    
})