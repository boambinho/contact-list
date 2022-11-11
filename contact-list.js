// Lista

let listaContacto = [
  "Emilio Bustos",
  "Bruno Sentis",
  "Cesar Marquéz",
  "Josma Angel",
];

// Funciones

// Agregar Contacto
const agregarContacto = function (nombre) {
  return listaContacto.push(nombre);
};

// Borrar Contacto
const quitarContacto = function (nombre) {
  listaContacto.splice(listaContacto.indexOf(nombre), 1);
};

// Imprimir Contactos
const imprimirLista = function (lista) {
  console.log(lista);
};

// agregarContacto("Fernanda Sepúlveda");
// quitarContacto("Emilio Bustos");
// imprimirLista(listaContacto);

console.log(listaContacto);
