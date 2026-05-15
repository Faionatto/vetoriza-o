//Exemplo de busca linear

function buscalinear(arr, alvo){
    for(let i = 0; i < arr.length; i++){
        //verifica se o elemento atual é o alvo
        if(arr[i] === alvo){
            return i;//retorna o índice
        }
    }
    return -1; //Retorna -1 se não encontrado
}

const lista = [10, 50, 30, 70, 80, 20];
console.log(buscalinear(lista, 70)); //Saída: 2
console.log(buscalinear(lista, 20)); // Saída; -2


/*
function gerarListaAleatoria(tamanho) {

 const lista = []

 for (let i = 0; i < tamanho; i++) {

 // números aleatórios entre 1 e 2000
 lista.push(Math.floor(Math.random() * 2000) + 1)
 }

 return lista
 }

function buscaLinear(lista, valor) {

 for (let i = 0; i < lista.length; i++) {

 // mostra o número sendo analisado
 console.log("Verificando:", lista[i])

 if (lista[i] === valor) {
 return i
 }
 }

 return -1
 }

// ===============================
 // GERA LISTA
 // ===============================

let numeros = gerarListaAleatoria(2000)

// Número procurado
 let valorProcurado = 1500

console.log("Número procurado:", valorProcurado)

// ===============================
 // EXECUTA BUSCA
 // ===============================

let resultado = buscaLinear(numeros, valorProcurado)

// ===============================
 // RESULTADO
 // ===============================

if (resultado !== -1) {

 console.log(
 `Valor encontrado na posição ${resultado}`
 )

} else {

 console.log("Valor não encontrado")
 }

*/
