var limite = 1000;
var potenza = 1;
var counterPotenza = 1;

while(potenza < limite){
  console.log(potenza)
  console.log("Elevo il 2 alla "+counterPotenza)
  potenza= Math.pow(2, counterPotenza);
    counterPotenza++
}


//oppure 

while(potenza < limite){
  console.log(potenza);
  potenza *=2;
}