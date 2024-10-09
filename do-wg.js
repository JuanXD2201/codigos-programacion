let valor;
do{
    valor = parseInt(prompt('ingrese 1 para salir...'));
    document.write('ingreso valor: ',valor,'<br>');
    document.write('<br>');
}while(valor !=1);
document.write('fin del bucle')

let usuario, clave, control;

control = 0;
usuario = prompt('ingrese usuario...');
clave = prompt('ingrese su contraseña...');
do{
    if (clave != 'miaccess33$'){
        clave = prompt('contraseña incorrecta\n' +'intente de nuevo ...');
        control = 0;
}else{
    control=1
}
}while (control !=1);
document.write('acceso correcto');