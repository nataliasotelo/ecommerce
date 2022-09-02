//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showProductsList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src=" ${category.image} " alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4> ${category.name} - ${category.currency} ${category.cost} </h4> 
                        <p> ${category.description} </p> 
                        </div>
                        <small class="text-muted"> ${category.soldCount} vendidos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;    }
}


document.addEventListener("DOMContentLoaded", function (e) {    
        getJSONData(catproduct_url).then(function (resultObj) {
            document.getElementById("a").innerHTML = "Verás aquí todos los productos de la categoría " + resultObj.data.catName;
            if (resultObj.status === "ok") {
              productsArray = resultObj.data.products;
        
              showProductsList(productsArray);
            }
        });
});

