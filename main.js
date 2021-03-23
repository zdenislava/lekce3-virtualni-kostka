// tady je místo pro náš program

function diceRoll() {
    let roll = Math.floor(Math.random() * 6) + 1;

    document.getElementById("zprava").innerHTML = "Hodila jsi " + roll;

    document.querySelector("#kostka").src = "obrazky/" + roll + ".png";

    if (roll == 6) {
       zprava.innerHTML = "Hodila jsi 6, vyhrála jsi!";
    }
    else {
        zprava.innerHTML = "Hodila jsi " + roll + ", házej znova";
    };
}
