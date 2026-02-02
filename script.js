const contenedor = document.getElementById("contenedor");
const botonFinalizar = document.getElementById("finalizar");
const resultado = document.getElementById("resultado");

function cargarPreguntas() {
    preguntas.forEach(p => {
        const div = document.createElement("div");
        div.className = "pregunta";

        div.innerHTML = `
            <p><strong>${p.id}. ${p.texto}</strong></p>
            ${Object.entries(p.opciones).map(([key, value]) => `
                <label>
                    <input type="radio" name="p${p.id}" value="${key}">
                    ${value}
                </label>
            `).join("")}
        `;

        contenedor.appendChild(div);
    });
}

botonFinalizar.addEventListener("click", () => {
    let correctas = 0;

    preguntas.forEach(p => {
        const seleccion = document.querySelector(`input[name="p${p.id}"]:checked`);
        if (seleccion && seleccion.value === p.correcta) {
            correctas++;
        }
    });

    resultado.innerHTML = `✔ Correctas: ${correctas} / ${preguntas.length}`;
});

cargarPreguntas();
