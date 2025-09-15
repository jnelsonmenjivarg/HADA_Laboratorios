function descargarArchivo(nombre) {
    return new Promise((resolve) => {
         console.log(`Descargando ${nombre}...`);
        setTimeout(() => {
            console.log(`${nombre} descargado`);
            resolve(nombre);
        }, 2000);
    });
}

descargarArchivo("arcchivo2.txt")
    .then((resultado) => {
        console.log(`Procesando ${resultado}...`);
    });

async function main() {
    const resultado = await descargarArchivo("archivo3.txt");
    console.log(`Procesando ${resultado}...`);
}console.log(`Procesando ${resultado}...`);