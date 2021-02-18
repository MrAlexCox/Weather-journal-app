/* Global Variables */

// const cities = require("./city-list.json");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// const cityNames = data;

// get city names from JSON
// fetch('../city-list.json', {mode: 'no-cors'})
  // .then(response => response.text())
  // .then(data=>
  //
  //   console.log(data))
  // .catch(error => console.error(error));

async function getCities() {
  let results = fetch('../city-list.json', {mode: 'no-cors'})
          .then(response => response.text())
          .then(data=>

            console.log('hello'))
          .catch(error => console.error(error));
  let cities = data;
  console.log(cities);

  return results

}

var cities = getCities();

function cityList(){
  console.log(cities)
};

// function citySearch() {
//     var flag = false;
//     userInput = document.getElementById("userCity").value;
//     for (var i = 0; i < cityNames.length; i++) {
//         if (userInput === cityNames[i].innerHTML) {
//             movies[i].style.backgroundColor = "yellow";
//             flag = true;
//         } else {
//             movies[i].style.backgroundColor = "white";
//         }
//     }
//     if(flag == false) {
//         alert("No such city was found. Please check your spelling.");
//     }
// };
