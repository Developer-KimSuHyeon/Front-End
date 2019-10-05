$(document).ready(function () {

    $("#login_button").click(function () {
        $("#login_container").hide();
        $("#body_size_input_container").show();
    });

    let checknum = 0;
    $("#info-form").submit((event) => {
        event.preventDefault();
        if ($("#info-form").get(0).checkValidity()) {
            console.log('valid!!')
            $('#body_size_input_container').hide();
            $('#main_container').show();
        } else {
            console.log("invalid!!")
        }    
    })

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

    $("#input_size_menu").click(() => {
        $("#main_container").hide();
        $("#clothes_category_input_container").show();
        $('body').css({
            'background-color': '#fff'
        });
    });

    var window_num = 0
    $("#submit_button_small").click(function () {

        $("#clothes_category_input_container").hide();
        $("#clothes_size_input_container").show();
        window_num += 1
        if(window_num > 1){
            $("#clothes_size_input_container").hide();
            $("#main_container").show();
            $('body').css({
                'background-color': '#fff'
            });
        }
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
            $('body').css({
                'background-color': '#fff'
            });
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
        // $('body').css({
        //     'background-color': 'rgb(255, 145, 123)'
        // });
    });


    $("#body_size_input_container").hide();
    $("#main_container").hide();
    $("#like_container").hide();
    $("#recommend_container").hide();
    $("#clothes_category_input_container").hide();
    $("#clothes_size_input_container").hide();

});
