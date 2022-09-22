const name_prod = document.getElementById("name_prod");
const precio_prod = document.getElementById("precio_prod");
const desc_prod = document.getElementById("desc_prod");
const cat_prod = document.getElementById("cat_prod");
const cant_vend = document.getElementById("cant_vend");

document.addEventListener("DOMContentLoaded", function (e) {    
    getJSONData(ampliar_producto).then(function (resultObj) {
        name_prod.innerHTML = resultObj.data.name;
        precio_prod.innerHTML = resultObj.data.cost +` `+ resultObj.data.currency;
        desc_prod.innerHTML = resultObj.data.description;
        cat_prod.innerHTML = resultObj.data.category;
        cant_vend.innerHTML = resultObj.data.soldCount;
        if (resultObj.status === "ok") {
        
            //productosRelacionados = resultObj.data.relatedProducts;
            imagenes = resultObj.data.images;
            // console.log(imagenes)
            showProductIm(imagenes);

            //esta va a mostrar abajo los productos relacionados
            // showProductRelacionado(productosRelacionados);
        }
    });
    
    getJSONData(comments_x_producto).then(function(resultObj){
        if (resultObj.status === "ok"){
            comentarios = resultObj.data

            showComments(comentarios);
        }
    })

}
)
function showProductIm(array){
    for (let i = 0; i < array.length; i++){
        let fotito = array[i]
        document.getElementById("im").innerHTML += `<li><a data-target="#pic" data-toggle="tab"><img src="${fotito}" style="width: 20.25rem; display: flex;" alt="product image" class="img-thumbnail"></a></li> `
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
    
}