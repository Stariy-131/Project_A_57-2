const slides = document.querySelector(".slides");

slides.addEventListener("click", function (event) {
    delit ();
    add ();
});

function add () {
    const slide = event.target.closest(".slide"); //Хрен знает почему, но почему то оно работает только в таком виде... Если добавить к функции event оно все ломается, а без него оно работает нормально.
    if (!slide) return;
    slide.classList.add("action");  
}

function delit () {
    const active = document.querySelector(".slide.action");
    if (active) {
        active.classList.remove("action");
    }
}

//Пока что к сожалению не могу сделать анимацию открытия, так как еще не изучил эту тему лично.