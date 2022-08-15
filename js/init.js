const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const autitos_url = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

const getJSONData = async (url) => {
  const result = {};
  try {
      const response = await fetch(url); //hace una petición a la url.
      if (response.ok) { //si está todo bien, sigue.
          result.data = await response.json(); /*espera hasta que devuelve una promesa y 
          toda la imformación que tenga el json (titulo e imagen).*/
          result.status = "ok"; //asigna el stauts de result en "ok".
      } else { //sino tira error.
          throw Error(response.statusText);
      }
  } 
  catch (error) { //si hay un error
      result.status = 'error'; //asigna el status de result en "error".
      result.data = error; //le asigna error a "data".
  }
  return result;
}