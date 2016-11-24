var tableaux = document.getElementById('table');
var userInput = prompt("entrer un mot");
var mot = userInput;

var cell = tableaux.getElementsByTagName("td");
cell[0].innerHTML = "<span id='color'>"+ userInput + "</span> ";
cell[1].innerHTML = userInput.toLowerCase();
cell[2].innerHTML = userInput.toUpperCase();

var voy = comp(mot);
cell[3].innerHTML = "votre mot contient " +voy+ " de voyelles";
cell[4].innerHTML = "votre mot contient " +(mot.length - voy) +" de consonnes";


function comp(mot){
	var longueur = 0;
	var nombre = 0;
	longueur = mot.length;
	for (var i = 0; i< longueur; i++)
	{
		if (mot.charAt(i) == 'a' || mot.charAt(i) =='e' || mot.charAt(i) == 'i' || mot.charAt(i) == 'y' || mot.charAt(i) == 'o'|| mot.charAt(i) == 'u') 
			nombre++;
		  if (mot.charAt(i) == 'A' || mot.charAt(i) =='E' || mot.charAt(i) == 'I' || mot.charAt(i) == 'Y' || mot.charAt(i) == 'O'|| mot.charAt(i) == 'U') 
	nombre++;

	}
      return nombre;
	
           
}
	//console.log(voy);

	var inver = mot.split("").reverse().join("");
    cell[5].innerHTML = "Voici votre mot inversé : "+inver+"";



if (inver==mot){
	cell[6].innerHTML = "ce mot "+mot+" est un paladrome";
}
else {
	cell[6].innerHTML = "ce mot "+mot+" n'est pas un paladrome"
}