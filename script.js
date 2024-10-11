// const pool = document.getElementById('pool');
// const ball = document.getElementById('ball');
// pool.addEventListener('click', (event) => {
//  const fieldRect = pool.getBoundingClientRect();
//  const x = event.clientX - fieldRect.left;
//  const y = event.clientY - fieldRect.top;

//  ball.style.left = `${x - ball.offsetWidth / 2}px`;
//  ball.style.top = `${x - ball.offsetHeight / 2}px`;
// })

// const pool = document.getElementById('pool');
// const ball = document.getElementById('ball');

// pool.addEventListener('click', function(event) {

//     const poolRect = pool.getBoundingClientRect();
//     const ballRect = ball.getBoundingClientRect();
//     const clickX = event.clientX - poolRect.left;
//     const clickY = event.clientY - poolRect.top;
//     const minX = ballRect.width / 2;
//     const minY = ballRect.height / 2;
//     const maxX = poolRect.width - ballRect.width / 2;
//     const maxY = poolRect.height - ballRect.height / 2;

//     const newX = Math.max(minX, Math.min(clickX, maxX));
//     const newY = Math.max(minY, Math.min(clickY, maxY));

//     ball.style.left = `${newX - ballRect.width / 2}px`;
//     ball.style.top = `${newY - ballRect.height / 2}px`;
// });

// const dino = document.querySelector('.dino');
// const player = document.querySelector('.dino-player');
// const cactus = document.querySelector('.dino-cactus');
// const pointsEl = document.querySelector('.dino-points');
// const overlayEl = document.querySelector('.dino-overlay');
// const resultEl = document.querySelector('.dino-results');
// const butEl = document.querySelector('.dino-but');

// let x = Math.floor(player.getBoundingClientRect().x + player.getBoundingClientRect().width / 2);
// let y = Math.floor(player.getBoundingClientRect().y + player.getBoundingClientRect().width / 2);

// let points = 0;
// let timer1;
// let timer2;
// let timer3;
// let isAnimating = false;

// const resetGame = () => {
//     player.style.left = '100px';
//     player.style.bottom = '15px';
//     cactus.style.right = '-50px';
//     cactus.style.bottom = '15px';
//     points = 0;
// }

// const cactusRun = () => {
//     cactus.style.right = `${Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05}px`;
//     x = Math.floor(cactus.getBoundingClientRect().x + cactus.getBoundingClientRect().width / 2);
//     y = Math.floor(cactus.getBoundingClientRect().y + cactus.getBoundingClientRect().width / 2);

//     if (x < 0) {
//         cactus.style.display = 'none';
//         cactus.style.right = '-50px';
//         setTimeout(() => cactus.style.display = 'block', 200)
//     }
// };

// const checkCollision = () => {
//     const playerRect = player.getBoundingClientRect();
//     const cactusRect = cactus.getBoundingClientRect();

//     const playerX = Math.floor(playerRect.x);
//     const playerY = Math.floor(playerRect.y);
//     const playerWidth = Math.floor(playerRect.width);
//     const playerHeight = Math.floor(playerRect.height);

//     const cactusX = Math.floor(cactusRect.x);
//     const cactusY = Math.floor(cactusRect.y);
//     const cactusWidth = Math.floor(cactusRect.width);
//     const cactusHeight = Math.floor(cactusRect.height);

//     if (
//         playerX < cactusX + cactusWidth &&
//         playerX + playerWidth > cactusX &&
//         playerY < cactusY + cactusHeight &&
//         playerY + playerHeight > cactusY
//     ) {
//         overlayEl.style.display = 'flex';
//         player.style.display = 'none';
//         pointsEl.style.display = 'none';
//         butEl.style.display = 'flex';
//         if (points >= localStorage.getItem('dinoRecord')) localStorage.setItem('dinoRecord', points);
//         resultEl.innerHTML = `
//         Game over
//         <br>
//         ${points} points
//         <br>
//         Record ${localStorage.getItem('dinoRecord')}
//         `
//         clearInterval(timer1);
//         clearInterval(timer2);
//         clearInterval(timer3);

//         resetGame();
//     }
// };

// document.addEventListener(`keydown`, (e) => {
//     if (e.key === 'w' && !isAnimating) {
//         isAnimating = true;
//         player.style.bottom = '105px';
//         setTimeout(() => player.style.bottom = '15px', 600);
//         setTimeout(() => isAnimating = false, 500)
//     }
// });

// butEl.addEventListener('click', () => {
//     overlayEl.style.display = 'none';
//     player.style.display = 'block';
//     pointsEl.style.display = 'block';
//     timer1 = setInterval(cactusRun, 50);
//     timer2 = setInterval(checkCollision, 100);
//     timer3 = setInterval(() => {
//         points += 1;
//         pointsEl.innerHTML = `${points} points`;
//     }, 50)
// })

// const startGame = (e) => {
//     if (e.key === 'g') {
//         overlayEl.style.display = 'none';
//         overlayEl.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//         timer1 = setInterval(cactusRun, 50);
//     timer2 = setInterval(checkCollision, 100);
//     timer3 = setInterval(() => {
//         points += 1;
//         pointsEl.innerHTML = `${points} points` ;
//     }, 50)

//         document.removeEventListener('keydown', startGame);
//     }
// }

// document.addEventListener('keydown', startGame);

// resultEl.innerHTML = `Press 'g' to start the game
// <br>
// Press 'w' to jump
// <br>
// Record ${localStorage.getItem('dinoRecord') === null ? 0 : localStorage.getItem('dinoRecord')}`







// const n1 = parseInt(document.getElementById("n1").value);
// const n2 = parseInt(document.getElementById("n2").value);

// const plus = document.getElementById("add");
// const minus = document.getElementById("remove");
// const molt = document.getElementById("moltiplicate");
// const divi = document.getElementById("divis");

// const result = document.getElementById("result");

// plus.addEventListener('click', () => {
//   if(n1 !== NaN && n2 !== NaN){
//   result.textContent = `${n1 + n2}`;
//   }
// });

// minus.addEventListener('click', () => {
//    result.textContent = `${n1 - n2}`;
//  });

//  molt.addEventListener('click', () => {
//    result.textContent = `${n1 * n2}`;
//  });

//  divi.addEventListener('click', () => {
//    if(n2 === 0) {
//       alert('Неможливо виконати дію!');
//    } else {
//       result.textContent = `${n1 / n2}`;
//    }
//  });











const plus = document.getElementById("add"); 
const minus = document.getElementById("remove"); 
const molt = document.getElementById("moltiplicate"); 
const divi = document.getElementById("divis"); 
const result = document.getElementById("result"); 

plus.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (!isNaN(n1) && !isNaN(n2)) { 
    result.textContent = `${n1 + n2}`; 
  } else {
    result.textContent = "Неможливо виконати дію!";
  }
}); 
 
minus.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (!isNaN(n1) && !isNaN(n2)) {
    result.textContent = `${n1 - n2}`; 
  } else {
    result.textContent = "Неможливо виконати дію!";
  }
}); 
 
molt.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (!isNaN(n1) && !isNaN(n2)) {
    result.textContent = `${n1 * n2}`; 
  } else {
    result.textContent = "Неможливо виконати дію!";
  }
}); 
 
divi.addEventListener('click', () => { 
  const n1 = parseInt(document.getElementById("n1").value); 
  const n2 = parseInt(document.getElementById("n2").value); 
  if (isNaN(n2) || n2 === 0) { 
    alert('Неможливо виконати дію!'); 
  } else if (!isNaN(n1)) {
    result.textContent = `${n1 / n2}`; 
  } else {
    result.textContent = "Неможливо виконати дію!";
  }
});



















// const birthYearInput = document.getElementById("birthYear");
// const checkButton = document.getElementById("checkButton");
// const resultElement = document.getElementById("result");

// checkButton.addEventListener("click", function() {

//     const year = parseInt(birthYearInput.value);

//     let isLeapYear;
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         isLeapYear = true;
//     } else {
//         isLeapYear = false;
//     }

//     if (isLeapYear) {
//         resultElement.innerHTML = `Рік ${year} був високосним.`;
//     } else {
//         resultElement.innerHTML = `Рік ${year} не був високосним.`;
//     }
// });
