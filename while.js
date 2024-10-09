let g = 1;
while(g<10){
    document.write( 'vuelta # ',g);
    document.write ('<br>');
    g++;
}
document.write('fin del bucle');

let g1 = 10;
while(g1 >=0){
    document.write('vuelta # ',g1);
    document.write('<br>');
    g1--;
}

let f = 1;
let suma = 0;
let valor;
while(f<=5){
    valor = parseInt(prompt('ingrese valor'));
    suma = suma + valor;
    f++;
}
document.write("la suma es: ",suma,'<br>');