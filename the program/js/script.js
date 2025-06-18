const roll = document.getElementById("roll");
const NUMBER = document.getElementById("NUMBER");

const min = 1;
const max = 6;

roll.onclick = ()=> {
    NUMBER.textContent = Math.round(Math.random()*(max - min))+min ;
}