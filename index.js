document.getElementById('sub').onclick = function()
{
    var rad = document.getElementById("cal").value;
    rad = Number(rad)
    document.getElementById("nein").textContent = 2 * 3.14 * rad;
}