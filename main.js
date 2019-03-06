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

//(Organizational structure. This is where the application starts and runs everything on the page:)
const init = () => {
  buildDinosaurs();
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