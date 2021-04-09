//creare un arrey con i nomi dei partecipanti alla festa

var listaInvitati = [
  "Mario Rossi",
  "Luca Logallo",
  "Simone Capozzi",
  "Marcello Beretta",
  "Marco Manelli",
  "Mattia Tealdi",
  "Fabio Pisanelli",
  "Roberto Bigozzi",
];

// chiedere all'utente il suo nome

var nomeInvitato = prompt("Il tuo nome e cognome?");

//flag di verifica

var name_to_found = false;
  
//ciclo l'array per verificare la presenza del nome  

for(var i = 0; i<listaInvitati.length; i++){
  var searchName = listaInvitati[i];
  if(searchName === nomeInvitato){
    name_to_found = true;
    break;
  }
}

//filtro l'output

if(name_to_found){
  document.getElementById("msg_auto").innerHTML = "Puoi partecipare."
}else(
  document.getElementById("msg_auto").innerHTML = "Non puoi partecipare.")
