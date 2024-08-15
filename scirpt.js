
const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    let numPixels;
    do {
        // Prompt the user for input
        numPixels = parseInt(prompt("Enter the dimension of the square (NxN) Must be between 1 and 100"), 10);  
        // Check if numPixels is a valid number and within the range
    } while (isNaN(numPixels) || numPixels < 1 || numPixels > 100);
    
    // Remove all child nodes
    container.replaceChildren();
    
    makeGrid(numPixels)
});

function makeGrid(numPixels){
        for (let i = 0; i < numPixels; i++){
        const outterDiv = document.createElement("div");
        outterDiv.className = "outter-div"
        container.appendChild(outterDiv)

        for (let j = 0; j < numPixels; j++){
            const innerDiv = document.createElement("div");
            innerDiv.className = "inner-div"
            //innerDiv.textContent = `${i} ${j}`
            outterDiv.appendChild(innerDiv)
        }
    }

    divs = document.querySelectorAll(".inner-div");
    for (let i = 0; i < divs.length; i++){
        divs[i].style.border = "2px solid black";
        divs[i].style.width = "50px";
        divs[i].style.height = "50px";

        divs[i].addEventListener("mouseover", () =>{
            divs[i].style.backgroundColor = "black"
        });
    }
}

makeGrid(16)