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
      url: "http://first-ajax-api.herokuapp.com/ping",
      method:  "GET",
      data: {},
      dataType: "text",
    }).done (function (responseData) {
      console.log(responseData);
      $("#step3456").append(responseData);
  });
});

});
