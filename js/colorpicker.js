var rRGB = document.getElementById('rRGB');
var gRGB = document.getElementById('gRGB');
var bRGB = document.getElementById('bRGB');
var txtOutput = document.getElementById('convertedValues');

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
    console.log(totalValue, red, green, blue);
    let r = Math.round(10*(1 / totalValue * red))/10;
    let g = Math.round(10*(1 / totalValue * green))/10;
    let b = Math.round(10*(1 / totalValue * blue))/10;

    luminance = Math.max(r, g, b);
    txtOutput.innerHTML = `(${r}, ${g}, ${b}, ${luminance})`;
}

