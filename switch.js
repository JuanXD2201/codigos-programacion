let valor;
valor = parseInt(prompt('ingrese un valor entre 1 y 3'));
switch(valor){
    case 1 :
        document.write('ingreso uno');
        break;
    case 2 :
        document.write('ingreso dos');
        break;
    case 3:
        document.write('ingreso tres');
        break;
    default:
        document.write('no es un numero valido')
        break;
}

let color;
color = prompt('ingrese un color rojo/verde/azul');
switch(color){
    case 'rojo':
        document.write('ingreso rojo');
        break;
    case 'verde':
        document.write('ingreso verde');
        break;
    case 'azul':
        document.write('ingreso azul');
        break;

    default:
        document.write('ingrese un color valido')
        break
}