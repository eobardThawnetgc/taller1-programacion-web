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

