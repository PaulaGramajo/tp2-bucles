/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/




const edad = parseInt(prompt('Ingresa tu edad:'));
if(edad>0){
    if (edad >= 18) {
    alert("Usted ya puede conducir.");
    } else{
        alert("Usted no puede conducir.")
    }
} else{
    alert('Valor erroneo')
}
