// Lista
let listaContacto = [];

//Usuarios
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

// Actualizar Contacto
const updateContacto = (id, contacto) => {
  const index = listaContacto.findIndex((contacto) => contacto.id === id);
  listaContacto[index] = contacto;
};

// Mostrar Contactos
const imprimirLista = function (lista) {
  console.log(lista);
};

//Uso de funciones

//Añadir Usuarios a Lista
agregarContacto(usuarioEmilio);
agregarContacto(usuarioBruno);
agregarContacto(usuarioCesar);
agregarContacto(usuarioJosma);
agregarContacto(usuarioIrwing);

//Actualizar Contacto

updateContacto(0, {
  id: 0,
  nombres: "Emilio ",
  apellidos: "Nuevo Apellido",
  telefono: "+5696666666",
  ubicacion: { ciudad: "Reñaca", direccion: "Reñaquin 3" },
});

console.log(listaContacto);

updateContacto(1, {
  id: 1,
  nombres: "Bruno A",
  apellidos: "Franco S",
  telefono: "+56974131111",
  ubicacion: { ciudad: "Santiago", direccion: "Avenida ñuñoa 320" },
});

console.log(listaContacto[1]);
