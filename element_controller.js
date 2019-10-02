$(document).ready(function () {

    $("#body_size_input_container").hide();
    $("#main_container").hide();

    $("#login_button").click(function () {
        $("#login_container").hide();
        $("#body_size_input_container").show();
    });

    $("#submit_button").click(function () {
        $("#body_size_input_container").hide();
        $("#main_container").show();
    });
});