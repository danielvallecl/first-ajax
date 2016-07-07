$(document).on('ready', function() {

    //The Ajax is contained inside the button element//

    $(".button1").click(function() {
        $.ajax({
            url: "http://first-ajax-api.herokuapp.com/",
            method: "GET",
            data: {},
            dataType: "text",
        }).done(function(responseData) {});
    });

    $(".button2").click(function() {
        $.ajax({
            url: "http://first-ajax-api.herokuapp.com/pong",
            method: "GET",
            data: {},
            dataType: "text",
        }).done(function(responseData) {
            console.log(responseData);
            $("#step3456").append(responseData);
        }).fail(function(responseData) {
            $("#step3456").append("Sorry, I'll try harder next time!");
        }).always(function(responseData) {
            $("step3456").append("Hey the request finished!");
        });
    });

    $(".button3").click(function() {
        $.ajax({
            url: "http://first-ajax-api.herokuapp.com/count",
            method: "GET",
            data: {},
            dataType: "text",
        }).done(function(responseData) {
            console.log(responseData);
            $("#step7").append(responseData);
        });
    });

    $(".button4").click(function() {
        $.ajax({
            url: "http://first-ajax-api.herokuapp.com/time",
            method: "GET",
            data: {},
            dataType: "html",
        }).done(function(responseData) {
            console.log(responseData);
            $("#step8").append(responseData);
        });
    });

    $(".button5").click(function() {
        $.ajax({
            url: "http://first-ajax-api.herokuapp.com/a_car",
            method: "GET",
            data: {},
            dataType: "html",
        }).done(function(responseData) {
            console.log(responseData);
            $("#list").append(responseData);
        });
    });
  });
