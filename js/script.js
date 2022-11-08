//Current day tagreted
let currentDayEl = document.querySelector('#currentDay');

//Dates
currentDayEl.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

let btn = document.querySelector("#btn");

// assigned variables to loginput boxes
let logInputEl = document.querySelectorAll("#log");


// logging display stored data in forms
let Data = localStorage.getItem("log");
logInputEl.textContent = Data;



// event listeners for save buttons 
btn.addEventListener("click", function() {
    let logInputEl = document.querySelector("#log").value;

    localStorage.setItem("logInputEl", logInputEl);


});

//Displaying time/and colors through time
function displayColors() {
    let time = moment().format("H");
    // looping through the data-times and comparing to
     for(let x = 9; x < 18; x++) {
        let hourEl = $('.form-group').find(`[data-time=${x}]`)
            if (time == x) {
                hourEl.addClass("present"); 
            } else if (time > x) {
                hourEl.addClass("past"); 
            } else {
                hourEl.addClass("future") 
            }
     }
}
displayColors();