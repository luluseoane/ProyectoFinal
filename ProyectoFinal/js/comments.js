var commentsArray = [];

function showCommentsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let comment = array[i];

        htmlContentToAppend += `
        <div class="card mb-2">
            <div class="d-block">
                <div class="card-header align-user w-100">
                <div class="row ml-2">
                <div class="col font-italic m-0 pl-0"> `+comment.user+` </div>
                <div class="calificar col text-right"> Calificación: `+comment.score+`</div>
                </div>
                </div>
                <div class="card-body ">
                    <div>`+comment.description+`</div>
                    <div class="blockquote-footer text-right m-0">`+comment.dateTime+`</div>
            
                </div>
            </div>
        </div>
        `

        document.getElementById("productComments").innerHTML = htmlContentToAppend;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            commentsArray = resultObj.data;
            
            //Muestro las categorías ordenadas
            showCommentsList(commentsArray);
        }
    });
});