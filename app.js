// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres =[];

function agregarAmigo(){
let nombre = document.getElementById('amigo').value.trim();

    if(nombre === ''){
        alert("Por fevor, inserte un nombre valido");
    } else{
        
        console.log(nombre);
        let nuevoAmigo = document.createElement("li"); //Crea campo vacio para que se agregue en la lista
        nuevoAmigo.textContent = nombre;
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);
        listaNombres.push(nombre);
    }
limpiarCampo();


}

function limpiarCampo(){
    document.getElementById('amigo').value =''; 

}
