document.addEventListener("DOMContentLoaded", function(){
    getJSONData(entrega5_cart).then(function (resultObj) {
        if (resultObj.status === "ok"){
            productos = resultObj.data.articles;
            showCompras(productos)
        }
    
    });
    
   
    
})

function showCompras(arreglo){
    let htmlContentToAppend = "";
    for (let i = 0; i < arreglo.length; i++){
        let compra = arreglo[i];
        htmlContentToAppend += `
    
            <tr>
                <th scope="row"><img id="fotoVentas" src="${compra.image}"></th>
                <td>${compra.name}</td>
                <td>${compra.currency} ${compra.unitCost}</td>
                <td><button type="button" id="restar" class="btn btn-light">-</button> <input id="inp" value="1" type="number" style="width:30px" min="1"> <button type="button" id="sumar" class="btn btn-light">+</button></td >
                <td id="subtotal"> ${compra.currency} ${compra.unitCost} </td>
                </tr>

        `

        document.getElementById("productoComprado").innerHTML  = htmlContentToAppend;
        document.getElementById("inp").addEventListener("keyup", function(e){
            if (e.target.value) 
                document.getElementById("subtotal").innerText = compra.currency + parseInt(e.target.value) * compra.unitCost;
        })
        document.getElementById("restar").onclick = function(e){
            if(document.getElementById("inp").value > 0){
                document.getElementById("inp").value -= 1;
            document.getElementById("subtotal").innerText = compra.currency + parseInt(document.getElementById("inp").value) * compra.unitCost;
            }
            
        }
        
        document.getElementById("sumar").onclick = function(e){
            document.getElementById("inp").value = 1 + parseInt(document.getElementById("inp").value);
            document.getElementById("subtotal").innerText = compra.currency + parseInt(document.getElementById("inp").value) * compra.unitCost;
        }
    }
    
}

