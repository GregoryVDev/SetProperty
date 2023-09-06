
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const reponse = document.querySelector('p');

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "green";
});

btn2.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "red";
});

// ------------------------------------------------------------

// Mouse Events

const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -50%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "pink";
});

reponse.addEventListener('mouseover', () => {
    reponse.style.transform = "rotate(2deg)";
});

// ------------------------------------------------------------

// KeyPress Event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');


document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if(e.key === "j") {
        keypressContainer.style.background = "pink";
    }
    else if(e.key === "h") {
        keypressContainer.style.background = "teal";
    }
    else {
        keypressContainer.style.background = "red";
    }
});


// ------------------------------------------------------------

// Scroll Event


const nav = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);

    if(window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

// ------------------------------------------------------------

// Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
    // console.log(pseudo);
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(cgv.checked);

    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert('Veuillez accepter les CGV')
    }
});

// ------------------------------------------------------------

// Load Event

window.addEventListener("load", () => {
    console.log("Document Chargé !");
});

// ------------------------------------------------------------

// ForEach

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)

 document.body.addEventListener("click", () => {
     console.log("click 1 !");
 }, false);

// Usercapture (Il se lance avant le Bubbling)

 document.body.addEventListener("click", () => {
    console.log("click 2 !");
 }, true);



// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/


// ------------------------------------------------------------

// Stop Propagation

// questionContainer.addEventListener('click', (e)=> {
//     alert("Test !");
//     e.stopPropagation();
// });

// RemoveEventListener

// ------------------------------------------------------------

// BOM (Browser Object Model)

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open('http://google.com', "cours js", "height=600, width=800");
// window.close()


// Evénements adossés à Window
// alert("Hello");



// confirm
btn2.addEventListener('click', () => {
    confirm("Voulez vous vraiment vous tromper ?");
});

// prompt

btn1.addEventListener('click', () => {
    let answer = prompt("Entrez votre nom !");

    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// Timer, compte à rebours
setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
}, 2000);

//  let interval = setInterval(() =>{
//     document.body.innerHTML += `
//         <div class='box'>
//             <h2>Nouvelle Boite !</h2>
//         </div>
//     `;
// }, 1000);

// document.body.addEventListener('click', (/*e*/) => {
//     // console.log(e.target); pour savoir où on clique
//     clearInterval(interval);
// });

// ------------------------------

// Location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//     location.href = "https://www.twitch.tv/";
// };


// ------------------------------


// Navigator

// console.log(navigator.userAgent);


// ------------------------------


// Geolocalisation


// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log("Votre position actuelle est :");
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);


// ------------------------------


// History

// console.log(window.history);
// window.history.back(); Sur Twitch
// history.go(-2) Sur Twitch




// ------------------------------

// SetProperty

window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});