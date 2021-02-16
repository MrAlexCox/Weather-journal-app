/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const cityNames = data;

// get city names from JSON

function cityList() {
    let x = cityNames.name;

    console.log(x[200]);
} 

function citySearch() {
    var flag = false;
    userInput = document.getElementById("userCity").value;
    for (var i = 0; i < cityNames.length; i++) {
        if (userInput === cityNames[i].innerHTML) {
            movies[i].style.backgroundColor = "yellow";
            flag = true;
        } else {
            movies[i].style.backgroundColor = "white";
        }
    }
    if(flag == false) {
        alert("No such city was found. Please check your spelling.");
    }
};