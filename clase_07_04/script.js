function saludar(){ /*funtion es una palabra reservada para añadir un evento*/
    let nombre = document.getElementById("nombre").value;
    document.getElementById("mensaje").innerText = "Hola " + nombre; /*innertext es para modificar el texto*/
}
