function calculation(){
    let number = document.getElementById("userInput").value;
    result.innerHTML = " ";
    while (number != 1){

        if(number % 3 == 0) {
            result.innerHTML += number + " / 3 = " + number / 3;
            result.innerHTML += "<br>";
            number = number / 3;
        }
        else{
            if(number % 3 == 2){
                result.innerHTML += number + " + 1 = ";
                result.innerHTML += number*1+1;
                result.innerHTML += "<br>";
                number = number*1+1;
            }
            else if(number % 3 == 1){
                result.innerHTML += number + " - 1 = ";
                result.innerHTML += number*1-1;
                result.innerHTML += "<br>";
                number = number*1-1;
            }
        }
    }
}