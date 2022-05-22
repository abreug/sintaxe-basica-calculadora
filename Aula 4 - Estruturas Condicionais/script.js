var jogador1 = 0;
var jogador2 = 1;
var placar 

/* if (jogador1 != -1){
    // Usando "se" = if
    if (jogador1 > 0){
        console.log('jogador 1 marcou ponto');
    //Usando "se não,se" = else if
    } else if (jogador2 > 0){ 
        console.log('jogador 2 marcou ponto');
    //Usando "se não" = else
    } else {
        console.log('Ninguem marcou ponto');
    }    
} */

// if ternario [condição] ? [instrução1]: [instrução2];

/* 

jogador1 != -1 && jogador2 != -1 ? console.log('jogadores são validos') : console.log('os jogadores invalidos')

if (jogador1 > 0 && jogador2 == 0){
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2;

} else if (jogador2 > 0 && jogador1 ==0){ 
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1;

} else {
    console.log('Ninguem marcou ponto');
}

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break; // importante dar o break, se não a condição ira ficar se repetindo infinitamente
    
        case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break // importante dar o break, se não a condição ira ficar se repetindo infinitamente
    
        default: // caso nenhuma das condiçõs sejam atendidas, essa será ativada
        console.log('ninguem ganhou')
} */

let array = ['valor1','valor2','valor3','valor4','valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' }

//for executa um instrução até ela ser falsa
/* for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
} */

// for/in - executa repetição a partir de uma propriedade
//com array
/* for (let indice in array){
    console.log(indice);
}

//com object
for (let indice in object){
    console.log(indice);
}
*/
// for/of - executa repetição a partir de um valor
// com array
/*
for (i of array){
    console.log(i);
}

//com object não funciona pois não é iterável
for(i of object.propriedade1){
    console.log(i);
} */


//while - executa enquanto é verdadeiro
var a = 0;

while (a < 10){
    a++;
    console.log(a);
}

// do - executa até que seja falsa
do {
    a++;
    console.log(a);
} while (a<10);