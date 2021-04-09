//l'utente inserisce due parole in successione con 2 prompt.

// il software stampa prima la parola piu corta, poi la parola più lunga

var parola1 = prompt("Inserisci la prima parola");
var parola2 = prompt("Inserisci la seconda parola");

if(parola1.length == parola2.length){
  alert("le parole sono uguali")
}else if(parola1.length < parola2.length){
    document.getElementById("msg_auto").innerHTML = parola1 + parola2
}else{
  document.getElementById("msg_auto").innerHTML = parola2 + parola1
}
