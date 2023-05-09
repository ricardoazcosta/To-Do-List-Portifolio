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
            <img src="./assets/Trash1.png" alt="tarefa-para-o-lixo" onclick="deletarTarefa(${posicao})">
        </li>
        
        `



    })

    listaCompleta.innerHTML = novaLista
}

function tarefaConcluida (posicao){
listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida
mostrarTarefas()
}

function deletarTarefa(posicao){
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

button.addEventListener('click', novaTarefa);