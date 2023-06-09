// Напиши скрипт который:

//     Посчитает и выведет в консоль количество категорий в
//      ul#categories, то есть элементов li.item.
//     Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов
// в категории(всех вложенных в него < li >).

// Для выполнения этой задачи нужно использовать метод
// forEach() и свойства навигации по DOM


const categoriesLIst = document.querySelectorAll('.item')
console.log(`Number of categories:${categoriesLIst.length}`)

categoriesLIst.forEach(item => {
    console.log(`Category:${item.firstElementChild.textContent}`)
    console.log(`Elements:${item.lastElementChild.children.length}`)   
})