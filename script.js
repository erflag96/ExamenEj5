/*Variables*/
var palabras=["Hipotermia", "Caballo", "Profesor", "Perro", "Zapatilla"];
var azar= palabras[Math.round(Math.random()*4)];
var letra = "";
var palabra=[];
var fallos=0;
var prop=false;
var prop2=false;
/*Funcionamiento*/
for(var i=0;i<azar.length;i++){
  palabra.push(0);
var Hola;
}

while(fallos<5){
  letra=prompt("Pulsa una letra buen hombre.");
  while(!isNaN(letra)){
    letra=prompt("Me parece que no lo has entendido, pon una letra por favor.");
  }
  
  for(var i=0; i<azar.length;i++){
    if(azar.charAt(i)==letra){
      palabra[i]=letra;
      prop=true;
    }
  }
  for(var i=0; i<palabra.length;i++){
    if(azar.charAt(i)==palabra[i]){
      prop2=true;
    }else{
      prop2=false;
      break;
    }
  }
  /*Devolución de resultados*/
  if(prop2){
    console.log("Muy bien Muchacho, lo has conseguido.");

    break;
  }
  if(prop){
    console.log("Sigue así.");
    alert ("Vas por el buen camino")
  }else{
    console.log("Una pena, la has cagado");
    fallos++;
    alert ("Vas por el camino equivocado.")
  }
  console.log("Has cometido: "+fallos+" errores.");
  prop=false;
  console.log(palabra);
  console.log(azar);
}
if(fallos==5){
  console.log("Por tu culpa ahora está muerto.");
}