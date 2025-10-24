const precioVenta = document.getElementById("PrecioV");
const precioCompra = document.getElementById("PrecioC");
const cantidad = document.getElementById("Cantidad");
const btnCalcular = document.getElementById("calculos");
const btnCalcular2 = document.getElementById("calcular");
const mostrar = document.getElementById("mostrar");



function calcularGanancia() {
    let pv = parseFloat(precioVenta.value);
    let pc = parseFloat(precioCompra.value);
    let cant = parseInt(cantidad.value);

    let totalcompra = pc * cant;
    let totalventa = pv * cant;
    let ganancia = totalventa - totalcompra;

    document.getElementById("TotalCompra").value = totalcompra.toFixed(2);
    document.getElementById("TotalVenta").value = totalventa.toFixed(2);
    document.getElementById("Ganancia").value = ganancia.toFixed(2);
    mostrar.innerHTML ="$"+ganancia.toFixed(2);
}

btnCalcular.addEventListener("click", calcularGanancia);
btnCalcular2.addEventListener("click", calcularGanancia);
