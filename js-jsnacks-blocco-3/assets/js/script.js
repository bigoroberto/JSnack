// chiedere all'utente 10 volte un numero

// calcolare la somma
var sommaNumero = 0;

for(var i=0; i < 10; i++){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  sommaNumero +=  nuovoNumero;
}

document.getElementById("msg_auto").innerHTML = " La somma totale è: " + sommaNumero

