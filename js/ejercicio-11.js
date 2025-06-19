//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. //

const nombre1 = prompt('Ingrese el nombre de la persona1: ');
const edad1= parseInt(prompt('Ingrese la edad de '+nombre1+': '))
const nombre2 = prompt('Ingrese el nombre de la persona2: ');
const edad2= parseInt(prompt('Ingrese la edad de '+nombre2+': '))
const nombre3 = prompt('Ingrese el nombre de la persona3: ');
const edad3= parseInt(prompt('Ingrese la edad de '+nombre3+': '))

let edadMayor = Math.max(edad1,edad2,edad3);

switch(edadMayor){
    case edad1: document.writeln(nombre1)
    break;
    case edad2: document.writeln(nombre2)
    break;
    case edad3: document.writeln(nombre3)
    break;
}

