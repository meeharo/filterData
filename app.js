var btnList = document.querySelectorAll('button')
var foodElement = document.querySelectorAll('.food-item')
var foodList = document.querySelector('.food-list')

//init data
var array = []
foodElement.forEach(item => {
    array.push({
        src: item.querySelector('img').src ,
        type: item.getAttribute('type'),
    })
})

// filter
btnList.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let typeBtn = e.currentTarget.getAttribute('type')
        let filterData = array.filter(food => {
            return food.type == typeBtn
        })
        renderHTML(filterData)
    })
})

// render HTML
function renderHTML(list) {
    foodList.innerHTML = ''

    list.forEach(item => {
        var foodItem = document.createElement('div')
        foodItem.classList.add('food-item')
        foodItem.setAttribute('type', item.type)
        foodItem.innerHTML = `<img src="${item.src}" alt="${item.type}">`
        foodList.appendChild(foodItem)
        console.log(foodItem)
    })
}