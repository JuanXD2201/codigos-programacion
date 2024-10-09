//operador && (y)
let a,b;
a = 15;
b = 25;
document.write(a==b);
document.write('<br>');
let color,edad;
color = prompt('ingrese el nombre de un color primario...');
edad = prompt('ingrese su edad...');
if (color =='amarillo' && edad >=18){
    document.write('Eres un adulto que prefiere el color amarillo.');
    document.write('<br>');
}else{
    document.write ('o no eres adulto o no te gusta el amarillo');
    document.write ('<br>')
}

//operador && (y)
let c,d;
c = 15;
d = 25;
document.write(a==b);
document.write('<br>');
let color1,edad1;
color1 = prompt('ingrese el nombre de un color primario...');
edad1 = prompt('ingrese su edad...');
if (color1 =='amarillo' || edad1 >=18){
    document.write('Eres un adulto que prefiere el color amarillo.');
    document.write('<br>');
}else{
    document.write ('o no eres adulto o no te gusta el amarillo');
    document.write ('<br>')
}

// operador || o
let dia, mes, anio;
dia = prompt('ingrese dia...');
mes = prompt('ingrese mes...');
anio = prompt('ingrese año...');

    if (mes == 1 || mes == 2 || mes == 3) {
        document.write('pertenece al primer trimestre');
    
    }
    else{
        document.write('no pertenece al primer trimestre');
    }