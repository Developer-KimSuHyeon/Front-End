$(document).ready(() => {

    $("#login_button").click(() => {
        $("#login_container").hide();
        $("#body_size_input_container").show();
        console.log("valid!!")
    });

    
    $("#info-form").submit((event) => {
        event.preventDefault(); //prevent weird form error
        if ($("#info-form").get(0).checkValidity()) {
            // console.log('valid!!')
            $('#body_size_input_container').hide();
            $('#main-wrapper').show();
        } else {
            // console.log("invalid!!")
        }    
    })
    
    let checknum = 0;
    $("#like_menu").click(() => {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            alert(url)
        });
        $("#main-wrapper").hide();
        $("#like_container").show();
        $('body').css({
            'background-color': 'rgb(255, 145, 123)'
        });
        checknum = 0
        $("#like_column1").html("skinny");
        $("#like_column2").html("straight");
        $("#like_column3").html("wide");
    });

    $(".fit_button").click(() => {
        $("#like_column1").html("S");
        $("#like_column2").html("M");
        $("#like_column3").html("L");
        checknum += 1
        if (checknum > 1) {
            $("#like_container").hide();
            $('body').css({
                'background-color': '#fff'
            });
            $('#like_menu').attr("src", "./images/img_heart_fill.png");
            $("#main-wrapper").show();
            
        }
    });

    $("#input_size_menu").click(() => {
        $("#main-wrapper").hide();
        $("#clothes_category_input_container").show();
        $('body').css({
            'background-color': '#fff'
        });
    });

     $(".submit_button_small").click(() => {

        $("#clothes_category_input_container").hide();
        $("#clothes_size_input_container").show();

    });

    $("#recommend_menu").click(() => {
        // window.location.href="recommend_window.html";
        // console.log("open recommendation window")
        chrome.browserAction.setPopup({popup: "recommend_window.html"});
    });


    $(".toggle-inner").click(() => {
        chrome.browserAction.setPopup({popup: './recommend_window.html'});
    });
    
    $("#size-form").submit((event) => {
        event.preventDefault();
        if ($("#size-form").get(0).checkValidity()) {
            $('#clothes_size_input_container').hide().prop('required',false);
            $('body').css({
                'background-color': '#fff'
            });
            $('#main-wrapper').show();
            
        }   
    })

    $(".collapsible").click(function() {
        $('#recent_details_container').show();
      });

    $("#body_size_input_container").hide();
    $("#main-wrapper").hide();
    $("#like_container").hide();
    // $("#recommend_container").hide();

    $("#clothes_category_input_container").hide();
    $("#clothes_size_input_container").hide();

});
