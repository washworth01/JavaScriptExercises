let counter = 0;
function create(){
    let paragraph = document.createElement("p");

    counter = counter*1+1;
    paragraph.setAttribute("id", "p"+counter);
    paragraph.innerHTML="&nbsp;";
    document.getElementById("aa").appendChild(paragraph);
}

function insert(){
    let text = document.getElementById("userInput").value;
    document.getElementById("p"+counter).innerHTML = text;
}

function deletion(){
    let element = document.getElementById("p"+counter);
    element.parentNode.removeChild(element);
    counter = counter*1-1;
}