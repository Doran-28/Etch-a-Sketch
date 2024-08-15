
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
    boxSize = Math.floor(container.clientHeight / numPixels);
    for (let i = 0; i < numPixels; i++){
        for (let j = 0; j < numPixels; j++){
            const innerDiv = document.createElement("div");
            
            innerDiv.className = "inner-div"
            //innerDiv.textContent = `${i} ${j}`
            innerDiv.style.border = "1px solid black";
            innerDiv.style.height = `${boxSize}px`;
            innerDiv.style.width = `${boxSize}px`;
            innerDiv.addEventListener("mouseover", () =>{
                innerDiv.style.backgroundColor = "black"
            });
            container.appendChild(innerDiv)
        }
    }
}
makeGrid(16)