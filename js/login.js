/* function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
} */

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
            'Genial',
            'Iniciado con éxito',
            'success'
        )
        setTimeout(function(evt) {window.location="index.html"}, 500);
    }
})
