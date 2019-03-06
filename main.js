const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'Bruce',
    },
    {
        dinoType: 'triceratops',
        name: 'Marv',
    },
    {
        dinoType: 'brontosaurus',
        name: 'Neckie',
    }
];

//loop over the dinosaurs
//build up a DOMstring
//print DOMstring to DOM

const printToDom = (divId, textToPrint) => {
 const selectedDiv = document.getElementById(divId);
 selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
  let domString = '';
  for(let i=0; i<dinosaurs.length; i++){
    domString += `<div class='dinosaur'>`
    domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
    domString +=   `<p>${dinosaurs[i].name}</p>`
    domString += `</div>`
  }
  printToDom('dino-barn', domString);
};


const assignments = [
    {
      title: 'product cards',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
      assignmentUrl: 'www.google.com',
    },
    {
        title: 'personal site',
        dueDate: '03/21/2019',
        topic: 'HTML/CSS/JS',
        notes: 'ongoing project',
        assignmentUrl: 'www.google.com',
      },
      {
        title: 'lots of repos',
        dueDate: '03/05/2019',
        topic: 'github',
        notes: 'Use Github a lot.',
        assignmentUrl: 'www.github.com',
      },
      {
        title: 'React',
        dueDate: '06/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use react',
        assignmentUrl: 'www.google.com',
      },
      {
        title: 'capstone',
        dueDate: '08/05/2019',
        topic: 'all front end topics',
        notes: 'Front end final project',
        assignmentUrl: 'www.google.com',
      }
];
//total of 5 assignments
//make a function called buildAssignmentCards, loop over assignments and make a domString
//reuse printToDom to display

const buildAssignmentCards = () => {
  let domString = '';
  for (let i = 0; i < assignments.length; i++) {
    domString += `<div class='assignCard'>`;
    domString += `<div class='assignmentTitle'>${assignments[i].title}</div>`;
    domString += `<strong>${assignments[i].dueDate}</strong>`
    domString += `<p>Get the assignment <a href=${assignments[i].Url}>HERE</a></p>`
    domString += `<p>Topic: ${assignments[i].topic}</p>`
    domString += `<p>Notes: ${assignments[i].notes}</p>`
    domString += `</div>`;
  }
  printToDom('assignCard', domString);
};


//(Organizational structure. This is where the application starts and runs everything on the page:)
const init = () => {
  buildDinosaurs();
  buildAssignmentCards();
};

init();


// //version 1
// const buildDinosaurs = () => {
//     let domString = '';
//     for(let i=0; i<dinosaurs.length; i++){
//       domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
//     }
//     printToDom('dino-barn', domString);
//   };