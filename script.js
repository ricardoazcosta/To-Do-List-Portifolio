const button = document.querySelector('.btn');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector(".list-task");
const errorMessage = document.querySelector(".error-message");




const validateInput  = () => input.value.trim().length > 3;


let listaDeItens = []

function novaTarefa() {
    const inputValido = validateInput();
    if (!inputValido) {
        errorMessage.style.display = "block";
       return input.classList.add("error");
    } else {
        input.classList.remove("error");
        
    } 
    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    });
    input.value = "";
    
    mostrarTarefas()
}


//document.querySelector("input[name='nome']")
//.addEventListener("input", function(){
  //  let caracters = this.value.length;
   // if (caracters <= 30) 
    //document.querySelector(".error-message").textContent = caracters;
    
//})



function mostrarTarefas() {
    let novaLista = ''

    listaDeItens.forEach((item, posicao)=> {
        novaLista = novaLista + `
        
        <li class="task ${item.concluida && "done"}">
            <img src="./assets/Check.png" alt="check-na-tarefa" onclick="tarefaConcluida(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./assets/trashphoto.png" alt="tarefa-para-o-lixo" onclick="deletarTarefa(${posicao})">
        </li>
        
        `



    })

    listaCompleta.innerHTML = novaLista

    localStorage.setItem('lista',JSON.stringify(listaDeItens))
}

function tarefaConcluida (posicao){
listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida
mostrarTarefas()
}

function deletarTarefa(posicao){
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas (){
    const tarefasLocalStorage = localStorage.getItem("lista");

    if(tarefasLocalStorage){

        listaDeItens = JSON.parse(tarefasLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas();
button.addEventListener('click', novaTarefa);

