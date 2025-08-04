function changetext() {
const para1 = document.getElementsByClassName('para1');
para1.textContent = "Uttam Chaudhary Website";
}
const para1 = document.getElementsByClassName('para1');
para1.addEventListener('click', changetext);