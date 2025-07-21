// ! Ejercicio 3: Buscar Producto en Inventario
// - Sistema de gestión de inventario.
//   Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El 
//   inventario debería estar PREDEFINIDO 

const prompt = require("prompt-sync")();

// Inventario tienda de ropa
const inventario = [
    { nombre: "Pantalon", precio: 50 },
    { nombre: "Camisa", precio: 20 },
    { nombre: "Chaqueta", precio: 150 },
    { nombre: "Medias", precio: 5 },
] 

function buscarProducto(nombre, inventario){
    
    for(let i = 0; i < inventario.length; i++){
        if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            console.log("El producto existe y su precio es ", inventario[i].precio);
            return inventario[i];
        }
    }
    console.log("El producto no existe");
    return null;
}

buscarProducto("Pantalon", inventario)