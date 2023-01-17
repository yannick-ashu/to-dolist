let addtoButton = document.getElementById('btn');
let display = document.getElementById('disp');
let input = document.getElementById('input-field');
let deletes = document.querySelector('#deleteButton');
let theme = document.getElementById('theme')
let body = document.getElementById('this-is-my-body')
// let storedvalue = document.querySelector('.paragraph');
let task = document.querySelector('.inputs');

addtoButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value !== "") {

   
    const container = document.createElement('div');
    const content = document.createElement('input');
    const buttons = document.createElement('button');
    // const btns = document.createElement('button');


    //append new elements 

    display.appendChild(container);
    container.appendChild(content);
    container.appendChild(buttons);


    // adding classes

    content.classList.add('inputs');
    buttons.classList.add('btns');
    container.classList.add('mainDIv');

    // adding content

    buttons.innerText = 'Delete';
    content.value = input.value;
    
    // delete function


    input.value = "";



    buttons.addEventListener('click', () => {
      display.removeChild(container);

// function savedTasks();

    })
     content.value = localStorage.getItem('tasks');
  }
  
  else {
    alert("make sure the field is not empty to continue")
  }
  // var savedTasks = localStorage.setItem('tasks',content.value);


})


//   task.addEventListener('change', ()=>{
//     var storedValue = localStorage.setItem('task', content.value) || "";

//   })

  
// })
// theme.addEventListener('click', () => {
//   //alert('all good boy');

// })

