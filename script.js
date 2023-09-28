let daysInput = $(".day");
let monthsInput = $(".month");
let yearsInput = $(".year");
let year_count = $(".year_count");
let month_count = $(".month_count");
let day_count = $(".day_count");

$("button").click(function(){
    let day = parseInt(daysInput.val());
    let month = parseInt(monthsInput.val());
    let year = parseInt(yearsInput.val());

    // validating input.
    if(isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter a valid day, month and year");
        return;
    }
    // convert input values to date object.
    let birthDate = new Date(year, month, day);

    // validate date object.
    if(isNaN(birthDate.getTime())) {
        alert("Please Enter a valid Date");
        return;
    }

    // calculate age.
    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();
    let dayDiff = currentDate.getDate() - birthDate.getDate();

    // adjusting age based on month and day.
    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    year_count.html(age);
    month_count.html(monthDiff);
    day_count.html(dayDiff);
    
    console.log(`your age is ${age} years, ${monthDiff} months and ${dayDiff} days!!`)
})
