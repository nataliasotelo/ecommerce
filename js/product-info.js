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
            // showProduct(productosRelacionados);
        }
    });

}
)
function showProductIm(array){
   
    // let htmlContentToAppend = "";
        for (let i = 0; i < array.length; i++){
            let fotito = array[i]
            document.getElementById("im").innerHTML += `<li><a data-target="#pic" data-toggle="tab"><img src="${fotito}" style="width: 20.25rem; display: flex;" alt="product image" class="img-thumbnail"></a></li> `
        }
    }


    