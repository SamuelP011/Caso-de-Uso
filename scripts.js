// Actualiza el ID único basado en el nombre del caso de uso
function updateID() {
    const name = document.getElementById('use-case-name').value;
    const idField = document.getElementById('unique-id');
    idField.value = name ? `ID Único Conf RG ${name}` : '';
}

// Función para agregar filas a la tabla de pasos realizados
function addStep() {
    const tbody = document.getElementById('steps-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="step-info" placeholder="Información para los pasos"></td>
        <td><button type="button" class="button" onclick="addStep()">Agregar</button></td>
        <td><button type="button" class="button button-danger" onclick="removeRow(this)">Eliminar</button></td>
        <td>
            <button type="button" class="button button-move" onclick="moveUp(this)">↑</button>
            <button type="button" class="button button-move" onclick="moveDown(this)">↓</button>
        </td>
    `;
    tbody.appendChild(newRow);
}

// Función para agregar filas a la tabla de información para los pasos
function addInfo() {
    const tbody = document.getElementById('info-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="info-field" placeholder="Información adicional para los pasos"></td>
        <td><button type="button" class="button" onclick="addInfo()">Agregar</button></td>
        <td><button type="button" class="button button-danger" onclick="removeRow(this)">Eliminar</button></td>
        <td>
            <button type="button" class="button button-move" onclick="moveUp(this)">↑</button>
            <button type="button" class="button button-move" onclick="moveDown(this)">↓</button>
        </td>
    `;
    tbody.appendChild(newRow);
}

// Función para eliminar una fila
function removeRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Función para mover una fila hacia arriba
function moveUp(button) {
    const row = button.parentNode.parentNode;
    const previousRow = row.previousElementSibling;
    if (previousRow) {
        row.parentNode.insertBefore(row, previousRow);
    }
}

// Función para mover una fila hacia abajo
function moveDown(button) {
    const row = button.parentNode.parentNode;
    const nextRow = row.nextElementSibling;
    if (nextRow) {
        row.parentNode.insertBefore(nextRow, row);
    }
}

// Función para imprimir el formulario
document.getElementById('print').addEventListener('click', () => {
    window.print();
});

// Función para guardar el formulario en PDF
document.getElementById('save-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = document.body.innerText; // O usa un método más sofisticado para obtener el contenido

    doc.text(content, 10, 10);
    doc.save('formulario.pdf');
});
