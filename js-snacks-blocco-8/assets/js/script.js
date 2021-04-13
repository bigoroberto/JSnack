/***JSnack 8**
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(qui è necessaria una ricerca nella documentazione)
*/

var somma = 0
var numero_utente = prompt("Inserisci un numero a quattro cifre");

for(var i = 0; i < numero_utente.length; i++){
  var cifra = numero_utente[i];
  console.log(cifra);
  somma += parseInt(cifra);
}
document.getElementById("msg_auto").innerHTML = "La somma è : " + somma;





















