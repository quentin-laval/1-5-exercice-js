var compteur =0;
var compteur2 =0;

var Madiv= document.getElementById("Methode2")
Madiv.addEventListener("click",UneProcedureQuiChangeLeText);


var Madiv= document.getElementById("Methode3")
Madiv.addEventListener("mouseover",UneProcedureQuiSurvole);


var Madiv= document.getElementById("Methode4")
Madiv.addEventListener("keydown",UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenment) {
    evenment.target.innerHTML = "on a appuyer sur : "+evenment.key
}


function UneProcedureQuiChangeLeText(evenment) {
    compteur++;
    evenment.target.innerHTML = "on a cliquée dessus : "+compteur+"Fois"

}


function UneProcedureQuiSurvole(evenment) {
    compteur2++;
    evenment.target.innerHTML = "On ma survollé "+compteur2+"fois";
}