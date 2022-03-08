//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function getRandomColor() {
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualqueir función debe poder acceder.
    let numColores = colors.length
    let indiceRandom = Math.floor(Math.random() * numColores)

    return colors[indiceRandom]
}
let numColores = colors.length;
let botonMagico = document.querySelector(".btn");
let fondo = document.querySelector("body");
let colorFondo;

botonMagico.addEventListener("click", function () {
    fondo.style.backgroundColor = getRandomColor();

})
//quiero iterar por el array cada vez que clicko y que me cambie el fondo al color que le toca al array.

