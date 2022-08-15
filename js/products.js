
//array donde se cargarán los datos recibidos:

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
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
                        <small class="text-muted"> ${category.soldCount} artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;    }
}

/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/

document.addEventListener("DOMContentLoaded", async (e) => {
    const response = await getJSONData(autitos_url); /*crea la constante "response" para guardar
        el json que se consigue con la función getMovies (consigue la "data" del bloque 4).*/
        if (response.status === "ok") { //pregunta el status del json (response), si está "ok", sigue
            showCategoriesList(response.data.products); //va al bloque 3
    
        } else { //si no está "ok", tira error como alert (string invalida).
          alert("OCURRIÓ UN ERROR");
        }
    });