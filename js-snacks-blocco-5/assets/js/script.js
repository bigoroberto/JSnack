//creare un arrey vuota

var array_di_numeri = [];

// chiedere all'utente numero da pushare per 6 volte

for(var i=0; i <= 6; i++){
  var nuovo_numero = parseInt(prompt("Inserisci un nuovo numero"));

  if(nuovo_numero % 2 != 0 ){
    array_di_numeri.push(nuovo_numero);
  }
}

//output

console.log(array_di_numeri);
document.getElementById("msg_auto").innerHTML = array_di_numeri;


