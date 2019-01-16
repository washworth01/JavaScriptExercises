function findTriples(){
    let inputString = document.getElementById("userInput").value;
    let counter = 0;
    for (let i = 0; i < inputString.length; i++){
        let character = inputString.charAt(i);
        if (character == inputString.charAt(i*1+1) && character == inputString.charAt(i*1+2)){
            counter = counter*1+1;
            result.innerHTML += inputString.charAt(i) + inputString.charAt(i*1+1) + inputString.charAt(i*1+2);
            result.innerHTML += "<br>";
        }
    }
    result.innerHTML += "Total number of triple letters: " + counter;
}