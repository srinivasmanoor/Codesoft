function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteNumber() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);
}

function appendNumber(number) {
    let screen = document.getElementById("screen");
    screen.value += number;
}

function calculate() {
    let screen = document.getElementById("screen");
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

function calculatePercentage() {
    let screen = document.getElementById("screen");
    let value = parseFloat(screen.value);
    if (!isNaN(value)) {
        screen.value = value / 100; 
    }
}
