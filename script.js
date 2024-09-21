// const pool = document.getElementById('pool');
// const ball = document.getElementById('ball');
// pool.addEventListener('click', (event) => {
//  const fieldRect = pool.getBoundingClientRect();
//  const x = event.clientX - fieldRect.left;
//  const y = event.clientY - fieldRect.top;

//  ball.style.left = `${x - ball.offsetWidth / 2}px`;
//  ball.style.top = `${x - ball.offsetHeight / 2}px`;
// })

const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', function(event) {
    // Отримуємо розміри поля і м'яча
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    // Координати кліку відносно поля
    const clickX = event.clientX - fieldRect.left;
    const clickY = event.clientY - fieldRect.top;

    // Визначаємо максимальні та мінімальні межі для центру м'яча
    const minX = ballRect.width / 2;
    const minY = ballRect.height / 2;
    const maxX = fieldRect.width - ballRect.width / 2;
    const maxY = fieldRect.height - ballRect.height / 2;

    // Обчислюємо нові координати з урахуванням меж поля
    const newX = Math.max(minX, Math.min(clickX, maxX));
    const newY = Math.max(minY, Math.min(clickY, maxY));

    // Встановлюємо нові координати м'яча
    ball.style.left = `${newX - ballRect.width / 2}px`;
    ball.style.top = `${newY - ballRect.height / 2}px`;
});