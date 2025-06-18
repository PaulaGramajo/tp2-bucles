/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

/*let suma = 0;
do{
    let num = parseInt(prompt("Ingrese un numero: "))
    if(num !== null){
        let numero = Number(num);
        if(suma === 0){
            suma = numero;
        } else{
            suma = suma + numero
        }
    }

} while(confirm('¿Desea ingresar otro número?'));
document.writeln('La suma de los numeros ingresados es igual a: '+suma);*/
let suma = 0;

do {
  let num = parseInt(prompt("Ingrese un numero:"));

  if (num == num){
    suma = suma + num;
  } else {
    alert("No es un número válido.");
  }
} while (confirm('¿Desea ingresar otro número'));

document.writeln("La suma de los numeros ingresados es: " + suma);