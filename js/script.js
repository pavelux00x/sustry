const rollButton = document.querySelector('#roll');
risposta.value = 0;
dado = document.getElementById("modal-content-btn")
dado.classList.add("label-disabled");

function startAnimation() {
  var button = document.getElementById('animatedButton');
  button.classList.add('pulse');
  setTimeout(function() {
    button.classList.remove('pulse');
  }, 2000); 
}

let clickCount = 0;
let lastDiceValue = 0;

var totDiceValue = 0;
function countClicks() {
    clickCount++;
}

function saveDiceValue(value) {
    lastDiceValue = value;
}

let rollCount = 0;

function roll() {
    if (rollCount === 0 ) {
        scene.dataset.rollCountMod5 = ++rollCount % 5;
        const rollResult = Math.floor(Math.random() * 6) + 1;
        scene.querySelector('.die').dataset.result = rollResult;
        dado.classList.remove("label-disabled");
        saveDiceValue(rollResult);
        countClicks();
        risposta = document.getElementById("risposta");
        risposta.value = rollResult;
    }
}

scene.addEventListener('click', roll);

function apri(){
  dado.style.display = "block"
}

function reset(){
  rollCount = 0;
  scene.dataset.rollCountMod5 = 0
  dado.style.display = "none";
}


  const element1 = document.getElementById('duck');

function moveUp() {
  const element1 = document.getElementById('duck');
  const currentPosition = parseInt(window.getComputedStyle(element1).top);
  element1.style.top = (currentPosition - 105) + 'px'; 
  
}

function moveDown() {
  const element1 = document.getElementById('duck');
  const currentPosition = parseInt(window.getComputedStyle(element1).top);
  element1.style.top = (currentPosition + 105) + 'px'; 
}

function moveDownEnd() {
  const element1 = document.getElementById('duck');
  const currentPosition = parseInt(window.getComputedStyle(element1).top);
  element1.style.top = (currentPosition + 120) + 'px'; 
}

function moveLeft() {
  const element1 = document.getElementById('duck');
  const currentPosition = parseInt(window.getComputedStyle(element1).left);
  element1.style.left = (currentPosition - 107) + 'px'; 
}

function moveRight() {
  const element1 = document.getElementById('duck');
  const currentPosition = parseInt(window.getComputedStyle(element1).left);
  element1.style.left = (currentPosition + 107) + 'px'; 
}

function pagina2(){
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
  setTimeout(function() {
    Swal.fire({
      title: "come si gioca?",
      icon: "question",
      text: "Lancia il dado e scopri cosa ti è capitato tra sfide, penitenze e salvataggi! Supera le sfide proposte per andare avanti e raggiungere il traguardo. Fai attenzione.. se perdi la sfida, tornerai indietro di una casella!",
      confirmButtonText: "Ho capito",
      showCloseButton: true,
      willClose: () => {
        startAnimation()
      }
    });
  }, 500);

}
function scrolla() {
    window.scrollTo(0, 0);   
    behavior: 'smooth' 
}

function stallo(){
  Swal.fire({
    title: "Fase di stallo",
    icon: "info",
    text: "Sei stato fortunato! Hai beccato una fase di stallo .. puoi proseguire senza dover superare nessuna sfida!",
    confirmButtonText: "Prosegui",
    showCloseButton: true,
    willClose: () => {
      startAnimation()
    }
  }); 
}

function operazione() {
  document.getElementById("popup1").style.display = "block";
}

function closePopup() {
  document.getElementById("popup1").style.display = "none";
  document.getElementById("admin-content").innerHTML = ""
  document.getElementById("paragraf").innerHTML = " "

}

function closePopup1() {
  document.getElementById("popup2").style.display = "none";
}

function closePopup2() {
  document.getElementById("popup3").style.display = "none";
  document.getElementById("subtitle").textContent = ""
}

function closePopup3() {
  document.getElementById("popup4").style.display = "none";
}

function closePopup4() {
  document.getElementById("popup5").style.display = "none";
  document.getElementById("content_4").innerHTML = ""
}

function closePopup5() {
  document.getElementById("popup6").style.display = "none";
  document.getElementById("content_5").innerHTML = ""
}

function closePopup6() {
  document.getElementById("popup7").style.display = "none";
    startAnimation();
}

function closePopup7() {
  document.getElementById("game").style.display = "none";
  document.getElementById("risultato").innerHTML = ""
}

function openPopup(){
  document.getElementById("popup4").style.display = "block";
}

function openPopup1(){
  document.getElementById("popup5").style.display = "block";
}

function openPopup2(){
  document.getElementById("popup6").style.display = "block";
}

ver = false
wrong = false
function controlla(){
  var admin_answer = document.getElementById("admin-answer").value;
  var app = document.getElementById("admin-content").textContent;
  var correct_answer = eval(app);
  admin_answer = parseFloat(admin_answer); 
  if(correct_answer == admin_answer){
    document.getElementById("admin-answer").value = "";
    document.getElementById("paragraf").innerHTML = "risposta esatta!"
    setTimeout(function() {
      closePopup();
      startAnimation();
  }, 1000);
    ver = true
  }
  else if(admin_answer == "" && ver == false){
    document.getElementById("paragraf").innerHTML = "non hai risposto in tempo! La risposta era " + correct_answer
    setTimeout(closePopup(), 2000);
    document.getElementById("popup2").style.display = "block";
  }
  else if(admin_answer !== correct_answer && ver == false){
    wrong = true
    document.getElementById("paragraf").innerHTML = "risposta errata! La risposta era " + correct_answer
    setTimeout(closePopup(), 2000);
    document.getElementById("popup2").style.display = "block";
  }
}

function controllaBis(){
  var admin_answer = parseInt(document.getElementById("admin-answer1").value, 10);
  var app = document.getElementById("admin-content1").textContent;
  var correct_answer = parseInt(app, 10);
  var content = document.getElementById("subtitle");
  var n = parseInt(document.getElementById("t").textContent, 10); 

  if(correct_answer === admin_answer){
    document.getElementById("admin-answer1").value = "";
    content.innerHTML = "risposta esatta!";
    setTimeout(function() {
      closePopup2();
      startAnimation();
  }, 1000);

  }
  else{
    n--;
    document.getElementById("t").textContent = n; 
    
    if(n > 0){
      content.innerHTML = "risposta errata, tentativi rimasti: " + n;
      document.getElementById("admin-answer1").value = ""; 
    }
    else{
      document.getElementById("admin-answer1").value = "";
      content.innerHTML = "risposta errata, tentativi terminati! La risposta era " + correct_answer;
      document.getElementById("popup2").style.display = "block";
      setTimeout(closePopup2, 1000); 
      
    }
  }
}

function controllaTris(n){
  first_3 = parseInt(document.getElementById("1_3").value) 
  third_1 = parseInt(document.getElementById("3_1").value)
  fifth_3 = parseInt(document.getElementById("5_3").value)
  fifth_5 = parseInt(document.getElementById("5_5").value)
  one_3 = parseInt(document.getElementById("one_3").value) 
  three_1 = parseInt(document.getElementById("three_1").value)
  five_3 = parseInt(document.getElementById("five_3").value)
  five_5 = parseInt(document.getElementById("five_5").value)
first_three = parseInt(document.getElementById("1_three").value) 
  third_one = parseInt(document.getElementById("3_one").value)
  fifth_three = parseInt(document.getElementById("5_three").value)
  fifth_five = parseInt(document.getElementById("5_five").value)
  if(n == 1){
    if(first_3 == 5 && third_1 == 7 && fifth_3 == 2 && fifth_5 == 10){
          document.getElementById("content_tris").innerHTML = "Hai indovinato!"
          setTimeout(function() {
            closePopup3();
            startAnimation();
        }, 1000);
    }
    else{
      document.getElementById("content_tris").innerHTML = "Hai sbagliato..!"
      document.getElementById("popup2").style.display = "block";
      setTimeout(closePopup3, 1000); 
    }
  }
  else if(n == 2){
    if(one_3 == 10 && three_1 == 1 && five_3 == 20 && five_5 == 25){
      document.getElementById("content_4").innerHTML = "Hai indovinato!"
      setTimeout(function() {
        closePopup4();
        startAnimation();
    }, 1000);
    }
else{
  document.getElementById("content_4").innerHTML = "Hai sbagliato..!"
  document.getElementById("popup2").style.display = "block";
  setTimeout(closePopup4, 1000); 
  }
  }
  else if(n == 3){
    if(first_three == 20 && third_one == 6 && fifth_three == 10 && fifth_five == 20){
      document.getElementById("content_5").innerHTML = "Hai indovinato!"
      setTimeout(function() {
        closePopup5();
        startAnimation();
    }, 1000);
    }
else{
  document.getElementById("content_5").innerHTML = "Hai sbagliato..!"
  document.getElementById("popup2").style.display = "block";
  setTimeout(closePopup5, 1000); 
  }
  }
}

 function operazioneBis() {
  document.getElementById("popup3").style.display = "block";
}

function countToTenInSeconds(n) {
  var admin_answer = document.getElementById("admin-answer").value;
  var app = document.getElementById("admin-content").textContent;
  var correct_answer = eval(app);
  let count = n;
  function printNumber() {
    document.getElementById("countdown").innerHTML = count
    count--
    if(ver || wrong)
    return;
    if (count > 0) {
      setTimeout(printNumber, 1000);
    }
    else{
        controlla()
    }
  }
  printNumber();
}

function avvisoIndietro(){
  Swal.fire({
    icon: "warning",
    title: "Penitenza...",
    text: "Sei stato sfortunato, dovrai tornare indietro di una casella!",
    showCloseButton: true,
    willClose: () => {
      startAnimation()
    }
  });
}

function riavviaPagina() {
  scrolla()
  location.reload();
}

function avvisoPorta(){

  document.getElementById("popup7").style.display = "block";
}

function gioca1() {
  document.getElementById("game").style.display = "block"
  }


  function controllo() {
    num1 = document.getElementById("number_one").textContent
    num2 = document.getElementById("number_two").textContent
    let confronto = document.getElementById('confronto').value;
    console.log(confronto)
      if ((num1 == num2 && confronto == "uguale")
          || (num1 < num2  && confronto == "minore") 
          || (num1 > num2 && confronto == "maggiore")){
          document.getElementById("risultato").innerHTML = 'Ottimo! Hai indovinato!'; 
          setTimeout(function() {
            closePopup7();
            startAnimation();
        }, 1000); 
        } else {
          document.getElementById("risultato").innerHTML = 'Hai sbagliato!';
          document.getElementById("popup2").style.display = "block";
          setTimeout(closePopup7(), 1000); 
        } 
  }

  function showPopup() {
    attivaAudio()
    $('.popup-wrap').fadeIn(500);
$('.popup-wrap').removeClass('transform-out').addClass('transform-in');
    document.getElementById('victory').style.display = 'block';
    document.getElementById('overlay1').style.display = 'block';
  const duration = 15 * 1000,
animationEnd = Date.now() + duration,
defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
const timeLeft = animationEnd - Date.now();

if (timeLeft <= 0) {
  return clearInterval(interval);
}

const particleCount = 50 * (timeLeft / duration);

confetti(
  Object.assign({}, defaults, {
    particleCount,
    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
  })
);
confetti(
  Object.assign({}, defaults, {
    particleCount,
    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
  })
);
}, 250);

}

function chiudiPopup() {
  $('.popup-wrap').fadeOut(500);
  $('.popup-wrap').removeClass('transform-in').addClass('transform-out');
  riavviaPagina()
    document.getElementById('victory').style.display = 'none';
    document.getElementById('overlay1').style.display = 'none';
}

function attivaAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
  setTimeout(function() {
    audio.pause();
    audio.currentTime = 0;
  }, 7000); 
} 

