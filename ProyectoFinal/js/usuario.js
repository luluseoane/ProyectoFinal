function submitLogin(){
    var usuario = document.getElementById("inputUsuario").value;
    localStorage.setItem('nombre', usuario);
    document.getElementById("nombreUsuario").innerHTML = usuario;
}