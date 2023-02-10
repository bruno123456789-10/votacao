let votBan = 0;
let votMac = 0;
let total = document.getElementById("total").innerHTML = 0;
document.getElementById("totalVot").innerHTML = total + 1;
function banana() {
    votBan = document.getElementById("banana").innerHTML = votBan + 1;
    total = document.getElementById("total").innerHTML = total + 1;
    document.getElementById("totalVot").innerHTML = total + 1;
}
function maca() {
    votMac = document.getElementById("maca").innerHTML = votMac + 1;
    total = document.getElementById("total").innerHTML = total + 1;
    document.getElementById("totalVot").innerHTML = total + 1;
}