// Declare variables
var rRGB = document.getElementById('rRGB');
var gRGB = document.getElementById('gRGB');
var bRGB = document.getElementById('bRGB');
var txtOutput = document.getElementById('convertedValues');
var colorDisplay = document.getElementById('colorDisplay');

var red = 0;
var green = 0;
var blue = 0;

// Red value field listener
rRGB.addEventListener("keyup", function () {
    // Determine if value entered is greater than 1
    if (rRGB.value > 1) {
        return improperInput(rRGB);
    } 
    if (rRGB.value && !isNaN(rRGB.value)) {
        red = Math.round(255 * Number(rRGB.value));
    } else {
        red = 0;
    }
    convertToBarycentric();
});

// Green value field listener
gRGB.addEventListener("keyup", function () {
    // Determine if value entered is greater than 1
    if (gRGB.value > 1) {
        return improperInput(gRGB);
    } 
    if (gRGB.value && !isNaN(gRGB.value)) {
        green = Math.round(255 * Number(gRGB.value));
    } else {
        green = 0;
    }
    convertToBarycentric();
});

// Blue value field listener
bRGB.addEventListener("keyup", function () {
    // Determine if value entered is greater than 1
    if (bRGB.value > 1) {
        return improperInput(bRGB);
    } 
    if (bRGB.value && !isNaN(bRGB.value)) {
        blue = Math.round(255 * Number(bRGB.value));
    } else {
        blue = 0;
    }
    convertToBarycentric();
});

// Function to convert RGB values 
function convertToBarycentric() {
    var luminance = Math.round(10 * (Math.max(red, green, blue) / 255)) / 10;
    let totalValue = red + green + blue;
    let r = red == 0 ? 0 : Math.round(10 * (red / totalValue)) / 10;
    let g = green == 0 ? 0 : Math.round(10 * (green / totalValue)) / 10;
    let b = blue == 0 ? 0 : Math.round(10 * (blue / totalValue)) / 10;
    displayColorResults(r, g, b, luminance);
}

// Display function
function displayColorResults(r, g, b, l) {
    // Display the values for rho (ρ) as r, gamma (ɣ) as g, beta (β) as b, luminance (L) as l
    txtOutput.innerHTML = `(${r}, ${g}, ${b}, ${l})`;
    // Change the background color of the display
    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

// Alert customer of improper input
function improperInput(inField) {
    let fieldName = '';
    if (inField.id == 'rRGB') {
        fieldName = 'R';
    } else if (inField.id == 'gRGB') {
        fieldName = 'G';
    } else {
        fieldName = 'B';
    }
    alert(`Please enter a proper value for '${fieldName}'`);
    return inField.value = '';
}
