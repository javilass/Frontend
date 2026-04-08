function saludar() { /*function es una palabra reservada para añadir un evento*/
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") { /* === significa "exactamente igual" en js */
        document.getElementById("mensaje").innerText = "Hola profesor" /*si no ingreso texto, va a saludar al profe*/
    } else {
        document.getElementById("mensaje").innerText = "Hola " + nombre; /*innertext es para modificar el texto*/
    }
}

function cambiarColor() {
    let caja = document.getElementById("caja"); /*elijo la variable caja, llamandola por el id "caja" */
    caja.style.backgroundColor = "red"; /* metodo .style aplica sobre la variable el cambio css "backgroundColor" al gatillar el evento 
    onclick de mi HTML -> al onclick aplica el cambio de color*/
}

function colorAleatorio(){
    let colores = ["red", "blue", "green", "yellow", "pink", "cyan", "purple", "gray", "salmon", "violet", "lightblue", "lightgreen"];
    let numero = Math.floor(Math.random()* colores.length) /* math.floor redondea hacia abajo - math.random genera decimales al azar*/
    document.getElementById("caja").style.backgroundColor = colores[numero]; 
}

function mostrarHora() {
    let ahora = new Date();
    document.getElementById("hora").innerText = ahora.toLocaleTimeString(); /*muestra la hora en formato "normal"*/
}

function ocultarCaja(){
    /*no usamos el let, porque no estamos modificando, solo obteniendo el elemento por ID*/
    document.getElementById("caja").style.display = "none";
}

function mostrarCaja(){
    /*no usamos el let, porque no estamos modificando, solo obteniendo el elemento por ID*/
    document.getElementById("caja").style.display = "block";
}

/* Imprimir por consola dentro del navegador -> FLAG: te muestra información de las funciones, como que las transparenta*/

let edad =18;
if(edad >= 18){
    console.log("Puede ingresar");
}else{
    console.log("No puede ingresar");
}




