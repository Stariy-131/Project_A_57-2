const counterBtn = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const resetBtn = document.getElementById("reset");

let count = 0;

function startCounter() {
    counterBtn.textContent = count;
    if (count === 0) {
        counterBtn.style.color = "grey";
    } else if (count > 0) {
        counterBtn.style.color = "green";
    } else {
        counterBtn.style.color = "red";
    }
}

window.addEventListener("load", startCounter);    

function createPlusCounter() {

    return function () {
        count++;
        // return count;
    };
}

const plusNamber = createPlusCounter();

plusBtn.addEventListener("click", function() {
    counterBtn.innerHTML = plusNamber();
    startCounter();
});

function createMinusCounter() {

    return function () {
        count--;
        // return count;
    };
}

const minusNamber = createMinusCounter();

minusBtn.addEventListener("click", function() {
    counterBtn.innerHTML = minusNamber();
    startCounter();
});

function resetNamber() {
    count = 0;
    return count;
}

resetBtn.addEventListener("click", function() {
    counterBtn.textContent = resetNamber();
    startCounter();
});
