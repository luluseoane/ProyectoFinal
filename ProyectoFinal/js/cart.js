var row5 = 0;
var total = 0;
var valorunitario = 0;

function showCartItems(cartArray){

    let htmlContentToAppend = "";

    for(let i = 0; i < cartArray.length; i++){

        let articles = cartArray[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-1 col-3 p-2">
            <div class="d-block mb-1 h-70">
                <img class="img-fluid img-thumbnail" src="` + articles.src + `" alt="">
            </div>
          
        </div>
        `

        document.getElementById("row1").innerHTML = htmlContentToAppend;
    }
}

function showCartName(cartArray){

    let htmlContentToAppend = "";

    for(let i = 0; i < cartArray.length; i++){

        let articles = cartArray[i];

        htmlContentToAppend += `
        <div class="col"> ` + articles.name + `</div>
        `

        document.getElementById("row2").innerHTML = htmlContentToAppend;
    }
}
function showCartPrice(cartArray){

    let htmlContentToAppend = "";

    for(let i = 0; i < cartArray.length; i++){

        let articles = cartArray[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-1 col-3 p-2">` + articles.currency + + articles.unitCost + `</div>
        `

        document.getElementById("row3").innerHTML = htmlContentToAppend;
        //document.getElementById("quantity").addEventListener("keyup", price);
    }

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            showCartItems(resultObj.data.articles);
            showCartName(resultObj.data.articles);
            showCartPrice(resultObj.data.articles);
            valorunitario=resultObj.data.articles[0].unitCost;
            document.getElementById("row5").innerHTML=valorunitario;
        }

        
        document.getElementById("quantity").addEventListener("click", function(e){
            row5 = document.getElementById("row5");
            total = document.getElementById("quantity").value*Number(valorunitario);
            row5.innerHTML = total;
            console.log(valorunitario);
        })

    });

   
});