
let inputField = document.getElementById("input-field")
let todo = document.getElementById("to-doContainer")
let button = document.getElementById('btn')
button.addEventListener('click', function(){
let paragraph = document.createElement('p');
todo.appendChild("paragraph");
paragraph.innerText = inputField.value;

})