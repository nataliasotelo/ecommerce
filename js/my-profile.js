let FirstName = document.getElementById("FirstName");
let Name2 = document.getElementById("Name2");
let SecondName = document.getElementById("SecondName");
let SecondNAme2 = document.getElementById("SecondNAme2");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

document.addEventListener("DOMContentLoaded", function(){
    email.value = localStorage.getItem("user")
    email.setAttribute("disabled", "true")
    if (localStorage.getItem("firstName")){
        FirstName.value = localStorage.getItem("firstName")
        SecondName.value = localStorage.getItem("secondName")
        phone.value = localStorage.getItem("phone")
    }
})


document.getElementById("saveChange").addEventListener("click", function(){
    if((FirstName.value.length > 0) && (SecondName.value.length > 0) && (phone.value.length > 0))
    document.getElementById("alertaPago").classList.add("show")

  })

let form = document.getElementById('formProfile')
form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    validarFormulario()
    // document.getElementById("seleccionarModal").classList.add("text-danger")
  }
  console.log("entro") 
  form.classList.add('was-validated')
})


function validarFormulario() {
    let FirstNameval = document.getElementById("FirstName").value;
    let SecondNameval = document.getElementById("SecondName").value;
    let phoneval = document.getElementById("phone").value;
    if((FirstNameval.length > 0) && (SecondNameval.length > 0) && (phoneval.length > 0)){
        document.getElementById("alertaPago").classList.add("show")
        localStorage.setItem("firstName", FirstNameval)
        localStorage.setItem("secondName", SecondNameval)
        localStorage.setItem("phone", phoneval)
    }
}