//Current day tagreted
let currentDayEl = document.querySelector('#currentDay');

//Dates
currentDayEl.innerHTML = moment().format("dddd MMM Do YYYY");
 //btns selected one by one
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");

// InputLogBoxes Assigned one by one
let logInputEl1 = document.querySelector("#log1");
let logInputEl2 = document.querySelector("#log2");
let logInputEl3 = document.querySelector("#log3");
let logInputEl4 = document.querySelector("#log4");
let logInputEl5 = document.querySelector("#log5");
let logInputEl6 = document.querySelector("#log6");
let logInputEl7 = document.querySelector("#log7");
let logInputEl8 = document.querySelector("#log8");
let logInputEl9 = document.querySelector("#log9");


//Local storage Assigned individually
let Data1 = localStorage.getItem("logInputEl1");
logInputEl1.textContent = Data1;

let Data2 = localStorage.getItem("logInputEl2");
logInputEl2.textContent = Data2;

let Data3 = localStorage.getItem("lognputEl3");
logInputEl3.textContent = Data3;

let Data4 = localStorage.getItem("logInputEl4");
logInputEl4.textContent = Data4;

let Data5 = localStorage.getItem("logInputEl5");
logInputEl5.textContent = Data5;

let Data6 = localStorage.getItem("logInputEl6");
logInputEl6.textContent = Data6;

let Data7 = localStorage.getItem("logInputEl7");
logInputEl7.textContent = Data7;

let Data8 = localStorage.getItem("logInputEl8");
logInputEl8.textContent = Data8;

let Data9 = localStorage.getItem("logInputEl9");
logInputEl9.textContent = Data9;

//Buttons Event Listeners

    btn1.addEventListener("click", function() {
    let logInputEl1 = document.querySelector("#log1").value;

    localStorage.setItem("logInputEl1", logInputEl1);
});
    
    btn2.addEventListener("click", function() {
        let logInputEl2 = document.querySelector("#log2").value;
    
        localStorage.setItem("logInputEl2", logInputEl2);
    });
    
    btn3.addEventListener("click", function() {
        let logInputEl3 = document.querySelector("#log3").value;
    
        localStorage.setItem("logInputEl3", logInputEl3);
    });
    
    btn4.addEventListener("click", function() {
        let logInputEl4 = document.querySelector("#log4").value;
    
        localStorage.setItem("logInputEl4", logInputEl4);
    });
    
    btn5.addEventListener("click", function() {
        let logInputEl5 = document.querySelector("#log5").value;
    
        localStorage.setItem("logInputEl5", logInputEl5);
    });
    
    btn6.addEventListener("click", function() {
        let logInputEl6= document.querySelector("#log6").value;
    
        localStorage.setItem("logInputEl6", logInputEl6);
    });
    
    btn7.addEventListener("click", function() {
        let logInputEl7 = document.querySelector("#log7").value;
    
        localStorage.setItem("logInputEl7", logInputEl7);
    });
    
    btn8.addEventListener("click", function() {
        let logInputEl8 = document.querySelector("#log8").value;
    
        localStorage.setItem("logInputEl8", logInputEl8);
    });
    
    btn9.addEventListener("click", function() {
        let logInputEl9 = document.querySelector("#log9").value;
    
        localStorage.setItem("logInputEl9", logInputEl9);
    });
    



    function displayColors() {
        // set time variable to military time   
        let time = moment().format("H");
        // looping through the data-times and comparing to
        // the time variable which are both military times
         for(let x = 9; x < 18; x++) {
            let hourEl = $('.form-group').find(`[data-time=${x}]`)
                if (time == x) {
                    hourEl.addClass("present"); // if current time do present class
                } else if (time > x) {
                    hourEl.addClass("past"); // if past time do past class
                } else {
                    hourEl.addClass("future") // if future time do future class
                }
         }
    }
    
    displayColors();