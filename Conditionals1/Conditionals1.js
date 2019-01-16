let Person ={name: "Frank", age: 21, occupation: "West"};

function create(){
    Person.name = document.getElementById("inputName").value;
    Person.age = document.getElementById("inputAge").value;
    Person.occupation = document.getElementById("inputOccupation").value;
    console.log("Person Created");
}

function add1(){
    Person.age = Person.age*1 + 1;
}

function minus1(){
    Person.age = Person.age*1 - 1;
}

function output()
{
    if(Person.age >= 20 && Person.age <= 40){
        console.log(Person)
    }
}