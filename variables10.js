const numero = parseInt(prompt("Ingrese un numero: "));

if (numero % 2 === 0) {
  document.writeln("El ", numero, " es divisible por 2<br>");
}
else if (numero % 3 === 0) {
  document.writeln("El ", numero, " es divisible por 3<br>");
}
else if (numero % 5 === 0) {
  document.writeln("El ", numero, " es divisible por 5<br>");
}
else if (numero % 7 === 0) {
  document.writeln("El ", numero, " es divisible por 7<br>");
}
else{
    document.writeln("El ", numero, " no es divisible por 2, 3, 5 o 7<br>");
}