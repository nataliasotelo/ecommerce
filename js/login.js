document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault();
    const password = document.getElementById("floatingPassword");
    const user = document.getElementById("floatingInput");

regBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    if (user.value) localStorage.setItem("user", user.value)
   
    if (password.value.length < 6){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los datos ingresados no cumplen con los requisitos solicitados',
        })
    }
        
    else {
        Swal.fire(
            'Acceso correcto !',
            'Iniciado con éxito',
            'success'
        )
        setTimeout(function(evt) {window.location="index.html"}, 2500);
        
    }
})

})

