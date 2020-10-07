let category={};
let relatedProducts={}
let relatedNames={}

var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-1 col-3 p-2">
            <div class="d-block mb-1 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
            
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

 
function showRelatedProducts(array){

    let relacionado = "";
    for(let i = 0; i < array.length; i++){
       
        let imagen = array[i];
        let foto = `<div class="col-lg-3 col-md-4 col-6">
                      <div class="d-block mb-4 h-100">
                       <img class="img-fluid img-thumbnail" src="` + imagen + `" alt="">
                      </div>
                   </div> `;
        relacionado=relacionado+foto
    }
    document.getElementById("related").innerHTML=relacionado;
}

function showRelatedNames(array){

    let nombre = "";
    for(let i = 0; i < array.length; i++){
       
        let auto = array[i];
        let titulo = `<div class="col-lg-3 col-md-4 col-6">
                      <div class="d-block mb-4 h-100">
                      <h5>`+ auto +`</h5>
                      </div>
                   </div> `;
        nombre=nombre+titulo
    }
    document.getElementById("nombresRelacionados").innerHTML=nombre;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    let idAutosRelacionados;
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            idAutosRelacionados=product.relatedProducts;
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCriteriaHTML = document.getElementById("productCriteria");

        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + ' ' + product.cost;
            productCriteriaHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
            
        }
    });

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            let productos = resultObj.data;
            let imagenes=[];
            for(let i=0;i<idAutosRelacionados.length;i++)   
            {
                let id=idAutosRelacionados[i];
                let product=productos[id]
                imagenes.push(product.imgSrc)
            }
            showRelatedProducts(imagenes);
            
        }
    });

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            let productos = resultObj.data;
            let nombres=[];
            for(let i=0;i<idAutosRelacionados.length;i++)   
            {
                let id=idAutosRelacionados[i];
                let product=productos[id]
                nombres.push(product.name)
            }
            showRelatedNames(nombres);
            
        }
    });
});
