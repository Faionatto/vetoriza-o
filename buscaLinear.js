//Exemplo de busca linear

/*function buscalinear(arr, alvo){
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
*/

// Otimização: Uso de 'const' para imutabilidade e Arrow Functions
const gerarListaAleatoria = (tamanho, min, max) => {
    // Aloca o tamanho do array previamente na memória para melhor performance
    return Array.from({ length: tamanho }, () => 
        Math.floor(Math.random() * (max - min + 1)) + min
    );
};

const buscaBinaria = (array, alvo) => {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        // Operador bitwise (>> 1) divide por 2 e arredonda para baixo de forma ultrarrápida
        const meio = (inicio + fim) >> 1; 
        const valorMeio = array[meio];

        if (valorMeio === alvo) return meio;
        
        if (valorMeio < alvo) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    return -1;
};

// --- EXECUÇÃO CORRIGIDA ---

// 1. Gera a lista desordenada
const numerosAleatorios = gerarListaAleatoria(1000, 1, 2000);

// 2. OBRIGATÓRIO: Ordenar a lista antes da Busca Binária
// O JavaScript ordena como string por padrão. O '(a, b) => a - b' garante ordenação numérica.
const numerosOrdenados = [...numerosAleatorios].sort((a, b) => a - b);

// 3. Seleciona um elemento real existente na lista para testar
const alvoValido = numerosOrdenados[15]; 

// Exibições
console.log("10 Primeiros Elementos (Ordenados):", numerosOrdenados.slice(0, 10));
console.log(`Buscando valor [${alvoValido}]...`);

const indiceResultado = buscaBinaria(numerosOrdenados, alvoValido);
console.log(`Índice encontrado: ${indiceResultado}`); // Agora sempre retornará o índice correto
