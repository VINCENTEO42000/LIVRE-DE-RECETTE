let boissons = [
  {
    nom: "Coca",
    prix: 1.50,
    disponible: true,
  },
  {
    nom: "Café",
    prix: 0.90,
    disponible: true,
  },
  {
    nom: "Thé",
    prix: 0.50,
    disponible: false,
  },
  {
    nom: "Jus d'orange",
    prix: 1,
    disponible: true,
  },
  {
    nom: "Matcha",
    prix: 1.30,
    disponible: true,
  }
]

// AFFICHER LES BOISSONS DISPONIBLES ET INDISPONIBLE
// PARAMETRE : true ou false

// utiliser un prompt pour taper disponible ou indiponible
// une condition pour disponible ou pas disponible



let reponse = prompt("quel est la disponibilité de la boisson ?");

if (reponse === "coca" || reponse === "café" || reponse === "jus d'orange" ) {
    alert("disponible");
}
 
else   {
    alert("non disponible");
}

