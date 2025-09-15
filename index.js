// index.js

// Función asíncrona para obtener datos de JSONPlaceholder
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const users = await response.json();

    // Mostrar información relevante en consola
    console.log("Lista de usuarios:");
    const formatted = users.map(user => ({
      "Nombre de usuario": user.name,
      "Correo Electrónico": user.email,
      "Sitio web": user.website
    }));

    console.table(formatted);

  } catch (error) {
    console.error("Ocurrió un error al obtener los datos:", error.message);
  }
}

// Ejecutar la función
getUsers();