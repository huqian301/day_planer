// require

$(document).ready(function () {

    // const m2 = moment('2020-05-13');
    // const eventMoment = moment().add(2,"hours");
    // console.log(m.format('ddd MMM Mo YYYY'));//Mon Aug 8th 202020
    // console.log(m.format('[Yeah, the day is ] dddd'));//Yeah, the day is  Monday
    // console.log(m.format('L'));//08/10/2020
    // console.log(m2.fromNow());//3 months ago
    //console.log(m2.from(m));//3 months ago //because m = now
    //console.log(eventMoment.toString());//Tue Aug 11 2020 01:36:15 GMT-0700
    //console.log(eventMoment.calendar());//Tomorrow at 1:37 AM //shows two hours ahead

    //for render the time by every second
    const timeUpdate = function () {
        $('#currentDay').text(moment().format('LLLL'));
    }
    timeUpdate();
    setInterval(timeUpdate, 1000);



    let hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


    function renderTable() {
        for (let i = 0; i < hours.length; i++) {
            const $timeRow = $('<div>').addClass('time- block row');
            const $clock = $('<div>').addClass('col-1 hour').text(hours[i] + ":00").attr('id', 'clock');

            const $textArea = $('<textarea>').addClass('col').attr('time-value', (i));
            const $saveBtn = $('<button>').addClass('col-1 saveBtn').append($('<img>').attr({ 'src': './img/save-solid.svg' }));

            hour = moment().hour();
            // console.log(hour);
            if ($textArea.attr("time-value") < hour) {
                $textArea.addClass('past');
            } else if ($textArea.attr("time-value") > hour) {
                $textArea.addClass('future');
            } else {
                $textArea.addClass("present");
            }
            $timeRow.append($clock, $textArea, $saveBtn);
            $('.container').append($timeRow);
        }


    }
    renderTable();



    let timeKey = {
        '0': '', '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': '', '9': '', '10': '', '11': '', '12': '', '13': '', '14': '', '15': '', '16': '', '17': '', '18': '', '19': '', '20': '', '21': '', '22': '', '23': '',
    }
    function init() {


        let storedPlan = JSON.parse(localStorage.getItem('textAreaInput'));

        if (storedPlan !== null) {
            timeKey = storedPlan;
        }

        let $areaInput = Array.from($('.col'));
        console.log($areaInput);

        $areaInput.forEach(element => {
            let timevalue = element.getAttribute('time-value');
            element.textContent = (timeKey[timevalue]);
        });

    }
    init();


    function plan() {
        localStorage.setItem('textAreaInput', JSON.stringify(timeKey));
    }


    $('.saveBtn').on('click', function () {


        let textAreaInput = $(this).prev()[0].value;
        let timeValue = ($(this).prev()[0].getAttribute("time-value"));

        timeKey[timeValue] = textAreaInput;


        plan();
    })

});