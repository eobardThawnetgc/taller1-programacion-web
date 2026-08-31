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

//Ejercicio 3
function AFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let valorEntrada = Number(prompt("Digite el numero en celsius"));
//Ejemplo de uso:
let valorSalida = AFahrenheit(valorEntrada);

console.log(valorEntrada + 'ºC = ' + valorSalida + 'ºF');

//Ejercio 4
//Calculadora con diferentes operaciones
function calculadora(numero1, numero2, operacion) {
  if (typeof numero1 !== 'number' || isNaN(numero1) || typeof numero2 !== 'number' || isNaN(numero2)) {
    console.log("Debes ingresar numeros validos.");
    return;
  }

  switch (operacion) {
    case 1:
      //Sumar respectivos numeros
      console.log("El resultado de la operacion es: " + (numero1 + numero2));
      break;

    case 2:
      //Restar respectivos numeros
      console.log("El resultado de la operacion es: " + (numero1 - numero2));
      break;

    case 3:
      //Multiplicar dichos numeros
      console.log("El resultado de la operacion es: " + (numero1 * numero2));
      break;

    case 4:
      //Dividir respectivos numeros
      if (numero2 === 0) {
        console.log("No se puede dividir entre cero.");
      } else {
        console.log("El resultado de la operación es: " + (numero1 / numero2));
      }
      break;

    default:
      console.log("Opción no permitida. Intentelo de nuevo.");
  }
}

let operacion = Number(prompt("Que desea hacer?\n1.Sumar \n2.Restar \n3.Multiplicacion \n4.Division"));
let numero1 = Number(prompt("Digite el primer numero"));
let numero2 = Number(prompt("Digite el segundo numero"));
calculadora(numero1, numero2, operacion);

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