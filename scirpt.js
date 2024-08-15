
const container = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    const outterDiv = document.createElement("div");
    outterDiv.className = "outter-div"
    container.appendChild(outterDiv)

    for (let j = 0; j < 16; j++){
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


