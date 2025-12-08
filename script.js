/*

let recette={
  nom:"poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients : ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
}



  console.log(`recette ${recette.nom}`) 
  console.log(`difficulté : ${recette.difficulte}`)
  console.log(`temps de préparation: ${recette.tempPreparation}`)
  console.log(`temps de préparation: ${recette.tempCuisson}`)
  console.log(`nombre de part: ${recette.nbrPortions}`)
  console.log(`liste des ingrédients : ${recette.ingredients}`)
  
  
// solution 2

console.log (
`
${recette.nom}
difficulté ${recette.difficulte}
temps de préparation ${recette.tempPreparation}
temps de cuisson${recette.tempCuisson}
nombre de portion ${recette.nbrPortions}
${recette.nbrPortions}

`
)


recette.ingredients.forEach(ingredients => {
console.log(`-${ingredients}`)

});

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



//je veux récupérer chaque recette une par une
//a chaque recette récupéré je veux afficher dans la console : son nom, sa difficulté


recettes.forEach(recette => {
    

console.log (
`
${recette.nom}
difficulté ${recette.difficulte}
temps de préparation ${recette.tempPreparation}
temps de cuisson${recette.tempCuisson}
nombre de portion ${recette.nbrPortions}
${recette.nbrPortions}

`
)


recette.ingredients.forEach(ingredients => {
console.log(`-${ingredients}`)

});

 

  });