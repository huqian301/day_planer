$(document).ready(function() {
    let renderTime = function() {
      $('#currentDay').text(moment().format('LLLL'));
    }
    renderTime();



    //update the time every second
    setInterval(renderTime, 1000);

    //create elements to go inside container div
    for (let i = 0; i < 9; i++) {

      //create a div for each timeblock
      const $timeBlockDiv = $('<div>').addClass("time-block row");
      const workHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

      //create an hour div for each timeblock
      let $hourDiv = $('<div>').addClass("text-right col-1 hour").text('\n' + workHours[i]);
      
      //create a textarea and give each textarea an attribute equal to the hour of the day it corresponds to
      let $textArea = $('<textarea>').addClass("col").attr("time-value", (9+i));
      //
      
      if ($textArea.attr("time-value") < moment().hour()) {
        //if the time-value attribute is earlier than the current hour, then give it a class of past
        $textArea.addClass("past");
      } else if ($textArea.attr("time-value") > moment().hour()) {
        //if the time-value attribute is later than the current hour, then give it a class of future
        $textArea.addClass("future");
      } else {
        //if the time-value attribute is equal to the current hour, then give it a class of present
        $textArea.addClass("present");
      }
      //create a button for each timeblock
      let $button = $('<button>').addClass("col-1 saveBtn");
      //put an icon in each button
      const $saveIcon = $('<i>').addClass("fas fa-save");
      $button.append($saveIcon);
      //in order, append the hour div, textarea, and button to the timeblock
      $timeBlockDiv.append($hourDiv, $textArea, $button);
      //append the timeblock to the container div
      $('.container').append($timeBlockDiv);
    }



    //create an object - make a key for each hour, set their value to empty string, will be saved in the local storage
    let scheduleObj = {'9':'','10':'','11':'','12':'','13':'','14':'','15':'','16':'','17':''}
    //change the scheduleObj to the item saved in the local storage
    function init() {
      let storedSchedule = JSON.parse(localStorage.getItem('scheduleInput'));
      if (storedSchedule !== null) {
        scheduleObj = storedSchedule;
      }
      //change the text inside the textarea to the local storage item
      let $textAreaInputs = Array.from($('.col'));
      $textAreaInputs.forEach(element => {
        let timeValue = element.getAttribute('time-value');
        element.textContent = (scheduleObj[timeValue]);
      });
    }
    
    init();
    $('.saveBtn').on('click', function() {
      //target the textarea of the corresponding button and grab its value, AKA its text input
      let scheduleInput = $(this).prev()[0].value;
      //grab the textarea's time-value attribute
      let timeValue = ($(this).prev()[0].getAttribute("time-value")); 
      //update the scheduleObj
      scheduleObj[timeValue] = scheduleInput;
      //update the item in local storage
      localStorage.setItem('scheduleInput', JSON.stringify(scheduleObj));
    })
  });