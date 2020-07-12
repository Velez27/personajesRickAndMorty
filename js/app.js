const buttonPersonajes = document.getElementById('button');

buttonPersonajes.addEventListener('click', () => {
    eliminarPersonajes();
    imprimirPersonaje(10);
});

function eliminarPersonajes(){
    let seccion = document.getElementById('contenido');
    let contenidoTotal = seccion.childElementCount;
    for(let i = 0; i < contenidoTotal; i++){
        seccion.lastChild.remove();
    }
}

function aleatorio(){
    const max = 493;
    const min = 1;
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

async function crearTarjetaPersonaje(){

    const personaje = await getCharacter();

    let seccion = document.getElementById('contenido');
    let tarjetaPersonaje = document.createElement('div');
    tarjetaPersonaje.className = 'tarjetasPersonajes';

    // Imagen del personaje
    let imagenPersonaje = document.createElement('img');
    imagenPersonaje.src = personaje.image;
    tarjetaPersonaje.appendChild(imagenPersonaje);

    // Nombre del personaje
    let nombrePersonaje = document.createElement('p');
    nombrePersonaje.innerHTML = `<STRONG>Nombre: </STRONG>${personaje.nombre}`;
    tarjetaPersonaje.appendChild(nombrePersonaje);

    // Estado del personaje
    let estadoPersonaje = document.createElement('p');
    estadoPersonaje.innerHTML = `<STRONG>Estado: </STRONG>${personaje.status}`;
    tarjetaPersonaje.appendChild(estadoPersonaje);

    // Especie del personaje
    let especiePersonaje = document.createElement('p');
    especiePersonaje.innerHTML =`<STRONG>Especie: </STRONG>${personaje.species}`;
    tarjetaPersonaje.appendChild(especiePersonaje);

    // Genero del personaje
    let generoPersonaje = document.createElement('p');
    generoPersonaje.innerHTML = `<STRONG>Genero: </STRONG>${personaje.gender}`;
    tarjetaPersonaje.appendChild(generoPersonaje);

    // Origen del personaje
    let origenPersonaje = document.createElement('p');
    origenPersonaje.innerHTML = `<STRONG>Origen: </STRONG>${personaje.origin}`;
    tarjetaPersonaje.appendChild(origenPersonaje);

    // Ubicacion del personaje
    let ubicacionPersonaje = document.createElement('p');
    ubicacionPersonaje.innerHTML = `<STRONG>Ubicacion: </STRONG>${personaje.location}`;
    tarjetaPersonaje.appendChild(ubicacionPersonaje);

    seccion.appendChild(tarjetaPersonaje);
}

// function traerPersonaje(){
//     let numCharacter = aleatorio();
//     let api = `https://rickandmortyapi.com/api/character/${numCharacter}`;
//     fetch(api)
//         .then(response => response.json())
//         .then(data => {
//             crearTarjetaPersonaje(data.name, data.status, data.species, data.gender, data.origin.name, data.location.name, data.image);
//         })
//         .catch(err => console.log(err));
// }

const getCharacter = async () => {
    let numCharacter = aleatorio();
    let api = `https://rickandmortyapi.com/api/character/${numCharacter}`;
    try{
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error.message);
    }
}



function imprimirPersonaje(num){
    for(let i = 0; i < num; i++){
        //traerPersonaje();
        crearTarjetaPersonaje();
    }
 }

 imprimirPersonaje(10);