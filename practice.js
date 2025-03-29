function setColour(name) {
    document.body.style.backgroundColor = name;
    
    let heading = document.querySelector("h1");
    
    if (name === "black") {
        heading.style.color = "white";
    } else {
        heading.style.color = "black";
    }
}

let random= document.getElementById("randomBtn")

 random.addEventListener("click", function() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;

    const heading = document.querySelector("h1");
    const brightness = getBrightness(randomColor);
    heading.style.color = brightness < 128 ? "white" : "black";
});

function getBrightness(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114); 
}
