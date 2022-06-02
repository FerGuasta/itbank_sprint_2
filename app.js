let listaPersonas = [];
let listaMontos = [];

const contribuciones = document.getElementById("contribuciones");
const resumen = document.getElementById("resumen");

function mostrarContribucion(persona, monto){
    let p = document.createElement('p');
    p.textContent = persona + ": $" + monto;
    contribuciones.appendChild(p);
}

function mostrarResumen(){
    let sum = 0;
    
    for (let i = 0; i < listaMontos.length; i++) {
        sum += parseInt(listaMontos[i]);
    }
    
    let cada_uno = sum / (listaMontos.length);
    resumen.innerHTML = "<p> Total: $" + sum + "</p>" + "<p> Cada uno: $" + cada_uno + "</p>"
}

function añadirContribucion(){
    let persona = document.getElementById("persona").value;
    let monto = document.getElementById("monto").value;

    listaPersonas.push(persona);
    listaMontos.push(monto);

    mostrarContribucion(persona, monto);
    mostrarResumen();
}