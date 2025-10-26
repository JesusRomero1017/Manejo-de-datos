// 1. Declaración del Arreglo
let lista = [];

// Obtener referencias a los elementos del DOM
const formulario = document.getElementById('formulario-datos');
const campoEntrada = document.getElementById('campo-entrada');
const listaContainer = document.getElementById('lista-container');
const mensajeError = document.getElementById('mensaje-error');

// 2. Función para Mostrar el Contenido del Arreglo (Renderizado)
function mostrarLista() {
    // Vaciar el contenedor antes de renderizar la lista actualizada
    listaContainer.innerHTML = '';

    if (lista.length === 0) {
        listaContainer.innerHTML = '<p>La lista está vacía.</p>';
        return;
    }

    // Crear elementos HTML a partir del arreglo
    lista.forEach((elemento, indice) => {
        const item = document.createElement('span');
        item.className = 'item';
        item.textContent = `${indice + 1}. ${elemento}`;
        listaContainer.appendChild(item);
        listaContainer.appendChild(document.createElement('br')); // Salto de línea
    });
}

// 3. Funcionalidad para Añadir Elemento (Método push y Validación)
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nuevoElemento = campoEntrada.value.trim();

    if (nuevoElemento === "") {
        mensajeError.textContent = "Error: El campo no puede estar vacío.";
        return;
    }

    mensajeError.textContent = "";
    lista.push(nuevoElemento);
    mostrarLista();
    campoEntrada.value = '';
});

// 4. Implementación de Botones de Acción (shift, pop, sort)
function eliminarPrimero() {
    if (lista.length > 0) {
        lista.shift();
        mostrarLista();
    }
}

function eliminarUltimo() {
    if (lista.length > 0) {
        lista.pop();
        mostrarLista();
    }
}

function ordenarLista() {
    lista.sort();
    mostrarLista();
}

// Mostrar la lista inicial al cargar la página (estará vacía)
mostrarLista();