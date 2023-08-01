function buscarGrupos() {
  const carrera = document.getElementById("carrera").value;
  const periodo = document.getElementById("periodo").value;

  alert(
    "Carrera seleccionada: " + carrera + "\nPeriodo seleccionado: " + periodo
  );
}

function agregarGrupo() {
  const cuatrimestre = document.getElementById("cuatrimestre").value;
  const grado = document.getElementById("grado").value;
  const grupo = document.getElementById("grupo").value;
  const turno = document.getElementById("turno").value;

  const table = document.getElementById("grupo-table");
  const newRow = table.insertRow(-1);

  const cell1 = newRow.insertCell(0);
  cell1.innerHTML = cuatrimestre;

  const cell2 = newRow.insertCell(1);
  cell2.innerHTML = grado;

  const cell3 = newRow.insertCell(2);
  cell3.innerHTML = grupo;

  const cell4 = newRow.insertCell(3);
  cell4.innerHTML = turno;
}
