function Entreprise(name, post, technologies=[], applicationDate, website, img){
  this.name = name;
  this.post = post;
  this.technologies = technologies;
  this.applicationDate = applicationDate;
  this.website = website;
  this.img = img;
  this.waitingForTheAnswer = function(){
    const formatYmd = date => date.toISOString().slice(0, 10);
    const today = formatYmd(new Date());
    var differenceInDays =  Math.floor(( Date.parse(today) - Date.parse(`${this.applicationDate}`) ) / 86400000);
// la fonction tertièrre
    return differenceInDays == 0 ? 'postulé aujourd\'hui' : 'postulé il y a ' + differenceInDays + ' jours';
  }
  this.displayCard = function(){
    const card =
      `<div class="card m-2" style="width: 18rem;">` +
      `  <img src="${this.img}" class="card-img-top" alt="logo de la sociéte ${this.nom}"> `+
        '<div class="card-body">' +
          `<h5 class="card-title mb-5">${this.post}</h5>` +
          `<p class="card-text">${this.waitingForTheAnswer()}</p>` +
          `<a href="${this.website}" target="_blank" class="btn btn-primary">Consulter</a>` +
        '</div>'
      '</div>'
    const result = document.getElementById("displayCards").innerHTML += card;
    return result;
  }
}


let galadrim = new Entreprise(
'Galadrim',
'Développeur Full-Stack',
['MySQL', 'Node.js', 'NestJS', 'JavaScript', 'TypeScript', 'React', 'React Native'],
'2021-07-07',
'https://www.welcometothejungle.com/en/companies/galadrim/jobs/stage-developpeur-full-stack_paris',
'assets/img/galadrim.png'
);
let scaleway = new Entreprise(
'Scaleway',
'Front-End Developer, Console (JavaScript, React)',
['REST API', 'JavaScript ES2018', 'CSS-in-JS',
'TESTS: units and functional', 'UI navigation with and without pointers',
'Scaleway, Docker, Ansible', 'Jest, Testing-Library, Enzyme',
'Gitlab, Sentry',
'Docz, Storybook',
'Git, Yarn, Renovate'
],
'2021-06-30',
'https://app.50intech.com/job/scaleway-front-end-developer-console-java-script-react-internship-alternance-paris',
'assets/img/scaleway.png'
);
let micropole = new Entreprise(
'Groupe Micropole',
'Developpeur web/mobile ',
['React', 'Node.js', 'Angular',
'HTML / CSS', 'Google Dialogflow',
'Amazon Lex', 'IBM Watson'
],
'2021-06-30',
'https://www.micropole.com/fr-fr/offres-d-emploi/mic-stginnov-01-developpeur-web-mobile-h-f-en-stage',
'assets/img/micropole.png'
);
let sap = new Entreprise(
'SAP',
'Dveloppeur web/mobile',
['Cloud Studio', 'Robotic Process Automation (RPA)', 'testes unitaires JavaScript',
'GIT/GITHUB', 'gestion du DOM',
'Design Patterns type FLUX, REACT'
],
'2021-07-05',
'https://jobs.sap.com/job/Levallois-Perret-Stagiaire-D%C3%A9veloppeur-JavaScript-d&apos;Application-Web-pour-Intelligent-RPA-FH-92300/683926101/',
'assets/img/sap.png'
);
let numberly = new Entreprise(
'Numberly',
'Front-end Engineer (VueJS)',
['Javascript', 'Vue.js 2', 'Vue.js 3(Typescript)',
'HTML5', 'CSS3/SASS',
'GIT (GitLab)', 'Docker',
'Kubernetes', 'Cypress'
],
'2021-07-05',
'https://jobs.smartrecruiters.com/Numberly/743999756879073-stage-alternance-front-end-engineer-vuejs-',
'assets/img/numberly.png'
);
let dataiku = new Entreprise(
'Dataiku',
'File metadata extraction',
['generate datasets from folders of files', 'basic knowledge of Web development',
'Java', 'JavaScript',
'Python', 'Ruby'
],
'2021-07-06',
'https://www.welcometothejungle.com/fr/companies/dataiku/jobs/software-engineer-intern-folder-to-dataset-recipe-in-dss_paris',
'assets/img/dataiku.png'
);
let criteo = new Entreprise(
'Criteo',
'Backend or Fullstack',
['TypeScript/JavaScript', 'C# (.Net Frmwk, .Net Core)',
'Mesos', 'Frontend: JSON',
'POO', 'Data quality in the RichTimeline'
],
'2021-07-06',
'https://app.50intech.com/job/criteo-software-engineer-internship-6-months-backend-or-fullstack-paris-france',
'assets/img/criteo.png'
);
let axa = new Entreprise(
'Axa',
'Développeur IT',
['Frameworks Python', 'SQL',
'SPARK', 'Adapter les requêtes/batchs SQL existants au nouvel environnement cloud',
'Assurer la qualité de la migration via des tests de non-régression'
],
'2021-07-07',
'https://recrutement.axa.fr/nos-offres-emploi/210006DQ-stage-developpeur-it-f-h',
'assets/img/axa.png'
);
let sparted = new Entreprise(
'Sparted',
'Developer Fullstack Web/Mobile',
['PostgreSQL', 'React',
'React Native', 'Redux',
'Déploiement sur AWS', 'Node.js', 'JavaScript',
'ES2020', 'Docker', 'ElasticSearch',
'Ansible', 'Terraform', 'design UI/UX'
],
'2021-07-07',
'https://sparted.welcomekit.co/jobs/developer-fullstack-web-mobile-cdi_paris_SPART_mzwMoQ7',
'assets/img/sparted.png'
);

// galadrim.displayCard();
// scaleway.displayCard();
// micropole.displayCard();
// sap.displayCard();
// numberly.displayCard();
// dataiku.displayCard();
// criteo.displayCard();
// axa.displayCard();
// sparted.displayCard();
