
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

// 1. find
const personaLuis = personas.find(p => p.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);

// 2. forEach() 
personas.forEach(p => {
  console.log(p.nombre + " tiene " + p.edad + " años");
});

// 3. reduce() 
const totalEdades = personas.reduce((acum, p) => acum + p.edad, 0);
console.log("Suma total de edades:", totalEdades);