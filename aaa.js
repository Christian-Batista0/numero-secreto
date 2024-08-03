function nome(nome) {
    console.log(`Olá,${nome}`);
}

let media = calcularMedia(22,59,100);
console.log(media);
function calcularMedia(num1,num2,num3) {
    return (num1 + num2 + num3) / 3;
}

let numeroMaior = maiorNumero(1,3);
console.log(numeroMaior);
function maiorNumero(num1,num2) {
   return num1 > num2 ? num1 : num2;
   
}

let Numero2x = multiNumero(10);
console.log(Numero2x)
function multiNumero(num) {
    return num * num
}

tabuada(15)

function tabuada(num) {
    let i = 10;
    let contador = 1;
    while (contador <= i) {
        console.log(num * contador);
        contador++;
    }
    
}