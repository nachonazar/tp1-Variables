const numero1 = parseInt(prompt("Ingrese un numero")),
  numero2 = parseInt(prompt("Ingrese un segundo numero")),
  numero3 = parseInt(prompt("Ingrese un tercer numero"));

if (numero1 > numero2 && numero1 > numero3) {
  document.writeln("El mayor numero es: ", numero1);
}
if (numero2 > numero1 && numero2 > numero3) {
  document.writeln("El mayor numero es: ", numero2);
}
if (numero3 > numero1 && numero3 > numero2) {
  document.writeln("El mayor numero es: ", numero3);
}
if (numero1 === numero2 && numero2 === numero3 && numero1 === numero3) {
  document.writeln("El mayor numero es: ", numero1);
}
if (numero1 === numero2 && numero1 > numero3 && numero2 > numero3) {
  document.writeln("El mayor numero es: ", numero1);
}
if (numero2 === numero3 && numero2 > numero1 && numero3 > numero1) {
  document.writeln("El mayor numero es: ", numero2);
}
if (numero1 === numero3 && numero1 > numero2 && numero3 > numero2) {
  document.writeln("El mayor numero es: ", numero1);
}
