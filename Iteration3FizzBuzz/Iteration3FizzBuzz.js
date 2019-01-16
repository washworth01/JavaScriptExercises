let number = 100;
let fizz = "Fizz"
let buzz = "Buzz"

function apply(){
    number = document.getElementById("limit").value;
    fizz = document.getElementById("fizz").value;
    buzz = document.getElementById("buzz").value;
}

function resetCommand(){
    number = 100;
    fizz = "Fizz";
    buzz = "Buzz";
}

function output(){
    result.innerHTML = " ";
    for (let i = 1; i <= number; i++)
    {
        if (i % 3 == 0 && i % 5 == 0){
            result.innerHTML += fizz + buzz + " ";
        }   
        else if (i % 5 == 0){
            result.innerHTML += buzz + " ";
        }
        else if(i % 3 == 0)
        {
            result.innerHTML += fizz + " ";
        }
        else{
            result.innerHTML += i + " ";
        }
    }

}