//let valor = 0;
let subtotal = document.getElementById("subtot_id");
let costoEnvio = document.getElementById("costViaje_id");
let total = document.getElementById("total_id");
let productos = [];
let porcentaje = 15;
let cant = 0;
const currency = 'USD';

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("carrito")){
    productos = JSON.parse(localStorage.getItem("carrito"))
    // console.log(productos)

  }
  else{
    getJSONData(entrega5_cart).then(function (resultObj) {
      if (resultObj.status === "ok") {
        productos = resultObj.data.articles;
        localStorage.setItem("carrito", JSON.stringify(productos))
      }
    })
  }
  let productosComprados = JSON.parse(localStorage.getItem("carrito"))
  // console.log(productosComprados)
  showProductoComprado(productosComprados)
})



function showProductoComprado(arreglo) {
  let htmlContentToAppend = "";
  if (arreglo.length === 0)
  document.getElementById("productoComprado").innerHTML = htmlContentToAppend;
  for (let i = 0; i < arreglo.length; i++) {
    let produComprado = arreglo[i];
    cant = produComprado.unitCost + cant;
    
    htmlContentToAppend += `
        <tr>
        <th scope="row"><img id="fotoVentas" src="${produComprado.image}"></th>
        <td>${produComprado.name}</td>
        <td>${produComprado.currency} ${produComprado.unitCost}</td>
        <td><button type="button" id="restar" onclick="btnRestar(${produComprado.id}, ${produComprado.unitCost}, ${cant})" class="btn btn-light">-</button> <input id="inp-id:${produComprado.id}" value="1" type="number" style="width:30px" min="1"> <button type="button" id="sumar" onclick="btnSumar(${produComprado.id}, ${produComprado.unitCost}, ${cant})" class="btn btn-light">+</button></td>
        <th id="subtotal${produComprado.id}"> ${produComprado.currency}  ${produComprado.unitCost} </th>
        </tr>
        
        `


        // estas tres lineas van en una funcion afuera o despues del for c: 
        document.getElementById("productoComprado").innerHTML = htmlContentToAppend;
        
        
        
        document.getElementById(`inp-id:${produComprado.id}`).addEventListener("keyup", function (e) {
          if (e.target.value)
          document.getElementById(`subtotal${id}`).innerText = produComprado.currency + ' ' + parseInt(e.target.value) * produComprado.unitCost;
          valor = parseInt(e.target.value) * produComprado.unitCost;
          cant = cant + valor;
          subtotal.innerText = produComprado.currency + cant;
          costoEnvio.innerText = produComprado.currency + ' ' + ((cant * porcentaje) / 100);
          total.innerHTML = produComprado.currency + ' ' + (parseInt(cant) + parseInt(((cant * porcentaje) / 100)));
        })
      
       
        // document.getElementById("checkEnvio1").onclick = function (e) {
        //   porcentaje = 15;
        //   valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
        //   subtotal.innerText = produComprado.currency + ' ' + valor;
        
        //   costoEnvio.innerText = produComprado.currency + ' ' + ((valor * porcentaje) / 100);
        //   total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt(((valor * porcentaje) / 100)));
        // }
        
        // document.getElementById("checkEnvio2").onclick = function (e) {
          //   porcentaje = 7;
          //   valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
          //   subtotal.innerText = produComprado.currency + ' ' + valor;
          
          //   costoEnvio.innerText = produComprado.currency + ' ' + ((valor * porcentaje) / 100);
          //   total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt(((valor * porcentaje) / 100)));
          // }
          
          
          // document.getElementById("checkEnvio3").onclick = function (e) {
            //   porcentaje = 5;
            //   valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
            //   subtotal.innerText = produComprado.currency + ' ' + valor;
            
            //   costoEnvio.innerText = produComprado.currency + ' ' + ((valor * porcentaje) / 100);
            //   total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt(((valor * porcentaje) / 100)));
            // }
          }
          
          subtotal.innerText = currency + ' ' + cant;
          costoEnvio.innerText = currency + ' ' + ((cant * porcentaje) / 100);
          total.innerHTML = currency + (parseInt(cant) + parseInt(((cant * porcentaje) / 100)));
}
        
function btnRestar(id, precio, cant){
  if (document.getElementById(`inp-id:${id}`).value > 1) {
    document.getElementById(`inp-id:${id}`).value -= 1;
    document.getElementById(`subtotal${id}`).innerText =currency + ' ' + parseInt(document.getElementById(`inp-id:${id}`).value) * precio;
    valor = parseInt(document.getElementById(`inp-id:${id}`).value) * precio;
    cant = valor + cant;
    subtotal.innerText = currency + ' ' + cant;
    costoEnvio.innerText = currency + ' ' + ((cant * porcentaje) / 100);
    total.innerHTML = currency + ' ' + (parseInt(cant) + parseInt(((cant * porcentaje) / 100)));
}

}

function btnSumar(id, precio, cant){
  document.getElementById(`inp-id:${id}`).value = 1 + parseInt(document.getElementById(`inp-id:${id}`).value);
  document.getElementById(`subtotal${id}`).innerText = currency + ' ' + parseInt(document.getElementById(`inp-id:${id}`).value) * precio;

  valor = parseInt(document.getElementById(`inp-id:${id}`).value) * precio;
  cant = valor + cant;
  subtotal.innerText = currency + ' ' + cant;
  costoEnvio.innerText = currency + ' ' + ((cant * porcentaje) / 100);
  total.innerHTML = currency + ' ' + (parseInt(cant) + parseInt(((cant * porcentaje) / 100)));
}

function envioPremium(){
  porcentaje = 15;
  valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
  subtotal.innerText = produComprado.currency + ' ' + valor;

  costoEnvio.innerText = produComprado.currency + ' ' + ((valor * porcentaje) / 100);
  total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt(((valor * porcentaje) / 100)));
}


function envioExpress(){
  porcentaje = 7;
  valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
  subtotal.innerText = produComprado.currency + ' ' + valor;

  costoEnvio.innerText = produComprado.currency + ' ' + ((valor * porcentaje) / 100);
  total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt(((valor * porcentaje) / 100)));
}

function envioStandard(){
  porcentaje = 5;
  valor = parseInt(document.getElementById("inp").value) * produComprado.unitCost;
  subtotal.innerText = produComprado.currency + ' ' + valor;
  
  costoEnvio.innerText = produComprado.currency + ' ' + ((valor * porcentaje) / 100);
  total.innerHTML = produComprado.currency + ' ' + (parseInt(valor) + parseInt(((valor * porcentaje) / 100)));
}


document.getElementById("cerrarModal").addEventListener("click", function(){
  let numEnvio = document.getElementById("numEnvio").value;
  let vencimientoTar = document.getElementById("vencimientoTar").value;
  let numCuenta = document.getElementById("numCuenta").value;
  let codEnvio = document.getElementById("codEnvio").value;
  if ((numEnvio.length === 16 && codEnvio.length === 3 && vencimientoTar.length > 0) ||  (numCuenta.length === 20)){
    document.getElementById("seleccionarModal").classList.remove("text-danger")

  }
})

let form = document.getElementById('formCart')
form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    validarFormulario()
    document.getElementById("seleccionarModal").classList.add("text-danger")
  }
  
  // console.log("entro")
  form.classList.add('was-validated')
})


function validarFormulario() {
  let dirEnvio = document.getElementById("dirEnvio").value;
  let numEnvio = document.getElementById("numEnvio").value;
  let vencimientoTar = document.getElementById("vencimientoTar").value;
  let numCuenta = document.getElementById("numCuenta").value;
  let codEnvio = document.getElementById("codEnvio").value;
  let puertaEnvio = document.getElementById("puertaEnvio").value;
  let esqEnvio = document.getElementById("esqEnvio").value;
 
  if (dirEnvio.length > 0 && esqEnvio.length > 0 && puertaEnvio.length > 0){
    if (numEnvio.length === 16 && codEnvio.length === 3 && vencimientoTar.length > 0){
      comprar()
    }
    else if (numCuenta.length === 20){
      comprar()
    }
  }


}

document.getElementById("tarjetaDeCredito").addEventListener("click", function(){
  document.getElementById("numCuenta").setAttribute("disabled", "true")
  document.getElementById("numEnvio").removeAttribute("disabled")
  document.getElementById("codEnvio").removeAttribute("disabled")
  document.getElementById("vencimientoTar").removeAttribute("disabled")
})
document.getElementById("checkEnvioBanco").addEventListener("click", function(){
  document.getElementById("numCuenta").removeAttribute("disabled")
  document.getElementById("numEnvio").setAttribute("disabled", "true")
  document.getElementById("codEnvio").setAttribute("disabled", "true")
  document.getElementById("vencimientoTar").setAttribute("disabled", "true")
})


function comprar(){
  const array = [];
  localStorage.setItem("carrito", JSON.stringify(array))
  showProductoComprado(array)
  localStorage.setItem("buy", true);
  document.getElementById("alertaPago").classList.add("show")
  setTimeout(function(){
    document.getElementById("alertaPago").classList.remove("show")
  }, 3000)
}

