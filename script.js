"use strict";
const lbDay = document.querySelector(".lb-day");
const lbMonth = document.querySelector(".lb-month");
const lbyear = document.querySelector(".lb-year");

/* Input values */
let dayinp = document.querySelector(".inp-day");
let monthinp = document.querySelector(".inp-month");
let yearinp = document.querySelector(".inp-year");

const form = document.querySelector(".fm");

/* Output values */
const yearVal = document.querySelector(".years-val");
const monthVal = document.querySelector(".months-val");
const dayVal = document.querySelector(".days-val");

const dayErr = `<p class="error-txt day-err">Must be a valid day!</p>`;
const monthErr = `<p class="error-txt month-err">Must be a valid month!</p>`;
const yearErr = `<p class="error-txt year-err">Must be a valid year!</p>`;

let date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year, month, day);

function calcDate() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let months = 0;
    let days = 0;
    let numofYears = 0;

    // Get the input values from the user interface
    const dayInpt = +dayinp.value;
    const monthInpt = +monthinp.value;
    const yearInpt = +yearinp.value;

    // Check if the day or the month or the year is greater than current day?
    if (dayinp.value > 31) {
      lbDay.style.color = "hsl(0, 100%, 67%)";
      dayinp.style.border = "1px solid hsl(0, 100%, 67%)";
      dayinp.insertAdjacentHTML("afterend", dayErr);
    }

    if (document.querySelector(".day-err") && dayinp.value <= 31) {
      lbDay.style.color = "hsl(0, 1%, 44%)";
      dayinp.style.border = "1px solid hsl(0, 1%, 44%)";
      document.querySelector(".day-err").remove();
    }

    if (monthinp.value > 12) {
      lbMonth.style.color = "hsl(0, 100%, 67%)";
      monthinp.style.border = "1px solid hsl(0, 100%, 67%)";
      monthinp.insertAdjacentHTML("afterend", monthErr);
    }
    if (document.querySelector(".month-err") && monthinp.value <= 12) {
      lbMonth.style.color = "hsl(0, 1%, 44%)";
      monthinp.style.border = "1px solid hsl(0, 1%, 44%)";
      document.querySelector(".month-err").remove();
    }
    if (yearinp.value > year) {
      lbyear.style.color = "hsl(0, 100%, 67%)";
      yearinp.style.border = "1px solid hsl(0, 100%, 67%)";
      yearinp.insertAdjacentHTML("afterend", yearErr);
    }
    if (document.querySelector(".year-err") && yearinp.value <= year) {
      lbyear.style.color = "hsl(0, 1%, 44%)";
      yearinp.style.border = "1px solid hsl(0, 1%, 44%)";
      document.querySelector(".year-err").remove();
    }

    const str = `"${monthInpt}/${dayInpt}/${yearInpt}"`;
    console.log(str);
    // Convert the input data into a new date objet
    const dateTime = Date.parse(str);
    //Checking if the date is valid
    if (isNaN(dateTime)) {
      alert("Invalid date,Please enter correct date! ");
      dayinp.value = monthinp.value = yearinp.value = "";
    } else {
      console.log(dateTime);
      //Convert the date into time in miliseconds
      const timeGet = dateTime;

      //Get the diffrence in time now and user input time
      const timeDiff = Date.now() - timeGet;
      console.log(timeGet);
      console.log(timeDiff);

      //Calculate years
      numofYears = Math.abs(Math.floor(timeDiff / (86400000 * 365)));

      console.log(numofYears);
      const diff = timeDiff - 20 * 31536000000;

      //Calculate months
      months = Math.abs(Math.floor(diff / 2626560000));
      console.log(months);
      const diffrentdays = diff - 86400000 * 9;

      //calculate days
      days = Math.abs(Math.floor(diffrentdays / 86400000));

      //We shall finally print a string containing all the data.
      console.log(
        `The time diffrence will be ${numofYears} years, ${months} months and ${days} days.`
      );
    }

    console.log(dayInpt, monthInpt, yearInpt);

    yearVal.textContent = numofYears;
    monthVal.textContent = months;
    dayVal.textContent = days;
  });
}
calcDate();
