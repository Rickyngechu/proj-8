"use strict";
const lbDay = document.querySelector(".lb-day");
const lbMonth = document.querySelector(".lb-month");
const lbyear = document.querySelector(".lb-year");

/* Input values */
const day = document.querySelector(".inp-day");
const month = document.querySelector(".inp-month");
const year = document.querySelector(".inp-year");

const form = document.querySelector(".fm");

/* Output values */
const yearVal = document.querySelector(".years-val");
const monthVal = document.querySelector(".months-val");
const dayVal = document.querySelector(".days-val");

const html = `<p class="error-txt">This field is required!</p>`;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const dayInpt = day.value;
  const monthInpt = month.value;
  const yearInpt = year.value;

  //Output variables
  let months = 0;
  let days = 0;
  let numofYears = 0;

  if (dayInpt === "" || monthInpt === "" || yearInpt === "") {
    if (dayInpt === "") {
      lbDay.style.color = "hsl(0, 100%, 67%)";
      day.style.border = "1px solid hsl(0, 100%, 67%)";
      day.insertAdjacentHTML("afterend", html);
    }
    if (monthInpt === "") {
      lbMonth.style.color = "hsl(0, 100%, 67%)";
      month.style.border = "1px solid hsl(0, 100%, 67%)";
      month.insertAdjacentHTML("afterend", html);
    }
    if (yearInpt === "") {
      lbyear.style.color = "hsl(0, 100%, 67%)";
      year.style.border = "1px solid hsl(0, 100%, 67%)";
      year.insertAdjacentHTML("afterend", html);
    }
  } else {
    lbDay.style.color = "hsl(0, 1%, 44%)";
    day.style.border = "1px solid hsl(0, 1%, 44%)";

    lbMonth.style.color = "hsl(0, 1%, 44%)";
    month.style.border = "1px solid hsl(0, 1%, 44%)";

    lbyear.style.color = "hsl(0, 1%, 44%)";
    year.style.border = "1px solid hsl(0, 1%, 44%)";
    document
      .querySelectorAll(".error-txt")
      .forEach(el => (el.style.display = "none"));

    //Convert the input data into a new date objet
    const dateObject = new Date(`"${dayInpt}/${monthInpt}/${yearInpt}"`);

    //Checking if the date is valid
    if (isNaN(dateObject)) {
      alert("Invalid date,Please enter correct date! ");
    } else {
      console.log(dateObject);
      //Convert the date into time in miliseconds
      const timeGet = dateObject.getTime();

      //Get the diffrence in time now and user input time
      const timeDiff = Date.now() - timeGet;
      console.log(timeGet);
      console.log(timeDiff);

      //Calculate years
      numofYears = Math.floor(timeDiff / (86400000 * 365));

      console.log(numofYears);
      const diff = timeDiff - 20 * 31536000000;

      //Calculate months
      months = Math.floor(diff / 2626560000);

      const diffrentdays = diff - 86400000 * 9;

      //calculate days
      days = Math.floor(diffrentdays / 86400000);

      //We shall finally print a string containing all the data.
      console.log(
        `The time diffrence will be ${numofYears} years, ${months} months and ${days} days.`
      );
    }
  }
  //We need to calculate the number of days,months and years

  yearVal.textContent = numofYears;
  monthVal.textContent = months;
  dayVal.textContent = days;
});
