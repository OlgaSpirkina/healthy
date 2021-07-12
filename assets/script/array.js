// un tableau d'objets
let recipesList = [
  {
    id: 0,
    name: 'Avocado toast',
    level: 1,
    ingredients:['une tranche de pain', 'un avocado mur', 'un oeuf dur', 'huile d\'olive', 'graines de tournesole'],
    coockingTime: '15 min',
    img: 'assets/img/avocado.jpg'
  },
  {
    id: 1,
    name: 'Salade de Tomates',
    level: 1,
    ingredients:['tomates frèches', 'jeunes pouces de salade', 'la roquette',
    'graines de tournesole', 'huile d\'olive',
    'olives sans noyau'
    ],
    coockingTime: '15 min',
    img: 'assets/img/tomato-bowl.jpg'
  },
  {
    id: 2,
    name: 'Quinoa bowl',
    level: 2,
    ingredients:['Quinoa', 'concombre', 'poivron rouge',
    'cernaux de noix', 'percile',
    'huile de colza'
    ],
    coockingTime: '30 min',
    img: 'assets/img/quinoa.jpg'
  },
  {
    id:3,
    name: 'Soupe de butternut à la truffe',
    level: 3,
    ingredients: ['Courge butternut', 'sauce à la truffe', 'oignons',
    'feuilles de basilic', 'huile d\'olive'
    ],
    coockingTime: '45 min',
    img: 'assets/img/butternut.jpg'
  },
  {
    id: 4,
    name: 'Salade de crudités',
    level: 1,
    ingredients: ['Concombre', 'poivron jaune et rouge', 'oignon',
    'olives sans noyau', 'jeunes pousses de salade',
    'huile de colza'
    ],
    coockingTime: '20 min',
    img: 'assets/img/crudites.jpg'
  },
  {
    id: 5,
    name: 'Curry veggi',
    level: 4,
    ingredients: ['Carotte', 'pommes de terre',
    'aubergine', 'courgette', 'lait de coco',
    'pois chiche', 'd\'ail'
    ],
    coockingTime: '55 min',
    img: 'assets/img/curry.jpg'
  },
  {
    id: 6,
    name: 'Salade aux falafels',
    level: 3,
    ingredients: ['Pois chiche', 'poivron rouge',
    'jeunes pousses', 'choux rouge', 'percile',
    'carottes', 'oignon', 'huile d\'olive'
    ],
    coockingTime: '30 min',
    img: 'assets/img/falafel.jpg'
  },
  {
    id: 7,
    name: 'Asperge et tomates-cerise',
    level: 1,
    ingredients:   ['Asperge', 'tomates-cerise',
    'oeuf dur', 'persile',
    'huile de colza'
    ],
    coockingTime: '30 min',
    img: 'assets/img/asperge.jpg'
  },
  {
    id: 8,
    name: 'Toast aux figues fraiches',
    level: 1,
    ingredients: ['Pain complet', 'figues fraiches',
    'fromage de chevre en tranche', 'graines de courge',
    'feuilles de mente'
    ],
    coockingTime: '10 min',
    img: 'assets/img/fig.jpg'
  }
];
// la bar de recherche
const input = document.getElementById("searchBar");
input.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredRecipes = recipesList.filter(eachRecipe => {
    return (
      eachRecipe.name.toLowerCase().includes(searchString)
      ||
      eachRecipe.ingredients.toString().toLowerCase().includes(searchString) //je convertis le tableau d'ingredients en string
    );
  });
  // j'appelle la fonction qui génére les cartes avec la fonction qui filtre comme argument
  displayRecipesAsCards(filteredRecipes);

});
// la fonction qui parcours un tableau et permet d'afficher les elements du tableau dans le html en forme d'une carte bootstrap
const displayRecipesAsCards = (anyArray) => {
  const htmlString = anyArray.map((arrayElement) => {
// la carte qui sera afficher pour chaque element du tableau
    return `
    <div id="item_${arrayElement.id}" class="card m-3" style="width: 30rem;">
     <img src="${arrayElement.img}" class="card-img-top img-fluid" style="height: 20rem;" alt="logo de la sociéte ${arrayElement.name}">
      <div class="card-body">
        <h5 class="card-title mb-5">${arrayElement.name}</h5>
        <p class="card-text m-3"><i class="fas fa-3x fa-clock"></i><span class="mx-2">${arrayElement.coockingTime}</span></p>
        <button class="btn btn-primary" onclick="displayPopup('${arrayElement.name}', '${arrayElement.level}', '${arrayElement.id}')">Consulter</button>
      </div>
    </div>
    `;
  })
  .join('');
  document.getElementById("displayCards").innerHTML = htmlString;
}
// j'appelle la fonction qui va trier / searchBar
displayRecipesAsCards(recipesList);

// afficher l'onglet avec plus de détaille consernant chaque offre. L'onglet est composé des divs stylisées
// elle est appeller au moment de génération des cartes (à la ligne 167)
function displayPopup(name, level, id){
      recipesList.forEach((item) => {
        if(item.name == name){
          let answer =
          `
          <div id="popup" class="popup col-12">
            <div id="popup-heading">
              <i class="far fa-2x fa-window-close m-2" onclick="closeIt()"></i>
              <p class="m-2"><small>Savoir plus sur les ingrédients</small></p>
            </div>
            <div id="popup-title">
              <h1>${name}</h1>
              <div>
                <h2 id="lemon-level">Niveau: </h2>
              </div>
            </div>
            <div id="popup-body">
              <h3 class="m-2">Ingrédients</h3>
              <ul id="displayTechnos">
              </ul>
            </div>
            <div id="popup-footer">
              <a href="#" target="_blank" class="btn m-2"><i class="fas fa-3x fa-share-alt-square"></i><small>partager!</small></a>
            </div>
          </div>
          `;
          document.getElementById('displayPopup').innerHTML += answer;
          // j'appelle la fonction qui affiche toutes les ingredients utilisées en tant que la list non-ordonnée
          displayList(`${id}`);
          levelFunction(`${id}`);
        }
      });
}

// fermer l'onglet explicatif est appeller à la ligne 186
function closeIt(){
  document.getElementById('displayPopup').innerHTML = "";
}
// pour afficher la liste des ingredients utilisées je parcours le tableau de la clé recipesList.ingredients
let displayList = (index) =>{
  recipesList.forEach((item) => {
    if(index == item.id){
      console.log(item.ingredients);
      item.ingredients.forEach((elems) => {
          document.getElementById('displayTechnos').innerHTML += `<li class="mx-auto">${elems}</li>`;
      });
    }
  });
}
let levelFunction = (index) =>{
  recipesList.forEach((item) => {
    if(index == item.id){
      for(let i=1; i<=item.level; i++){
        document.getElementById('lemon-level').innerHTML += `<i class="fas fa-2x fa-lemon"></i>`;
      }
    }


  });

}
