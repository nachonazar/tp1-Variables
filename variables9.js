const frase = prompt("Ingrese una frase (maximo 10 caracteres)").toLowerCase();
let vocales = "";
if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u"
) {
  vocales += frase.charAt(0);
}
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u"
) {
  vocales += frase.charAt(1);
}
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u"
) {
  vocales += frase.charAt(2);
}
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u"
) {
  vocales += frase.charAt(3);
}
if (
  frase.charAt(4) === "a" ||
  frase.charAt(4) === "e" ||
  frase.charAt(4) === "i" ||
  frase.charAt(4) === "o" ||
  frase.charAt(4) === "u"
) {
  vocales += frase.charAt(4);
}
if (
  frase.charAt(5) === "a" ||
  frase.charAt(5) === "e" ||
  frase.charAt(5) === "i" ||
  frase.charAt(5) === "o" ||
  frase.charAt(5) === "u"
) {
  vocales += frase.charAt(5);
}
if (
  frase.charAt(6) === "a" ||
  frase.charAt(6) === "e" ||
  frase.charAt(6) === "i" ||
  frase.charAt(6) === "o" ||
  frase.charAt(6) === "u"
) {
  vocales += frase.charAt(6);
}
if (
  frase.charAt(7) === "a" ||
  frase.charAt(7) === "e" ||
  frase.charAt(7) === "i" ||
  frase.charAt(7) === "o" ||
  frase.charAt(7) === "u"
) {
  vocales += frase.charAt(7);
}
if (
  frase.charAt(8) === "a" ||
  frase.charAt(8) === "e" ||
  frase.charAt(8) === "i" ||
  frase.charAt(8) === "o" ||
  frase.charAt(8) === "u"
) {
  vocales += frase.charAt(8);
}
if (
  frase.charAt(9) === "a" ||
  frase.charAt(9) === "e" ||
  frase.charAt(9) === "i" ||
  frase.charAt(9) === "o" ||
  frase.charAt(9) === "u"
) {
  vocales += frase.charAt(9);
}
document.writeln("Vocales encontradas: " + vocales);
