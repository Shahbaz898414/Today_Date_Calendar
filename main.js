document.addEventListener('DOMContentLoaded', function() {


  const num = document.querySelector('.number');


  const day = document.querySelector('.small-day');

  const monthElem = document.querySelector('.month');

  const yearElem = document.querySelector('.year');


  const today = new Date();


  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  num.innerHTML = today.getDate();

  day.innerHTML = days[today.getDay()].toLowerCase();

  monthElem.innerHTML = months[today.getMonth()];

  yearElem.innerHTML = today.getFullYear();

  
});