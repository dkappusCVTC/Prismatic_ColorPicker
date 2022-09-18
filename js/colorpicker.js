var rRGB = document.getElementById('rRGB');
var gRGB = document.getElementById('gRGB');
var bRGB = document.getElementById('bRGB');
var txtOutput = document.getElementById('convertedValues');
var colorDisplay = document.getElementById('colorDisplay');

var red = 0;
var green = 0;
var blue = 0;
var luminance = 0;

rRGB.addEventListener("keyup", function (change) {
    if (rRGB.value) red = Number(rRGB.value);
    displayColorResults();
});

gRGB.addEventListener("keyup", function (change) {
    if (gRGB.value) green = Number(gRGB.value);
    displayColorResults();
});

bRGB.addEventListener("keyup", function (change) {
    if (bRGB.value) blue = Number(bRGB.value);
    displayColorResults();
});

function displayColorResults() {
    let totalValue = red + green + blue;
    let r = red == 0 ? 0 : Math.round(10*(1 / totalValue * red))/10;
    let g = green == 0 ? 0 : Math.round(10*(1 / totalValue * green))/10;
    let b = blue == 0 ? 0 : Math.round(10*(1 / totalValue * blue))/10;

    luminance = Math.max(r, g, b);
    txtOutput.innerHTML = `(${r}, ${g}, ${b}, ${luminance})`;

    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

