$(document).ready(function () {

    $("#body_size_input_container").hide();
    $("#main_container").hide();
    $("#like_container").hide();
    $("#recommend_container").hide();

    $("#login_button").click(function () {
        $("#login_container").hide();
        $("#body_size_input_container").show();
    });

    $("#submit_button").click(function () {
        $('body').css({
            'background-color': 'rgb(255, 145, 123)'
        });
        $("#body_size_input_container").hide();
        $("#main_container").show();
    });

    var checknum = 0

    $("#like_menu").click(function () {
        $("#main_container").hide();
        $("#like_container").show();
        $('body').css({
            'background-color': 'rgb(255, 145, 123)'
        });
        checknum = 0
        $("#like_column1").html("skinny");
        $("#like_column2").html("straight");
        $("#like_column3").html("wide");
    });

    $("#recommend_menu").click(function () {
        $("#main_container").hide();
        $("#recommend_container").show();
        $('body').css({
            'background-color': '#fff'
        });
        $(".tab-slider--body").hide();
        $(".tab-slider--body:first").show();
    });

    $(".fit_button").click(function () {
        $("#like_column1").html("S");
        $("#like_column2").html("M");
        $("#like_column3").html("L");
        checknum += 1
        if (checknum > 1) {
            $("#like_container").hide();
            $("#main_container").show();
        }
    });

    $(".tab-slider--nav li").click(function () {
        $(".tab-slider--body").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        if ($(this).attr("rel") == "tab2") {
            $('.tab-slider--tabs').addClass('slide');
        } else {
            $('.tab-slider--tabs').removeClass('slide');
        }
        $(".tab-slider--nav li").removeClass("active");
        $(this).addClass("active");
    });

    $("#back_button").click(function () {
        $("#recommend_container").hide();
        $("#main_container").show();
        $('body').css({
            'background-color': 'rgb(255, 145, 123)'
        });
    });

});
