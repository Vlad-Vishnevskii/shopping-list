'use strict';
(function () {

  const todoWrapper = document.querySelector('.todo-input');
  const form = todoWrapper.querySelector('form');
  const todoInputField = document.querySelector('.todo-input__field_input');
  const todoInput = todoInputField.querySelector('input');
  const itemTemplate = document.querySelector('#item')
  .content
  .querySelector('.todo-list__item');
  const todoList = document.querySelector('.todo-list');
  const fieldSelect = document.querySelector('.todo-input__field_select');
  const select = fieldSelect.querySelector('select');

  console.log(select)

  const addItem = function () {
    const item = itemTemplate.cloneNode(true);
    if (todoInput.value != '') {
      item.textContent = todoInput.value;

      const fragment = document.createDocumentFragment();
      fragment.appendChild(item);    
      todoList.appendChild(fragment);
    }  

    // if () {

    // }

    var value = select.value;
    console.log(value);

    
    
  
    
  }

  const onFormSubmit = function (evt) {
    evt.preventDefault();
    addItem();    
    form.reset();
  }
  
  form.addEventListener('submit', onFormSubmit);
  

})();
