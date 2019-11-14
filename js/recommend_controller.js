$(document).ready(() => {


    $("#recommend_menu").click(() => {
        // $("#main-wrapper").hide();
        // $("#recommend_container").show();
        // $("#recent_details_container").hide();
        // $('body').css({
        //     'background-color': '#fff'
        // });
        // $(".tab-slider--body").hide();
        // $(".tab-slider--body:first").show();
    });

    $(".tab-slider--nav li").click(function() {
        $(".tab-slider--body").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
          if($(this).attr("rel") == "tab2"){
              $('.tab-slider--tabs').addClass('slide');
          }else{
              $('.tab-slider--tabs').removeClass('slide');
          }
        $(".tab-slider--nav li").removeClass("active");
        $(this).addClass("active");
      });
      

    $("#back_button").click(() => {
        console.log("valid!!")
        // window.location.href="main_window.html";
        // $("#login_container").hide();
        // $("#main-wrapper").show();
        console.log('error1')
        window.history.back();
        console.log('error2')
        $("#login_container").hide();
        console.log('error3')
        // $("#main-wrapper").show();
    });

    $(".collapsible").click(function() {
        $('#recent_details_container').show();
    });

    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();

});

