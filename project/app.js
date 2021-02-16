/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get city names from JSON

function cityList () {
    var citynames = JSON.parse(data);
    alert(citynames[0]);
} 

function citySearch() {
    var flag = false;
    cityName = document.getElementById("movieSearch").value;
    movies = document.getElementsByTagName("h3");
    for (var i = 0; i < movies.length; i++) {
        if (movieName === movies[i].innerHTML) {
            movies[i].style.backgroundColor = "yellow";
            flag = true;
        } else {
            movies[i].style.backgroundColor = "white";
        }
    }
    if(flag == false) {
        alert("no such movie was found");
    }
};