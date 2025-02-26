// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombres =[];

function agregarAmigo(){
    const nombre = document.getElementById('amigo').value.trim(); //Trim elimina espacios en blanco al final e inicio del valor obtenido
    const lista = document.getElementById("listaAmigos"); //Crea una lista vacia, indica lugar donde se agrega la lista
   
    if(nombre === ''){
        alert("Por favor, inserte un nombre válido.");
    } else{
        listaNombres.push(nombre);
        const espacioLista = document.createElement("li"); //Crea campo vacio para que se agregue en la lista
        espacioLista.textContent = nombre + " ";
        lista.appendChild(espacioLista); //agrega el nuevo li dentro de ul
        console.log(listaNombres);
        //Crear boton eliminar nombre
        let botonEliminar = document.createElement("button")
        botonEliminar.textContent = " x ";

        botonEliminar.onclick =function(){
            espacioLista.remove(); 
            indexListaNombres(nombre);
            console.log(listaNombres);
        };

        // Asociar para ligar elemnto y botón eliminar, tomar un elemento padre y se agrega elemento hijo
        // Padre nombre, hijo bóton eliminar
        //Agregar boton de eliminar al elemento de la lista nombre
        espacioLista.appendChild(botonEliminar); 
    }

  limpiarCampo();

}

// Sorteo
function sortearAmigo(){
    
    if(listaNombres.length === 0){
            alert("La lista de amigos está vacía. Agrega amigos antes de sortear.");
    }else{
        let indexAmigo = Math.floor(Math.random()*listaNombres.length);
        let tuAmigoSecretoEs = document.getElementById("tuAmigoEs");
        
        tuAmigoSecretoEs.innerHTML = `🎉 Dale un regalo a: ${listaNombres[indexAmigo]} 🎉`;
        listaNombres.splice(indexAmigo,1);
    } 
    
}

// Verificar que no existan duplicados


// reiniciar
function reiniciarSorteo(){
    const lista = document.getElementById("listaAmigos"); // CORREGIDO
    lista.innerHTML = "";
    listaNombres.length = 0; // También limpiamos el array
    limpiarCampo();
    console.log(listaNombres);
    let digiteNombre = document.getElementById("tuAmigoEs");    //Regresar a "Digite el nombre de sus amigos"
    digiteNombre.innerHTML = "Digite el nombre de sus amigos";
}

function limpiarCampo(){
    document.getElementById('amigo').value =''; 
}

function indexListaNombres(nombre){
    let indexEliminar = listaNombres.indexOf(nombre);
    if (indexEliminar !== -1){
        listaNombres.splice(indexEliminar, 1); // Eliminar de la lista en JS, index indica el nombre a eliminar, el segundo 1 indica cuantos elementos se van a eliminar
    }
}