let Person ={name: "Frank", age: 21, occupation: "West"};

function create(){
    Person.name = document.getElementById("inputName").value;
    Person.age = document.getElementById("inputAge").value;
    Person.occupation = document.getElementById("inputOccupation").value;
    console.log("Person Created");
}

function output(){
    console.log(Person);
} 


