// DOM Elements
const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-text');
const todosUL = document.getElementById('todos');


// Click plus button to add todo
addBtn.addEventListener('click', () => {
    let inputText = input.value;

    // create list element
    const listEL = document.createElement('li');
    listEL.classList.add('todo');
    
    // create checkbox element
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('check-box');
    
    // create todo text
    const todo = document.createElement('p');
    todo.textContent = inputText;

    // create star element
    const star = document.createElement('img');
    star.src = '/Todo-App/images/star-regular.svg'

    star.addEventListener('click', () => {
        star.classList.toggle('completed')
    })

    // create delete button element 
    const btnEl = document.createElement('img');
    btnEl.src = '/Todo-App/images/trash-alt-solid.svg';
    btnEl.classList.add('del-btn-img');
    btnEl.addEventListener('click', () => {
        listEL.remove()
    })

    todosUL.appendChild(listEL);

    // create div element
    const leftDiv = document.createElement('div')
    leftDiv.appendChild(checkBox); // add checkbox to div
    leftDiv.appendChild(todo); // add todo to div
    leftDiv.classList.add('span')

    // create div element for the right side
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('star--trash');
    rightDiv.appendChild(star);
    rightDiv.appendChild(btnEl)


    listEL.appendChild(leftDiv); // add the left side of the list
    listEL.appendChild(rightDiv); // add to the right of the div

    input.value = '';
});

