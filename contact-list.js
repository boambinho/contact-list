// Lista

let listaContacto = [];

const usuarioEmilio = {
  id: 0,
  nombres: "Emilio F",
  apellidos: "Bustos Q",
  telefono: "+56961131111",
  ubicacion: { ciudad: "Valparaiso", direccion: "Avenida reñaca 200" },
};

const usuarioBruno = {
  id: 1,
  nombres: "Bruno A",
  apellidos: "Sentis F",
  telefono: "+56974131111",
  ubicacion: { ciudad: "Santiago", direccion: "Avenida ñuñoa 320" },
};

const usuarioCesar = {
  id: 2,
  nombres: "César F",
  apellidos: "Marquéz F",
  telefono: "+56984131521",
  ubicacion: { ciudad: "Ajiji", direccion: "Avenida mexico 133" },
};

const usuarioJosma = {
  id: 3,
  nombres: "Jose M",
  apellidos: "Urrutia A",
  telefono: "+56944231521",
  ubicacion: { ciudad: "Zapopan", direccion: "Avenida madeiras 163" },
};

const usuarioIrwing = {
  id: 4,
  nombres: "Irwing J",
  apellidos: "Naranjo B",
  telefono: "+56958232529",
  ubicacion: { ciudad: "Concepción", direccion: "Avenida Bruno 666" },
};

// Funciones

// Agregar Contacto

const agregarContacto = function (contacto) {
  return listaContacto.push(contacto);
};

// Borrar Contacto

const quitarContacto = (id) => {
  const index = listaContacto.findIndex(
    (listaContacto) => listaContacto.id === id
  );
  listaContacto.splice(index, 1);
};

console.log(listaContacto);
agregarContacto(usuarioEmilio);
agregarContacto(usuarioBruno);
// agregarContacto(usuarioCesar);
// agregarContacto(usuarioJosma);
// agregarContacto(usuarioIrwing);

console.log(listaContacto);
quitarContacto(0);

console.log(listaContacto);

// Imprimir Contactos

const imprimirLista = function (lista) {
  console.log(lista);
};
