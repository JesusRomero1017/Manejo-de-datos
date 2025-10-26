// Declaración del hash vacío
let registro = {};

// Función para validar que los campos no estén vacíos
function validarCampos(nombre, edad, correo) {
    return nombre.trim() !== "" && edad.trim() !== "" && correo.trim() !== "";
}

// Función para mostrar los datos en la tabla
function mostrarTabla() {
    const contenedor = document.getElementById("tabla-registros");
    contenedor.innerHTML = ""; // limpiar

    if (Object.keys(registro).length === 0) {
        contenedor.innerHTML = "<p>No hay registros aún.</p>";
        return;
    }

    let tabla = `
        <table>
            <thead>
                <tr>
                    <th>Clave</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let clave in registro) {
        tabla += `
            <tr>
                <td>${clave}</td>
                <td>${registro[clave].nombre}</td>
                <td>${registro[clave].edad}</td>
                <td>${registro[clave].correo}</td>
            </tr>
        `;
    }

    tabla += "</tbody></table>";
    contenedor.innerHTML = tabla;
}

// Función para registrar un nuevo usuario
function registrar() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;

    if (!validarCampos(nombre, edad, correo)) {
        alert("Por favor, llena todos los campos.");
        return;
    }

    // Crear clave única (puede ser timestamp o contador)
    const clave = Date.now().toString();

    // Agregar al hash
    registro[clave] = { nombre, edad, correo };

    // Limpiar formulario
    document.getElementById("form-registro").reset();

    // Actualizar tabla
    mostrarTabla();
}

// Función para eliminar un registro
function eliminarRegistro() {
    const clave = prompt("Introduce la clave del registro a eliminar:");

    if (clave in registro) {
        delete registro[clave];
        alert("Registro eliminado correctamente.");
        mostrarTabla();
    } else {
        alert("No se encontró un registro con esa clave.");
    }
}

// Asignar eventos
document.getElementById("btn-registrar").addEventListener("click", registrar);
document.getElementById("btn-eliminar").addEventListener("click", eliminarRegistro);

// Mostrar tabla inicial
mostrarTabla();
