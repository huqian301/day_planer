// require
const m = moment().format('ddd, MMM Mo, YYYY');
// const m2 = moment('2020-05-13');
// const eventMoment = moment().add(2,"hours");
// console.log(m.format('ddd MMM Mo YYYY'));//Mon Aug 8th 202020
// console.log(m.format('[Yeah, the day is ] dddd'));//Yeah, the day is  Monday
// console.log(m.format('L'));//08/10/2020
// console.log(m2.fromNow());//3 months ago
//console.log(m2.from(m));//3 months ago //because m = now
//console.log(eventMoment.toString());//Tue Aug 11 2020 01:36:15 GMT-0700
//console.log(eventMoment.calendar());//Tomorrow at 1:37 AM //shows two hours ahead

$('#currentDay').text(m);

const time = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const plan = [];

function renderTime() {
    for (let i = 0; i < time.length; i++) {
        const $newRow = $('<tr>');
        const $clock = $('<td>').text(time[i] + ":00").attr('id', 'clock');
        const $input = $('<textarea>').attr('id', 'input');
        const $saveBtn = $('<td>').append($('<button>').append($('<img>').attr({ 'src': './img/save-solid.svg', 'id': 'saveBtn' })));

        $newRow.append($clock, $input, $saveBtn);
        $('tbody').append($newRow);
    }
}
renderTime();


//how to target exact textarea input and save with exact button
//use $(this).val()?
function storedPlan() {
    localStorage.setItem("plan", JSON.stringify(plan));
}

function init() {
    const storedPlan = JSON.parse(localStorage.getItem("plan"));
}


$('<button>').on('click', function (e) {
    e.preventDefault();

    const plan = $(this).val();

})

// when time = now, background color change to red
// when time is passed, background color changes to gray
// when time is future, background color changes to green

