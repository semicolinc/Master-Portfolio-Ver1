$(document).ready(function(){
    function main(){
        $("#intro-toolbar").on("click", function() {
            $("#intro-container").css("display", "block");
            $("#resume-container").css("display", "block");
            $("#portfolio-container").css("display", "block");
            $("#about-container").css("display", "block");
            $("#contact-container").css("display", "block");
        })
        $("#resume-toolbar").on("click", function() {
            $("#resume-container").css("display", "block");
            $("#portfolio-container").css("display", "block");
            $("#about-container").css("display", "block");
            $("#contact-container").css("display", "block");
            $("#intro-container").css("display", "none");
        })
        $("#portfolio-toolbar").on("click", function() {
            $("#portfolio-container").css("display", "block");
            $("#about-container").css("display", "block");
            $("#contact-container").css("display", "block");
            $("#resume-container").css("display", "none");
            $("#intro-container").css("display", "none");
        })
        $("#about-toolbar").on("click", function() {
            $("#about-container").css("display", "block");
            $("#contact-container").css("display", "block");
            $("#portfolio-container").css("display", "none");
            $("#resume-container").css("display", "none");
            $("#intro-container").css("display", "none");
        })
        $("#contact-toolbar").on("click", function() {
            $("#contact-container").css("display", "block");
            $("#about-container").css("display", "none");
            $("#portfolio-container").css("display", "none");
            $("#resume-container").css("display", "none");
            $("#intro-container").css("display", "none");
        })
    };
    main();
})