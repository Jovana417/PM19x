
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000}
];
 
//Código
// 1. Filtrar productos con precio mayor a 1000
const filtrados = productos.filter(producto => producto.precio > 1000);

// 2. Usar .map() para obtener solo los nombres
const nombres = filtrados.map(producto => producto.nombre);

// 3. Imprimir el resultado
console.log(nombres); // ["Laptop", "Monitor"]