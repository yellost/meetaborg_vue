console.log("main.js");
// nombre dynamique des hommes et femmes
let hommes = $(".Male").length;
let femmes = $(".Female").length;

$("span.blue").prepend(hommes + " ");
$("span.pink").prepend(femmes + " ");

// boutons filtres
let buttons = $(".blurb__btn");
let robotList = $(".robot");
let robotMale = $('.Male').closest(".robot");

let robotFemale = $(".Female");

buttons.click(function (){
    robotList.hide()
    let selector = $(this).data("filter");
    console.log(selector);
    $("."+$(this).data("filter")).closest(".robot").show();
        if ($(this).hasClass("grey")) {
            robotList.show();
        }
})