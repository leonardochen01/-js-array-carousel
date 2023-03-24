//aggiungo due const per i bottoni
const buttonPrev = document.querySelector('#btn1');
const buttonNext = document.querySelector('#btn2');

//array di img
const images = [
  document.getElementById('img1'),
  document.getElementById('img2'),
  document.getElementById('img3'),
  document.getElementById('img4'),
  document.getElementById('img5')
];

//faccio la function eventlistener del secondo bottone ( next )
const maxI = 5;
let i = 1;
buttonNext.addEventListener("click", function(){
i = i >= maxI ? 1 : i + 1; //per questo e il maxI mi sono informato su internet

//rimuovo classe show a tutti e lo aggiungo soltanto all'immagine corrispondente
images.forEach(image => image.classList.remove("show"));
images[i - 1].classList.add("show");
})

//inizio function del primo bottone ( prev )
const minII = 1;
let ii = 5;
buttonPrev.addEventListener("click", function(){
  
  images.forEach(image => image.classList.remove("show"));
  images[ii - 1].classList.add("show");
  ii = ii <= minII ? 5 : ii - 1;
  console.log(i)
}) //PROBLEMA, ho fatto copia e incolla della function precedente e ho invertito i dati, apparentemente funziona ma nella console vedo che il counter non scende correttamente, comunque sia non penso di saperlo e volerlo modificare, anche perchè se funziona allora non si tocca
//okay. non riesco a farlo funzionare, se clicco sia prev che next le immagini non scorrono bene, provero a inventarmi qualcosa