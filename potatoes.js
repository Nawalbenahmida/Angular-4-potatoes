// Je declare d'abord mes constantes, puis mes variables, puis mes functions

// On écrit les constantes en majuscules, les arrays au pluriel.
const PATATES = ['patate1', 'patate2'];

// Les variables en camelCase.
// Je declare le saladier AVANT la boucle
// Car je vais en avoir besoin des la premiere patate
let saladierPatates = [];


epelucher (patate) {
  // L'econome ne sert qu'a epelucher, je le laisse dans la fonction epelucher
  let econome = 'econome';
  // Renvoie la patate modifiee par la fonction
  return econome + patate
}

couper (patate) {
  let couteau = 'couteau';
  let planche = 'planche';
  return couteau + planche + patate
}

cuire () {
  let poele = 'poele'
  let patatesCuites = poele + saladierPatates;
  console.log(patatesCuites);
}


patates.forEach( (patate) => {
  // Je cree une variable qui recupere la patate
  // qui a ete modifiee par la fonction epelucher
  let patateEpeluchee = epelucher(patate);
  

  // meme chose : je coupe la patate qui a ete epeluchee
  let patateCoupee = couper(patateEpeluchee);

  // Je mets les patates dans le saladier
  saladierPatates.push(patateCoupee)
});

// Je ne cuis que a la fin, une fois que toutes les patates ont ete traitees.
cuire();