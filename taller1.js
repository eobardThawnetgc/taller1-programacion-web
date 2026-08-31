//Ejercicio 1//
//CALCULADORA
function calcularDescuento(nombreProducto, precioOriginal, porcentajeDescuento) {
    const descuento = precioOriginal * (porcentajeDescuento / 100);
    const precioFinal = precioOriginal - descuento;

    console.log(`Producto: ${nombreProducto}`);
    console.log(`Precio original: $${precioOriginal.toFixed(2)}`);
    console.log(`Descuento aplicado: ${porcentajeDescuento}% ($${descuento.toFixed(2)})`);
    console.log(`Precio final: $${precioFinal.toFixed(2)}`);

    return precioFinal;
}

// Ejemplo de uso:
calcularDescuento("Laptop", 800, 15);


//Ejercicio 2//
//Clasificacion de Notas
function clasificarNota(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 100) {
        return "Por favor, ingrese una nota válida entre 0 y 100.";
    }

    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 80) {
        return "Muy Bueno";
    } else if (nota >= 70) {
        return "Bueno";
    } else if (nota >= 60) {
        return "Regular";
    } else {
        return "Reprobado";
    }
}

// Ejemplo de uso:
let notaEstudiante = 85;
console.log(`Nota: ${notaEstudiante} -> Clasificación: ${clasificarNota(notaEstudiante)}`);


//ejercicio 5: Generador de usuario 
const generarUsuario = (nombre) => {
    const usuario = nombre.replace(/\s+/g, "").toLowerCase() + "_dev";
    console.log("Usuario:", usuario, " generado exitosamente");
}

generarUsuario("              Manuel                        ");

//ejercicio 6: Creación de objetos de la clase Producto
class Producto {
    constructor(name, price, stock) {
        this.nombre = name;
        this.precio = price; 
        this.disponibilidad = stock;  
    }
}

const producto1 = new Producto("Juego de destornilladores", 25.50, 60);
const producto2 = new Producto("Hielera", 10, 85); 

console.log("Productos creados:");
console.log(producto1);
console.log(producto2);

