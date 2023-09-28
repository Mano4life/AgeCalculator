// let days = document.getElementsByClassName("days");
// let months = document.getElementsByClassName("months").value;
// let years = document.getElementsByClassName("years").value;

// let demo = document.getElementsByClassName("no").innerHTML;

// document.querySelector("button").addEventListener('click', () => {
//     document.querySelectorAll("body").css = 'background','black';
// })

let days = $(".days").val();

$("button").click(function(){
    $('.Dno').html(days);
})