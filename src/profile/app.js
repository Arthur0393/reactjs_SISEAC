document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("save-btn");
  saveButton.addEventListener("click", saveProfile);
});

function saveProfile() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const employeeId = document.getElementById("employee-id").value;
  const academicTitle = document.getElementById("academic-title").value;
  const major = document.getElementById("major").value;
  const description = document.getElementById("description").value;

  // Puedes agregar aquí la lógica para guardar los datos en el backend (por ejemplo, usando una API).
  // Por ahora, solo mostraremos los datos en la consola.
  console.log("Nombre:", name);
  console.log("Correo:", email);
  console.log("Teléfono:", phone);
  console.log("No. Empleado:", employeeId);
  console.log("Título Académico:", academicTitle);
  console.log("Carrera:", major);
  console.log("Descripción:", description);

  alert("Perfil actualizado con éxito.");
}
