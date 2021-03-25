//import React from "react";
//import { render } from 'react-dom';
//import React, { Component } from 'react';




var addToSchedule= document.querySelector('#add-to-schedule');
var scheduleItem= document.querySelector("#item");
var schedule= document.querySelector("#schedule");
// var row = document.getElementsByClassName("row");

//saves data to local storage
addToSchedule.addEventListener('submit', function (event) {
    event.preventDefault();
        if (scheduleItem.value.length < 1) return;
        schedule.innerHTML += '<li>' + scheduleItem.value + '</li>';
        localStorage.setItem('scheduleItem', schedule.innerHTML);
    }, false);
  
    var saved = localStorage.getItem('scheduleItem');
  
  //**** */ saves it to a list under the form because i was not sure how to get it in boxes
  if (saved) {
    schedule.innerHTML = saved;
  }
  console.log(saved)

  // sets current time


// variables for background coloring
var rows = document.getElementsByClassName("row");
var currentHour ;

Array.from(rows).forEach(row => {
    var
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }


    if (rowHour) {
      // Compares row id to current hour and then sets the color
      if (currentHour === rowHour) {
        setColor(row, "#ff6961");
      } else if ((currentHour < rowHour)) {
        setColor(row, " #77dd77");
      } else if ((currentHour > rowHour)) {
        setColor(row, "#d3d3d3");
      } else {
        setColor(row, "white");
      }
    }
});
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }

