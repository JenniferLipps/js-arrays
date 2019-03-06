const dinosaurs = [
    {
        dinoType: 't-rex'
    },
    {
        dinoType: 'triceratops'
    },
    {
        dinoType: 'brontosaurus'
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
    domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
  }
  printToDom('dino-barn', domString);
};

//(Organizational structure. This is where the application starts and runs everything on the page:)
const init = () => {
  buildDinosaurs();
};

init();