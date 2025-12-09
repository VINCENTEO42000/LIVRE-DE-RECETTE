
/**
 * role affiche la recette de cuisine en console 
 * parametre: recette la recette a afficher en console 
 * retour rien
 */
/*
function afficheEnConsole(recette){
    console.log(`%c${recette.nom}`,"color:red; font-size:42px; text-transform:uppercase")
    console.log(`Diffculté : ${recette.difficulte}`)
    console.log(`Temps de préparation : ${recette.tempPreparation}`)
    console.log(`Temps de cuisson : ${recette.tempCuisson}`)
    console.log(`Pour ${recette.nbrPortions} personnes`)
    console.log("%cIngredients : ", "color:green; font-size: 18px; font-weight: bold")
    recette.ingredients.forEach(ingr=>{
        console.log(`- ${ingr}`)
    })

}
    */


let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];

/*
recettes.forEach(recette=>{
    afficheEnConsole(recette)
    
})

*/

// je construit la liste des ingrédient :







recettes.forEach(recette => {

let liste=""

    recette.ingredients.forEach(ingredient=> {

        liste +=`<li> ${ingredient} </li>`
        
    });
    console.log (liste)

    document.getElementById("section1").innerHTML +=

    `
    <div class="card">



<h2 class="mb-10"> ${recette.nom} </h2>
<p class="mb-10"> difficulté : ${recette.tempPreparation}</p>
<p class="mb-10"> temps de cuisson : ${recette.tempCuisson}</p>
<p class="mb-10"> nombre de part : ${recette.nbrPortions}</p>
<p class="mb-10"> ma liste d'ingrédients : <p>
<ul class="mb-10"> ${liste} </ul>

    </div>   
    
    
    `
    
})