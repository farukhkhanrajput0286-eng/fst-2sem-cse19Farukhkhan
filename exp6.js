// Get elements
let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let paragraph = document.getElementById("para");

// Default font size
let fontSize = 16;

// Change Heading
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    } else {
        alert("Please enter some text!");
    }
});

// Change Background
document.getElementById("bgColorBtn").addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Increase Font Size
document.getElementById("fontSizeBtnP").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

 // Decrease Font Size
 document.getElementById("fontSizeBtnM").addEventListener("click",function() {
    fontSize -=2;
    paragraph.style.fontSize = fontSize + "px";
 });

// Show / Hide Paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset
document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "white";
    paragraph.style.fontSize = "16px";
    paragraph.style.display = "block";
    input.value = "";
    fontSize = 16;
});