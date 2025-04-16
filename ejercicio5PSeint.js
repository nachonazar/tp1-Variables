let precio = parseFloat(prompt("Ingrese un precio"));
if (precio > 1000) {
  let resultado = precio * 0.15;
  precio = precio - resultado;
  document.writeln("Se aplico un descuento del 15%: ", precio);
} else {
  document.writeln("No se aplico descuento: ", precio);
}
