// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombres =[];

function agregarAmigo(){
    const nombre = document.getElementById('amigo').value.trim();
    const lista = document.getElementById("listaAmigos");
    

    if(nombre === ''){
        alert("Por fevor, inserte un nombre valido");
    } else{
        listaNombres.push(nombre);
        const espacioLista = document.createElement("li"); //Crea campo vacio para que se agregue en la lista
        espacioLista.textContent = nombre;
        lista.appendChild(espacioLista);
        
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
        
        tuAmigoSecretoEs.innerHTML = `${listaNombres[indexAmigo]}`;
        listaNombres.splice(indexAmigo,1);
    }

    
    
}

// Verificar que no existan duplicados


// reiniciar
function reiniciarSorteo(){
    lista.innerHTML="";
    limpiarCampo(); 
}

function limpiarCampo(){
    document.getElementById('amigo').value =''; 
}
