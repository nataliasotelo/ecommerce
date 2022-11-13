const name_prod = document.getElementById("name_prod");
const precio_prod = document.getElementById("precio_prod");
const desc_prod = document.getElementById("desc_prod");
const cat_prod = document.getElementById("cat_prod");
const cant_vend = document.getElementById("cant_vend");
let products = [];
var newCompra = new Object();
let datados = new Array();


document.addEventListener("DOMContentLoaded", function (e) {    
    // getJSONData(entrega5_cart).then(function (resultados) {
    //     if (resultados.status === "ok") {
    //         datados.push(resultados.data.articles)
    //         localStorage.setItem("carrito", JSON.stringify(datados))
    //     }
    //   })
    // getJSONData(entrega5_cart).then(function (resultObj) {
    //     if (resultObj.status === "ok") {
    //       productos = resultObj.data.articles;
    //       localStorage.setItem("carrito", JSON.stringify(productos))
    //     }
    //   })
    getJSONData(ampliar_producto).then(function (resultObj) {
        name_prod.innerHTML = resultObj.data.name;
        precio_prod.innerHTML = resultObj.data.cost +` `+ resultObj.data.currency;
        desc_prod.innerHTML = resultObj.data.description;
        cat_prod.innerHTML = resultObj.data.category;
        cant_vend.innerHTML = resultObj.data.soldCount;
        if (resultObj.status === "ok") {
            imagenes = resultObj.data.images;
            showProductIm(imagenes);
        
            let productosRelacionados = resultObj.data.relatedProducts;
            //esta va a mostrar abajo los productos relacionados
            showProductRelacionado(productosRelacionados);
        }
        let buyProduct = document.getElementById("buyProduct")
        buyProduct.addEventListener("click", function(e){
            //Imaginate que el usuario añadió a favorito estos coches                        
            //Miramos si ya hemos guardado algo anteriormente.
            let recoveredData = localStorage.getItem("carrito")
            console.log(recoveredData)

            if(recoveredData === null){
                // let productos = [];
                newCompra.id = resultObj.data.id
                newCompra.name = resultObj.data.name
                newCompra.count = 1
                newCompra.unitCost = resultObj.data.cost
                newCompra.currency = resultObj.data.currency
                newCompra.image = resultObj.data.images[0];
                //No tenemos nada guardado, por lo cual vamos a guardar el carListFav
                datados.push(newCompra);
                localStorage.setItem("carrito", JSON.stringify(datados))
            } else {
                //Tenemos algo, por lo cual vamos a añadir un nuevo coche
            datados = JSON.parse(recoveredData)
            console.log(datados)
            // let newProduct = resultObj.data
            newCompra.id = resultObj.data.id
            newCompra.name = resultObj.data.name
            newCompra.count = 1
            newCompra.unitCost = resultObj.data.cost
            newCompra.currency = resultObj.data.currency
            newCompra.image = resultObj.data.images[0];
            //Asegurate que lo que guardes es realmente un array.
            datados.push(newCompra)
            localStorage.setItem("carrito", JSON.stringify(datados))
            }
            // products.push(resultObj.data)
            // console.log(products)
            // localStorage.setItem("carrito", JSON.stringify(products))
        })
    });
    
    getJSONData(comments_x_producto).then(function(resultObj){
        if (resultObj.status === "ok"){
            comentarios = resultObj.data

            showComments(comentarios);
        }
    })

}
)


// function cargarAutitoUser(arreglo){
//          datados.push(resultObj.data.articles)
//           console.log(datados)
// }


function showProductIm(array){
    for (let i = 0; i < array.length; i++){
        let fotito = array[i]
        if (i === 0){
            document.getElementById("im").innerHTML += `
            <div class="carousel-item active">
                <img src="${fotito}" class="d-block w-100">
            </div>
          `
        }
        else {
            document.getElementById("im").innerHTML += `
            <div class="carousel-item">
                <img src="${fotito}" class="d-block w-100">
            </div>
          ` 
        }
        
    }
}


function showComments(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let come = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <p> <b>${come.user} </b> - ${come.dateTime} 
                            `
                            for (let j = 0; j < 5; j++){
                                if (j <= come.score - 1)
                                    htmlContentToAppend += `<span class="fa fa-star checked"></span>`
                                else 
                                    htmlContentToAppend+= `<span class="fa fa-star"></span>`
                            }

                          htmlContentToAppend+= `</p> 
                        <p> ${come.description} </p> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;    }
    }
    

function showProductRelacionado(productosRelacionados){
    let htmlContentToAppend = "";

    for(let i = 0; i < productosRelacionados.length; i++){ 
        let rel = productosRelacionados[i];
        htmlContentToAppend += `
    
            <div class="card" style="width: 200px; margin-right: 20px;">
                <div class="card card-custom bg-white border-white border-0 cursor-active" onclick="enviarID(${rel.id})" >
                    <img class="card-img-top img-fluid" src="${rel.image}" alt="Card Columns" style="width: 200px;" >
                    <div class="card-body">
                    <h3 class="card-title">${rel.name}</h3>
                    </div>
                    
                </div>
            </div>
        `
        document.getElementById("relacionados").innerHTML = htmlContentToAppend;    }
    }


    