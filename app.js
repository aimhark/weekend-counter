// Greet user
const constainer = document.querySelector('.container')
const form = document.querySelector('.nameDiv');
const name = document.querySelector('#name');


// current date
const date = new Date();
const today = date.toLocaleDateString('en-EN', {weekday: 'long'})

// days left until the weekend
const daysLeft = 5 - date.getDay();


const h2 = document.querySelector('.h2');
console.log(today);




form.addEventListener('submit', (e)=>{
    e.preventDefault();
    h2.innerHTML = `Hiya ${name.value}! Today is ${today}. So it's only ${daysLeft} until the weekend!`;
})

