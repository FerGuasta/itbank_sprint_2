let listaPersonas = [];
let listaMontos = [];

const contribuciones = document.getElementById("contribuciones");
const total = document.getElementById("total");
const cadaUno = document.getElementById("cada-uno");

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
    total.innerHTML = "<h6>Total</h6>" + "<p>$" + sum + "</p>"
    cadaUno.innerHTML = "<h6>Cada Uno</h6>" + "<p>$" + cada_uno + "</p>"
}

function añadirContribucion(){
    let persona = document.getElementById("persona").value;
    let monto = document.getElementById("monto").value;

    listaPersonas.push(persona);
    listaMontos.push(monto);

    mostrarContribucion(persona, monto);
    mostrarResumen();
}