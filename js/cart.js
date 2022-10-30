//let valor = 0;
let subtotal = document.getElementById("subtot_id");
let costoEnvio = document.getElementById("costViaje_id");
let total = document.getElementById("total_id");

let porcentaje = 15;

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(entrega5_cart).then(function (resultObj) {
        if (resultObj.status === "ok"){
            productos = resultObj.data.articles;
            showProductoComprado(productos)
        }
    })
})



function showProductoComprado(arreglo){
    let htmlContentToAppend = "";
    for (let i = 0; i < arreglo.length; i++){
        let produComprado = arreglo[i];
        htmlContentToAppend += `
        
        <tr>
        <th scope="row"><img id="fotoVentas" src="${produComprado.image}"></th>
        <td>${produComprado.name}</td>
        <td>${produComprado.currency} ${produComprado.unitCost}</td>
        <td><button type="button" id="restar" class="btn btn-light">-</button> <input id="inp" value="1" type="number" style="width:30px" min="1"> <button type="button" id="sumar" class="btn btn-light">+</button></td>
        <th id="subtotal"> ${produComprado.currency}  ${produComprado.unitCost} </th>
        </tr>
        
        `
        subtotal.innerText = produComprado.currency + ' ' + produComprado.unitCost;
        costoEnvio.innerText = produComprado.currency  + ' ' + (( produComprado.unitCost * porcentaje) / 100);
        total.innerHTML = produComprado.currency + (parseInt(produComprado.unitCost) + parseInt((( produComprado.unitCost * porcentaje) / 100)));
        
        document.getElementById("productoComprado").innerHTML  = htmlContentToAppend;


        // para actualizar el valor con el input
        document.getElementById("inp").addEventListener("keyup", function(e){
            if (e.target.value) 
            document.getElementById("subtotal").innerText = produComprado.currency + ' ' + parseInt(e.target.value) * produComprado.unitCost;
            valor = parseInt(e.target.value) * produComprado.unitCost;
            // showCostEnvio(valor, produComprado.currency);
            subtotal.innerText = produComprado.currency + valor;
            costoEnvio.innerText = produComprado.currency  + ' ' + (( valor * porcentaje) / 100);
            total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt((( valor * porcentaje) / 100)));
            
        })

        // para restar con el boton
        document.getElementById("restar").onclick = function(e){
            if(document.getElementById("inp").value > 0){
                document.getElementById("inp").value -= 1;
                document.getElementById("subtotal").innerText = produComprado.currency + ' ' + parseInt(document.getElementById("inp").value) * produComprado.unitCost;
                valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
                subtotal.innerText = produComprado.currency + ' ' + valor;
                // showCostEnvio(valor, produComprado.currency);
                costoEnvio.innerText = produComprado.currency  + ' ' + (( valor * porcentaje) / 100);
                total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt((( valor * porcentaje) / 100)));
            }
            
        }

        // para sumar con el boton
        document.getElementById("sumar").onclick = function(e){
            document.getElementById("inp").value = 1 + parseInt(document.getElementById("inp").value);
            document.getElementById("subtotal").innerText = produComprado.currency + ' ' + parseInt(document.getElementById("inp").value) * produComprado.unitCost;

            valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
            subtotal.innerText = produComprado.currency + ' ' + valor;
            // showCostEnvio(valor, produComprado.currency);
            costoEnvio.innerText = produComprado.currency  + ' ' + (( valor * porcentaje) / 100);
            total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt((( valor * porcentaje) / 100)));
        }
        
        // actualiza en tiempo real el porcentaje si lo cambio a 15%
        document.getElementById("checkEnvio1").onclick = function(e){
            porcentaje = 15;
            valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
            subtotal.innerText = produComprado.currency + ' ' + valor;
            // showCostEnvio(valor, produComprado.currency);
            costoEnvio.innerText = produComprado.currency  + ' ' + (( valor * porcentaje) / 100);
            total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt((( valor * porcentaje) / 100)));
        }
        // actualiza en tiempo real el porcentaje si lo cambio a 7%
        document.getElementById("checkEnvio2").onclick = function(e){
            porcentaje = 7;
            valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
            subtotal.innerText = produComprado.currency + ' ' + valor;
            // showCostEnvio(valor, produComprado.currency);
            costoEnvio.innerText = produComprado.currency  + ' ' + (( valor * porcentaje) / 100);
            total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt((( valor * porcentaje) / 100)));
        }

        // actualiza en tiempo real el porcentaje si lo cambio a 5%
        document.getElementById("checkEnvio3").onclick = function(e){
            porcentaje = 5;
            valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
            subtotal.innerText = produComprado.currency + ' ' + valor;
            // showCostEnvio(valor, produComprado.currency);
            costoEnvio.innerText = produComprado.currency  + ' ' + (( valor * porcentaje) / 100);
            total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt((( valor * porcentaje) / 100)));
        }

    }
}


// function showCostEnvio(valor, currency){
//     if(document.getElementById("checkEnvio1").checked) {
//        porcentaje = 15;
//     } else if (document.getElementById("checkEnvio2").checked)
//     porcentaje = 7;
//     else porcentaje = 5;
//     // document.getElementById("checkEnvio1").onclick = function(e){ 
//     //      porcentaje = 15;
//     // }
//     // document.getElementById("checkEnvio2").onclick = function(e){
//     //     porcentaje = 7;
//     // }
//     // document.getElementById("checkEnvio3").onclick = function(e){
//     //     porcentaje = 5;
//     // }
// }



function validarFormulario() {
    iguales = 1;
      let  forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })  
     
      // let nombre = document.getElementById('nombre').value;
      // let apellido = document.getElementById('apellido').value;
      // let email = document.getElementById('email').value;
      // let password1 = document.getElementById('password1').value;
      // let password2 = document.getElementById('password2').value;
      // console.log(nombre, apellido, email, password1, password2);
  
      
      let 
    
       if  (document.getElementById("terminos").checked === false) {
        document.getElementById("terminos").classList.add('is-invalid');
        document.getElementById("terminos2").classList.add('is-invalid');    
          return ;
      }
    
         else if (nombre.length == 0 || apellido.length == 0 || email.length == 0 || password1.length < 6 || password2.length < 6  ) {
    
          return;
      }
       else if (password1 !== password2) {
        
         validar()
         document.getElementById('password2').setCustomValidity('Las contraseñas no coinciden');
  
  
      }     
  
    else {
      validado()
          alert("Registro exitoso");     
    } 
  
    
  }
  function validar() { 
    
   
  
      let password1 = document.getElementById('password1').value;
      let password2 = document.getElementById('password2').value;
      if (password1 !== password2) {
        document.getElementById('password2').setCustomValidity('Las contraseñas no coinciden');
        document.getElementById('password2').classList.add('is-invalid');
        document.getElementById('password2').classList.remove('is-valid');
      
  
      }
      else {
        document.getElementById('password2').setCustomValidity('');
  
        document.getElementById('password2').classList.add('is-valid');
        document.getElementById('password2').classList.remove('is-invalid');
      }
    ;
  
  }
    
  
  
  
  
  
  
  function validado() {
    
    document.getElementById("terminos").classList.remove('is-invalid');
    document.getElementById("terminos2").classList.remove('is-invalid');
  
  
    
  }