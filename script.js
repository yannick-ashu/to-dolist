let addtoButton = document.getElementById('btn');
let display = document.getElementById('disp');
let input = document.getElementById('input-field');
let edit = document.getElementById('editButton')

console.log(addtoButton, display, input );

addtoButton.addEventListener('click', function(e){
    e.preventDefault();
   display.innerHTML += `<div> ${input.value} <button id="editButton">Edit</button><button id="deleteButton">Delete</button></div>`;
   input.value = "";
   edit.addEventListener('doubleclick', function()
   {

   })
});
// document.querySelector('#btn').onclick = function(){
//     if( document.querySelector('#input-field').value.length == 0 ){
//         alert('enter a task');
//     }

// }
