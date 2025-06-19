/*Crea script para generar pirámide siguiente con los números del 1 al número 
que indique el usuario (no mayor de 50)  
 
1 
12 
123 
1234 
12345 
123456 
……*/


let piramide = "";

const num = parseInt(prompt('Ingrese un número:'))

if(num<=50){
for(let i = 1; i<=num; i++){
    let linea = "";
    for(let j = 1; j<=i; j++){
        linea = linea + j;
    }

    piramide = piramide + linea + "<br>"; 
}
}else{
    alert('El número debe ser menor')
}
document.writeln(piramide)