let adviceText = document.querySelector('.advice-text');
let adviceNumber = document.querySelector('.advice-number');
let diceButton = document.querySelector('.dice-button').addEventListener('click', getAdvice);


async function getAdvice (){
    adviceText.classList.remove('fade-in');
    adviceText.classList.add('fade-out');

    const timestamp = Date.now();
    const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
    const data = await res.json();
    console.log(data)
    
    adviceText.textContent = `"${data.slip.advice}"`;
    adviceNumber.textContent = `ADVICE #${data.slip.id}`

    adviceText.classList.remove('fade-out');
    adviceText.classList.add('fade-in');
}
