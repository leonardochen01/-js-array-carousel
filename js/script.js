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

//faccio la function eventlistener del secondo bottone
const maxI = 5;
let i = 1;
buttonNext.addEventListener("click", function(){
i = i >= maxI ? 1 : i + 1; //per questo e il maxI mi sono informato su internet
console.log(i)

//rimuovo classe show a tutti e lo aggiungo soltanto all'immagine corrispondente
images.forEach(image => image.classList.remove("show"));
images[i - 1].classList.add("show");
})