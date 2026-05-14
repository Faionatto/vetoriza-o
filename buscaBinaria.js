function gerarListaAleatoria(tamanho, min, max) {
    let lista = [];
    for (let i = 0; i < tamanho; i++) {
      // Gera número inteiro entre min e max
      let numero = Math.floor(Math.random() * (max - min + 1)) + min;
      lista.push(numero);
    }
    return lista;
  }


function buscaBinaria(array, alvo){
    let inicio = 0;
    let fim = array.length - 1;

    while(inicio <= fim){
        //Calcula o ponto médio
        let meio = Math.floor((inicio + fim) / 2);

        if(array[meio] === alvo){
            return meio; //alvo encontrado
        } else if (array[meio] < alvo){
            inicio = meio + 1;//busca na metade direita
        }else{
            fim = meio - 1;//busca na metade esquerda
        }
    }
    return -1; //Alvo não encontrado
}

//Exemplo de uso :
const numeros = gerarListaAleatoria(1000, 1, 2000)
console.log(numeros.slice(0, 10))
console.log(buscaBinaria(numeros, numeros[1]));

/**
 * function gerarListaAleatoria(tamanho) {

 const lista = []

 for (let i = 0; i < tamanho; i++) {

 // números aleatórios entre 1 e 2000
 lista.push(Math.floor(Math.random() * 2000) + 1)
 }

 return lista
 }

function buscaBinaria(lista, valor) {

 let inicio = 0
 let fim = lista.length - 1

 while (inicio <= fim) {

 let meio = Math.floor((inicio + fim) / 2)

 if (lista[meio] === valor) {
 return meio
 }

 if (lista[meio] < valor) {
 inicio = meio + 1
 } else {
 fim = meio - 1
 }
 }

 return -1
 }

// ===============================
 // GERA LISTA
 // ===============================

let numeros = gerarListaAleatoria(2000)

// ORDENA A LISTA
 numeros.sort((a, b) => a - b)

// Número que será procurado
 let valorProcurado = 1500

console.log("Número procurado:", valorProcurado)

// ===============================
 // INÍCIO DA CONTAGEM
 // ===============================

const inicioTempo = performance.now()

let resultado = buscaBinaria(numeros, valorProcurado)

const fimTempo = performance.now()

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

// Tempo total
 console.log(
 `Tempo gasto: ${(fimTempo - inicioTempo).toFixed(4)} ms`) 
 */