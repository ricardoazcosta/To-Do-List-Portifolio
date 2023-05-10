const button = document.querySelector('.btn');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector(".list-task");



let listaDeItens = []

function novaTarefa() {
    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    });
    input.value = "";
    mostrarTarefas()
}

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