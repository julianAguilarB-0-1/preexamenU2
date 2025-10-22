const opciones = document.getElementById("opciones");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

function calcular() {
    const valor = Number(opciones.value);
    let texto="";
    let multi;
    for (let i = 1; i <= 10; i++) {
        multi=valor*i;
        texto += `${valor} x ${i} = ${valor*i}<br>`;
    }
    resultado.innerHTML=texto;
}


function limpiar() {
    resultado.textContent = " Te la creiste w"
}

//eventos 
btnCalcular.addEventListener("click", calcular);
btnLimpiar.addEventListener("click", limpiar);
