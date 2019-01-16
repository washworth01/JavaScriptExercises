let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json"
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function(){
    let obj = {table: "Heroes", limit: 3};
    let dbParam = JSON.stringify(obj);
    let superText = request.response;
    let superHeroes = JSON.parse(superText);
    if (this.readyState == 4 && this.status == 200){
        txt = "<table border='1'>"
        for (x in superHeroes){
            txt += "<tr><td>" + superHeroes[x].squadName + "</td></tr>";
        }
        txt += "</table>"
        document.getElementById("table").innerHTML = txt;
    }
request.open("POST", requestURL, true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send("x=" + dbParam)
}