 

var form = document.querySelector('form');
var nombre = document.getElementById('nombre');
var contrasena = document.getElementById('contrasena');
var submit = document.getElementById('submit');
var para = document.querySelector('p');
 
form.onsubmit = function(e) {
  if (nombre.value === '' || contrasena.value === '') {
    e.preventDefault();
    para.textContent = 'Completá ambos datos!';
  }else if(((nombre.value.indexOf ('@', 0) == -1))){
    e.preventDefault();
    para.textContent = 'El usuario debe tener @';
  
  }
}