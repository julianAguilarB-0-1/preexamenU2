const tabla = document.getElementById("tabla");
const tbody = document.getElementById("tablaBody");

//funciones
function promedioPresion() {
    fetch('../js/presion.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            let suma = 0; // para acumular presión
            const cantidad = datos.length; // contar lecturas

            // ciclo
            datos.forEach(presion => {
                // crear una nueva fila
                const fila = document.createElement("tr");

                const celdaNombre = document.createElement("td");
                celdaNombre.textContent = presion.nombre;
                fila.appendChild(celdaNombre);

                const celdaDia = document.createElement("td");
                celdaDia.textContent = presion.dia;
                fila.appendChild(celdaDia);

                const celdaPresion = document.createElement("td");
                celdaPresion.textContent = presion.presion_arteria;
                fila.appendChild(celdaPresion);

                // agregar la fila a la tabla
                tbody.appendChild(fila);

                // acumular suma dentro del ciclo
                suma += presion.presion_arteria;
            });

            // calcular promedio
            const promedio = suma / cantidad;

            
            // mostrar resultado
            const resultado = document.getElementById("resultado");
            if (resultado) {
                resultado.textContent = `${promedio.toFixed(2)}`;
            }
            if (promedio < 120) {
                nivel.textContent = "Presión arterial normal";
            } else if (promedio >= 120 && promedio <= 129) {
                nivel.textContent = "Presión arterial elevada";
            } else if (promedio >= 130) {
                nivel.textContent = "Presión arterial alta";
            }


        })
        .catch(error => console.error("Error:", error));
}


//eventos
document.addEventListener("DOMContentLoaded", promedioPresion);
