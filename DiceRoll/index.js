function rollDice() {
    const numOfDice = document.getElementById("inp").value;
    const numDice = Number(numOfDice);
    let values = [];
    let imgs = [];
    let kk = document.getElementById("numOut");
    let img = document.getElementById("imgOut");

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        imgs.push(`<img src="${value}.png" alt="Dice ${value}">`);
    }

    kk.textContent = `Dice: ${values.join(", ")}`;
    img.innerHTML = imgs.join(" ");
}
