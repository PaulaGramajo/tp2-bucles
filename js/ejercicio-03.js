/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

let cadenas = "";
do{
    let cadena = prompt("Ingrese una cadena de texto: ")
    if(cadena !== null){
        if(cadenas === ""){
            cadenas = texto;
        } else{
            cadenas = cadenas + "-" + texto
        }
    }

} while(confirm('¿Quiere ingresar otra cadena de texto?'));
alert(cadenas);