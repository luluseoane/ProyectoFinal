var loggedin = sessionStorage.getItem("logged");

 function check(form)
{
    if (form.userid.value.length > 0 && form.password.value.length > 0)
    {sessionStorage.setItem("logged","1"); location.href = "index.html";}
    else {alert("Introduzca usuario y contraseña")}
    ingreso();
}


function ingreso(){

    var usuario = document.getElementById("inputUsuario").value;
    sessionStorage.setItem("perfil", usuario);
}

function cerrar(){

    sessionStorage.clear()
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});