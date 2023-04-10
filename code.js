var pets = [
{
  "name": "Jennifer",
  "img": "src/images/pets-jennifer.png",
  "type": "Dog",
  "breed": "Labrador",
  "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
  "age": "2 months",
  "inoculations": ["none"],
  "diseases": ["none"],
  "parasites": ["none"],
},
{
  "name": "Sophia",
  "img": "../shelter/src/images/pets-sophia.png",
  "type": "Dog",
  "breed": "Shih tzu",
  "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
  "age": "1 month",
  "inoculations": ["parvovirus"],
  "diseases": ["none"],
  "parasites": ["none"],
},
{
  "name": "Woody",
  "img": "../shelter/src/images/pets-woody.png",
  "type": "Dog",
  "breed": "Golden Retriever",
  "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  "age": "3 years 6 months",
  "inoculations": ["adenovirus", "distemper"],
  "diseases": ["right back leg mobility reduced"],
  "parasites": ["none"],
},
{
  "name": "Scarlett",
  "img": "../shelter/src/images/pets-scarlett.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
  "age": "3 months",
  "inoculations": ["parainfluenza"],
  "diseases": ["none"],
  "parasites": ["none"],
},
{
  "name": "Katrine",
  "img": "../shelter/src/images/pets-katrine.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
  "age": "6 months",
  "inoculations": ["panleukopenia"],
  "diseases": ["none"],
  "parasites": ["none"],
},
{
  "name": "Timmy",
  "img": "../shelter/src/images/pets-timmy.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
  "age": "2 years 3 months",
  "inoculations": ["calicivirus", "viral rhinotracheitis"],
  "diseases": ["kidney stones"],
  "parasites": ["none"],
  
},
{
  "name": "Freddie",
  "img": "../shelter/src/images/pets-freddie.png",
  "type": "Cat",
  "breed": "British Shorthair",
  "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
  "age": "2 months",
  "inoculations": ["rabies"],
  "diseases": ["none"],
  "parasites": ["none"],
},
{
  "name": "Charly",
  "img": "../shelter/src/images/pets-charly.png",
  "type": "Dog",
  "breed": "Jack Russell Terrier",
  "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
  "age": "8 years",
  "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
  "diseases": ["deafness", "blindness"],
  "parasites": ["lice", "fleas"],  
}
]

const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#nav-main");
const menuwrap = document.querySelector("#menu-wrap");
const wrapmenuwrap = document.querySelector("#wrap-menu-wrap");
const buttonLeft = document.querySelector("#button-left");
const buttonRight = document.querySelector("#button-right");
const buttonLeft320 = document.querySelector("#button-left320");
const buttonRight320 = document.querySelector("#button-right320");
const petsSlider = document.querySelector("#pets-slider");
const body = document.body;


//Бургер меню
burger.addEventListener("click", burgerHandler);

  //Слушаем нажатие на бургер и задаем свойства для открытия меню
function burgerHandler(e) {
  e.preventDefault();
  menu.classList.toggle("open");
  menuwrap.classList.toggle("open");
  wrapmenuwrap.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
}

// Слушаем нажатие на пункт меню и задаем свойства закрытия
const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  menu.classList.remove("open");
  menuwrap.classList.remove("open");
  wrapmenuwrap.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("noscroll");
}


// Первый вывод слайдера в pets
pets.sort(() => Math.random()-0.5);
let lastDirection = "left"
let numberCards = 1;
if (window.screen.width <=320 ) {
  numberCards = 1;
  petsSlider.children[3].style.display = "none";
  petsSlider.children[2].style.display = "none";
}
if (window.screen.width > 320 && window.screen.width < 768) {
  numberCards = 2;
  petsSlider.children[3].style.display = "none";
}
if (window.screen.width > 767) numberCards = 3;
showpets();


buttonLeft.addEventListener("click", mixCardsLeft);
buttonLeft320.addEventListener("click", mixCardsLeft);
buttonRight.addEventListener("click", mixCardsRight);
buttonRight320.addEventListener("click", mixCardsRight);

function mixCardsLeft() {
  if (lastDirection == "left" ){
    var arrTemp = [].concat(pets.slice(numberCards,8)).sort(() => Math.random()-0.5);
    pets = [].concat(arrTemp.slice(0,numberCards),pets.slice(0,numberCards),arrTemp.slice(numberCards,8-numberCards));
    showpets();
  }
  if (lastDirection == "right" ){
    pets = [].concat(pets.slice(numberCards,numberCards*2),pets.slice(0,numberCards),pets.slice(numberCards*2,8));
    lastDirection = "left";
    showpets();
  }
}

function mixCardsRight() {
  if (lastDirection == "right" ){
    var arrTemp = [].concat(pets.slice(numberCards,8)).sort(() => Math.random()-0.5);
    pets = [].concat(arrTemp.slice(0,numberCards),pets.slice(0,numberCards),arrTemp.slice(numberCards,8-numberCards));
    showpets();
  }
  if (lastDirection == "left" ){
    pets = [].concat(pets.slice(numberCards,numberCards*2),pets.slice(0,numberCards),pets.slice(numberCards*2,8));
    lastDirection = "right";
    showpets();
  }
}

function showpets() {
  for (let i=0; i <= numberCards-1; i++) {
    petsSlider.children[i+1].children[0].src  = pets[i].img;
  petsSlider.children[i+1].children[1].innerText = pets[i].name;
   
 }
}




