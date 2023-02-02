const form = document.getElementById("form-atividade");
let atividades = [];
let notas = [];

let linhas = '';

// form.addEventListener('reset', function(e) {
//     e.preventDefault();

//     removeLinhas();
// });

// function removeLinhas() {

//     const inputNomeAtividade = document.getElementById('nome-atividade');
//     const inputNotaAtividade = document.getElementById('nota-atividade');

//     const corpoTabela = document.querySelector('tbody');
//     corpoTabela.innerHTML = '';

//     inputNomeAtividade.value = '';
//     inputNotaAtividade.value = '';
//     atividades = [];
//     notas = [];

// }

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`O contato: ${inputNomeAtividade.value} já foi inserido.`)
    // } else if(notas.includes(inputNotaAtividade.value)) {
    //     alert(`O numero: ${inputNotaAtividade.value} já foi inserido.`)
        } else {
            atividades.push(inputNomeAtividade.value);
            notas.push(parseFloat(inputNotaAtividade.value));
        
            let linha = '<tr>';
            linha += `<td>${inputNomeAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value}</td>`;
            linha += `</tr>`;  
            linhas += linha;
        
            inputNomeAtividade.value = '';
            inputNotaAtividade.value = '';
        }

}

function atualizaTabela () {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

const formato = {

    phone (value) {

    return value

        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')

    }

}



document.querySelectorAll('input').forEach(($input) => {

    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {

    e.target.value = formato[field](e.target.value)

    }, false)

})