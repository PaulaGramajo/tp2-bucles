/*Crea un script que escriba los números del 1 al 500, que indique cuáles son 
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por 
ejemplo : 
 
1 
2 
3 
4 (Múltiplo de 4) 
5- 
————————————————————- 
 
6 
7 
8 (Múltiplo de 4) 
9 (Múltiplo de 9) 
10*/

let numeros = ""
let cantFila = 0

for(let i=1; i<=500; i++){
    fila = i;
    if(i % 4 === 0){
        fila = fila + '(Multiplo de 4)'
    }
    if(i % 9 === 0){
        fila = fila + '(Multiplo de 9)'
    }
    numeros = numeros+ fila + '</br>'
    cantFila++;

    if(cantFila === 5){
        numeros = numeros + "———————————————</br>"
        cantFila=0;
    }
}

document.writeln(numeros)