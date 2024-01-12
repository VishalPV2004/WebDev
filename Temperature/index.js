input = document.getElementById("inp");
ctof = document.getElementById("ctof");
ftoc = document.getElementById("ftoc");
res = document.getElementById("result");

let temp;

function convert() {
    if (ftoc.checked) {
        temp = Number(input.value);
        temp = (temp - 32) * 5 / 9;
        res.innerHTML = temp.toFixed(2) + " °C";
    } else if (ctof.checked) {
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        res.innerHTML = temp.toFixed(2) + " °F";
    } else {
        res.innerHTML = "Select a unit";
    }
}
