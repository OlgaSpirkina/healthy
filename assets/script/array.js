// un tableau d'objets
let companiesList = [
  {
    id: 1,
    name: 'Avocado toast',
    level: 'facile',
    ingredients:['une tranche de pain', 'un avocado mur', 'un oeuf dur', 'huile d\'olive', 'graines de tournesole'],
    coockingTime: '15 min',
    img: 'assets/img/avocado.jpg'
  },
  {
    id: 2,
    name: 'Salade de Tomates',
    level: 'facile',
    ingredients:['tomates frèches', 'jeunes pouces de salade', 'la roquette',
    'graines de tournesole', 'huile d\'olive',
    'olives sans noyau'
    ],
    coockingTime: '15 min',
    img: 'assets/img/tomato-bowl.jpg'
  },
  {
    id: 3,
    name: 'Quinoa bowl',
    level: 'facile',
    ingredients:['Quinoa', 'concombre', 'poivron rouge',
    'cernaux de noix', 'percile',
    'huile de colza'
    ],
    coockingTime: '30 min',
    img: 'assets/img/quinoa.jpg'
  },
  {
    id:4,
    name: 'Soupe de butternut à la truffe',
    level: "moyen",
    ingredients: ['Courge butternut', 'sauce à la truffe', 'oignons',
    'feuilles de basilic', 'huile d\'olive'
    ],
    coockingTime: '45 min',
    img: 'assets/img/butternut.jpg'
  },
  {
    id: 5,
    name: 'Salade de crudités',
    level: 'facile',
    ingredients: ['Concombre', 'poivron jaune et rouge', 'oignon',
    'olives sans noyau', 'jeunes pousses de salade',
    'huile de colza'
    ],
    coockingTime: '20 min',
    img: 'assets/img/crudites.jpg'
  },
  {
    id: 6,
    name: 'Curry veggi',
    level: 'chef',
    ingredients: ['Carotte', 'pommes de terre',
    'aubergine', 'courgette', 'lait de coco',
    'pois chiche', 'd\'ail'
    ],
    coockingTime: '55 min',
    img: 'assets/img/curry.jpg'
  },
  {
    id: 7,
    name: 'Salade aux falafels',
    level: 'moyen',
    ingredients: ['Pois chiche', 'poivron rouge',
    'jeunes pousses', 'choux rouge', 'percile',
    'carottes', 'oignon', 'huile d\'olive'
    ],
    coockingTime: '30 min',
    img: 'assets/img/falafel.jpg'
  },
  {
    id: 8,
    name: 'Asperge et tomates-cerise',
    level: 'facile',
    ingredients:   ['Asperge', 'tomates-cerise',
    'oeuf dur', 'persile',
    'huile de colza'
    ],
    coockingTime: '30 min',
    img: 'assets/img/asperge.jpg'
  },
  {
    id: 9,
    name: 'Toast aux figues fraiches',
    level: 'facile',
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
  const filteredCompanies = companiesList.filter(eachCompany => {
    return (
      eachCompany.name.toLowerCase().includes(searchString) || eachCompany.post.toLowerCase().includes(searchString)
    );
  });
  // j'appelle la fonction qui génére les cartes avec la fonction qui filtre comme argument
  displayCharacters(filteredCompanies);

});
// la fonction qui parcours un tableau et permet d'afficher les elements du tableau dans le html en forme d'une carte bootstrap
const displayCharacters = (anyArray) => {
  const today = new Date();
  const htmlString = anyArray.map((arrayElement) => {
    // début de la fonction qui calcule les jours passés du moment de l'application
      var application = new Date(arrayElement.coockingTime);
      var differenceInTime = today.getTime() - application.getTime();
      var differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24));
      differenceInDays = (
        differenceInDays == 0 ? 'postulé aujourd\'hui' : differenceInDays == 1 ? 'postulé il y a ' + differenceInDays + ' jour' : 'postulé il y a ' + differenceInDays + ' jours'
      );
// la fin de la fonction calculant les jours passés et récupération de la variable differenceInDays

// la carte qui sera afficher pour chaque element du tableau
    return `
    <div id="item_${arrayElement.id}" class="card m-3" style="width: 30rem;">
     <img src="${arrayElement.img}" class="card-img-top img-fluid" style="height: 20rem;" alt="logo de la sociéte ${arrayElement.name}">
      <div class="card-body">
        <h5 class="card-title mb-5">${arrayElement.name}</h5>
        <p class="card-text m-3">${arrayElement.coockingTime}</p>
        <button class="btn btn-primary" onclick="displayPopup('${arrayElement.name}', '${arrayElement.post}', '${arrayElement.id}', '${arrayElement.website}')">Consulter</button>
      </div>
    </div>
    `;
  })
  .join('');
  document.getElementById("displayCards").innerHTML = htmlString;
}
// j'appelle la fonction qui va trier / searchBar
displayCharacters(companiesList);

// afficher l'onglet avec plus de détaille consernant chaque offre. L'onglet est composé des divs stylisées
// elle est appeller au moment de génération des cartes (à la ligne 167)
function displayPopup(name, post, id, web){
      companiesList.forEach((item) => {
        if(item.name == name){
          let answer =
          `
          <div id="popup" class="popup">
            <div id="popup-heading">
              <i class="far fa-2x fa-window-close m-2" onclick="closeIt()"></i>
              <p class="m-2"><small>Savoir plus sur le post</small></p>
            </div>
            <div id="popup-title">
              <h1>${name}</h1>
              <h2>${post}</h2>
            </div>
            <div id="popup-body">
              <ul id="displayTechnos">
              </ul>
            </div>
            <div id="popup-footer">
              <a href="${web}" target="_blank" class="btn m-2">Consulter l'offre</a>
            </div>
          </div>
          `;
          document.getElementById('displayPopup').innerHTML += answer;
          // j'appelle la fonction qui affiche toutes les technologies utilisées en tant que la list non-ordonnée
          displayList(`${id}`);
        }
      });
}

// fermer l'onglet explicatif est appeller à la ligne 186
function closeIt(){
  document.getElementById('displayPopup').innerHTML = "";
}
let displayList = (ids) =>{
  companiesList[ids].technologies.forEach((item) => {
    document.getElementById('displayTechnos').innerHTML += `<li class="mx-auto">${item}</li>`;
})
}
