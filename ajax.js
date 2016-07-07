$(document).on('ready', function () {

  //The Ajax is contained inside the button element//

  $(".button1").click(function() {
    $.ajax({
    url: "http://first-ajax-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "text",
  }).done( function (responseData) {
});
  });

  $(".button2").click(function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method:  "GET",
      data: {},
      dataType: "text",
    }).done (function (responseData) {
      console.log(responseData);
      $("#step3456").append(responseData);
  }).fail (function (responseData) {
      $("#step3456").append("Sorry, I'll try harder next time!");
  }).always (function (responseData) {
      $("step3456").append("Hey the request finished!");
  });
});

});
