window.addEventListener("DOMContentLoaded", () => {
    let comentBtn = document.querySelector('.coment-btn');
    let comentBtnActive = false;
    comentBtn.addEventListener('click', (e) => {
        if (!comentBtnActive) {
            document.querySelector('.btnComentActive').classList.remove('display-none');
            comentBtnActive = true;
            comentBtn.innerHTML = "Скрыть отзывы";
        } else {
            document.querySelector('.btnComentActive').classList.add('display-none');
            comentBtnActive = false;
            comentBtn.innerHTML = "Показать все отзывы";
        }
    });
});

// обратная связь //
let feedbackButton = document.querySelector('.feedback-button');
let phoneFeedback = document.getElementById("phone-feedback");
phoneFeedback.addEventListener('input', (e) => {
    validNumber(document.getElementById("phone-feedback"));
});

function validNumber(input) { 
    var value = input.value; 
    var rep = /[\.;":'a-zA-Zа-яА-Я]/; 
    if (rep.test(value)) { 
        value = value.replace(rep, ''); 
        input.value = value; 
    } 
} 

feedbackButton.addEventListener('click', (e) => {
    let name = document.getElementById("name-feedback");
    let phone = document.getElementById("phone-feedback");
    let email = document.getElementById("email-feedback");
    let message = document.getElementById("msg-feedback");

    let valid = true;
    if (name.value.trim() == "") {
        valid = false;
        name.classList.add("error");
    } else {
        name.classList.remove("error");
    }

    let validPhone = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    if (!validPhone.test(phone.value)) {
        valid = false;
        phone.classList.add("error");
    } else {
        phone.classList.remove("error");
    }
    
    let pattern = /^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!pattern.test(email.value)) {
        valid = false;
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    if (message.value.trim() == "") {
        valid = false;
        message.classList.add("error");
    } else {
        message.classList.remove("error");
    }

    if (valid) {
        alert("Спасибо за отправку сообщения!");
        name.value = "";
        phone.value = "";
        email.value = "";
        message.value = "";
    }
});

let topBars = document.querySelectorAll('.topBar');
let indexTopBars = 0;
let timerTopBars = setInterval(() => {
    for (let i = 0; i < 3; i++) {
        if (i == indexTopBars) {
            topBars[i].classList.remove("display-none");
        } else {
            topBars[i].classList.add("display-none");
        }
    }
    indexTopBars++;
    if (indexTopBars == 3) {
        indexTopBars = 0;
    }
}, 3000);

window.addEventListener('load', function() {
    setTimeout(function() {
        if (window.location.pathname == "/index.html") {
            window.location.href = 'index.html#feedback'; 
        }
    }, 10000);
});

let orderButtun = document.querySelector('.order-button');
orderButtun.addEventListener('click', (e) => {
    let products = document.querySelectorAll('.order-num');
    let name = document.getElementById('name-order');
    let phone = document.getElementById('phone-order');
    let adress = document.getElementById('adress-order');

    let valid = true;
    if (name.value.trim() == "") {
        valid = false;
        name.classList.add("error");
    } else {
        name.classList.remove("error");
    }

    let validPhone = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    if (!validPhone.test(phone.value)) {
        valid = false;
        phone.classList.add("error");
    } else {
        phone.classList.remove("error");
    }

    if (adress.value.trim() == "") {
        valid = false;
        adress.classList.add("error");
    } else {
        adress.classList.remove("error");
    }

    let check = false;
    for (let i = 0; i < 3; i++) {
        if(products[i].value != 0 && products[i].value != null) {
            check = true;
            break;
        }
    }
   
    if (!check) {
        for (let i = 0; i < 3; i++) {
            products[i].classList.add("error");
        }
        valid = false;
    } else {
        for (let i = 0; i < 3; i++) {
            products[i].classList.remove("error");
        }
    }

    if (valid) {
        alert("Спасибо за оформление заказа!");
        name.value = "";
        phone.value = "";
        adress.value = "";
        for (let i = 0; i < 3; i++) {
            products[i].value = null;
        }
    }
});
