let number = 100;
let fizz = "Fizz"
let buzz = "Buzz"

function apply()
{
    number = document.getElementById("limit").value;
    fizz = document.getElementById("fizz").value;
    buzz = document.getElementById("buzz").value;
}

function rest()
{
    number = 100;
    fizz = "Fizz"
    buzz = "Buzz"
}

function output(){
    for (let i = 1; i < number; i++)
    {
        if (i % 3 == 0 && i % 5 == 0){
            document.append(fizz, buzz, /\n/);
        }   
        else if (i % 5 == 0){
            document.append(buzz, /\n/);
        }
        else if(i % 3 == 0)
        {
            document.append(fizz,/\n/);
        }
        else{
            document.append(i,/\n/);
        }
    }

}