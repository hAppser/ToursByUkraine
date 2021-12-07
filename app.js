// HTML5CSS.ru
// Аккордион
const coll = document.querySelectorAll(".collapsible");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
// ХАБР
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
// HTML5CSS.ru
// Модальное окно
const modal = document.getElementById('myModal');

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Оповещение ошибки
const order = document.querySelector("#get-order");
const alert = document.querySelector(".alert")
order.addEventListener('click', function showAlert() {
  modal.style.display = "none";
  alert.style.display = "block"
})
if(alert.classList.toggle('activated')) {
  function closeAlert() {
    alert.style.display = "none";
  }
}
