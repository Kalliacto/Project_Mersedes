const form = document.querySelector('.form-test-drive');


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    let data = {};

    for(let {name, value} of form.elements) {
        // Проверка есть у елемента атрибут name или нету чтобы отсечь кнопку
        if (name) {
            data[name] = value;
            }
        }
        
    fetch('https://jsonplaceholder.typicode.com/posts').then
})