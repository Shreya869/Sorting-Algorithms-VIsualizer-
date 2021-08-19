

//Rendering happens here and also it helps display the interactive visualus on the screen



"use strict"; //used to help write cleaner code, you cannot use undeclared variables if you use this statement
const start = async () => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    let speedValue = Number(document.querySelector(".speed-menu").value);

    if(speedValue === 0) {
        speedValue = 1;
    }
    if(algoValue === 0) {
        alert("No Algorithm Selected");
        return;
    }

    let algorithm = new sortAlgorithms(speedValue);
    if(algoValue === 1)
        await algorithm.BubbleSort();
    if(algoValue === 2)
        await algorithm.SelectionSort();
    if(algoValue === 3)
        await algorithm.InsertionSort();
    if(algoValue === 4)
        await algorithm.MergeSort();
    if(algoValue === 5)
        await algorithm.QuickSort();
};

//Rendering: HelPing it to display 2d models to the actual screen

const RenderScreen = async () => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    await RenderList();
}

const RenderList = async () => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    await clearScreen();
    
    let list = await randomList(sizeValue);
    const arrayNode = document.querySelector(".array");
    for(const element of list)
    {
        const node = document.createElement("div");
        node.className = "cell";
        node.setAttribute("value", String(element));
        node.style.height = `${4*element}px`;
        arrayNode.appendChild(node);
    }
};

const RenderArray = async (sorted) => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    await clearScreen();

    let list = await randomList(sizeValue);
    if(sorted) list.sort((a, b) => a - b);

    const arrayNode = document.querySelector('.array');
    const divnode = document.createElement('div'); 
    divnode.className = 's-array';

    for(const element of list) {
        const dnode = document.createElement('div');
        dnode.className = 's-cell';
        dnode.innerText = element;
        divnode.appendChild(dnode);
    }
    arrayNode.appendChild(divnode);
}

//When you dont choose an arrya and just put arandom list in it
const randomList = async (Length) => {
    let list = new Array();
    let lowerBound = 1;
    let upperBound = 100;

    for (let counter = 0; counter < Length ; ++counter) {
        let randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1) 
            + lowerBound);
        list.push(parseInt(randomNumber));
    }
    return list;
};

const clearScreen = async () => {
    document.querySelector(".array").innerHTML = "";
};


//Navigation bar is responsive

const response = () => {
    let Navbar = document.querySelector(".navbar");
    if(Navbar.className === "navbar") {
        Navbar.className += " responsive";
    }
    else {
        Navbar.className = "navbar";
    }
};

document.querySelector(".icon").addEventListener("click", response)
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload = RenderScreen;