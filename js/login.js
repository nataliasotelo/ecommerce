const password = document.getElementById("floatingPassword");

regBtn.addEventListener("click", function(evt){
    evt.preventDefault();
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
        setTimeout(function(evt) {window.location="inicio.html"}, 2500);
    }
})
