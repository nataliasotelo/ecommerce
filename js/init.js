const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const catproduct_url = `https://japceibal.github.io/emercado-api/cats_products/`+localStorage.getItem("catID")+`.json`
const ampliar_producto = `https://japceibal.github.io/emercado-api/products/`+ localStorage.getItem("id_producto") +`.json`
const comments_x_producto = `https://japceibal.github.io/emercado-api/products_comments/` + localStorage.getItem("id_producto") +`.json`
const entrega5_cart = "https://japceibal.github.io/emercado-api/user_cart/25801.json"

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

const getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      hideSpinner();
      return result;
    });
};

document.addEventListener("DOMContentLoaded", function(){
  const nombre = document.getElementById("perfil")
  nombre.innerHTML = localStorage.getItem("user")

   if(!localStorage.getItem("user")) window.location = "login.html"
});


//guardo en el localStorage el id del producto que quiero amplificar y lo env??o 
function enviarID(id){
  localStorage.setItem("id_producto", id);
  window.location = "product-info.html"
  // localStorage.setItem("buy", false);
}


document.getElementById("cerrarsesion").addEventListener("click", function(){
  localStorage.clear()
})


