"use strict";
/* Input values */
const day = document.querySelector(".inp-day");
const month = document.querySelector(".inp-month");
const year = document.querySelector(".inp-year");

const form = document.querySelector(".fm");

/* Output values */
const yearVal = document.querySelector(".years-val");
const monthVal = document.querySelector(".months-val");
const dayVal = document.querySelector(".days-val");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const dayInpt = day.value;
  const monthInpt = month.value;
  const yearInpt = year.value;

  console.log(dayInpt, monthInpt, yearInpt);

  console.log("The form has been submitted");

  //We need to calculate the number of days,months and years

  //   yearVal.textContent = yearInpt;
  //   monthVal.textContent = monthInpt;
  //   dayVal.textContent = dayInpt;
});

const timestamp = Date.now();
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday = dd + "/" + mm + "/" + yyyy;

console.log(formattedToday);

//Convert the input data into a new date objet
const searchDate = "01/01/2003";
const dateObject = new Date(searchDate);

//Convert the date into time in miliseconds
const timeGet = dateObject.getTime();

//Get the diffrence in time now and user input time
const timeDiff = Date.now() - timeGet;
console.log(timeGet);
console.log(timeDiff);

//Calculate years
const numofYears = timeDiff / (86400000 * 365);

const diff = 655944623404 - 20 * 31536000000;
console.log(diff);

// //Calculate months
// const months = diff / (86400000 * 30.4);

// const diffrentdays = diff - 86400000 * 9;

// //calculate days
// const days = diffrentdays / 86400000;
