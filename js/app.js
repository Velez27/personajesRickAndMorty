function aleatorio(){
    const max = 493;
    const min = 1;
    let resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function crearTarjetaPersonaje(nombre, status, species, gender, origin, location, image){

    let seccion = document.getElementById('contenido');
    let tarjetaPersonaje = document.createElement('div');

    // Imagen del personaje
    let imagenPersonaje = document.createElement('img');
    imagenPersonaje.src = image;
    tarjetaPersonaje.appendChild(imagenPersonaje);

    // Nombre del personaje
    let nombrePersonaje = document.createElement('p');
    nombrePersonaje.innerHTML = `<STRONG>Nombre: </STRONG>${nombre}`;
    tarjetaPersonaje.appendChild(nombrePersonaje);

    // Estado del personaje
    let estadoPersonaje = document.createElement('p');
    estadoPersonaje.innerHTML = `<STRONG>Estado: </STRONG>${status}`;
    tarjetaPersonaje.appendChild(estadoPersonaje);

    // Especie del personaje
    let especiePersonaje = document.createElement('p');
    especiePersonaje.innerHTML =`<STRONG>Especie: </STRONG>${species}`;
    tarjetaPersonaje.appendChild(especiePersonaje);

    // Genero del personaje
    let generoPersonaje = document.createElement('p');
    generoPersonaje.innerHTML = `<STRONG>Genero: </STRONG>${gender}`;
    tarjetaPersonaje.appendChild(generoPersonaje);

    // Origen del personaje
    let origenPersonaje = document.createElement('p');
    origenPersonaje.innerHTML = `<STRONG>Origen: </STRONG>${origin}`;
    tarjetaPersonaje.appendChild(origenPersonaje);

    // Ubicacion del personaje
    let ubicacionPersonaje = document.createElement('p');
    ubicacionPersonaje.innerHTML = `<STRONG>Ubicacion: </STRONG>${location}`;
    tarjetaPersonaje.appendChild(ubicacionPersonaje);

    seccion.appendChild(tarjetaPersonaje);
}

function traerPersonaje(){
    let numCharacter = aleatorio();
    let api = `https://rickandmortyapi.com/api/character/${numCharacter}`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            crearTarjetaPersonaje(data.name, data.status, data.species, data.gender, data.origin.name, data.location.name, data.image);
        })
        .catch(err => console.log(err));
}

function imprimirPersonaje(num){
    for(let i = 0; i < num; i++){
        traerPersonaje();
    }
 }

 imprimirPersonaje(10);