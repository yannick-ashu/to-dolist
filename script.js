let addtoButton = document.getElementById('btn');
let display = document.getElementById('disp');
let input = document.getElementById('input-field');
let deletes = document.querySelector('#deleteButton');

addtoButton.addEventListener('click', function(e){
    e.preventDefault();
   display.innerHTML += `<div> ${input.value} <button id="editButton">Edit</button><button id="deleteButton">Delete</button></div>`;
   input.value = "";});

   deletes.addEventListener('click', function()
   {
display.removeChild(div);
display.value = "";
   });
   


// let edit = function(){
//     display.value = "";
// }

// console.log(addtoButton, display, input );

// addtoButton.addEventListener('click', function(e){
//     e.preventDefault();
//    display.innerHTML += `<input ${input.value}/> <button id="editButton">Edit</button><button id="deleteButton">Delete</button><br`;
//    input.value = "";
//    edit.addEventListener('doubleclick', function()
//    {

//    //})
// });
// edit.addEventListener('onclick', function(){
// console.log('sucess')    
// } )