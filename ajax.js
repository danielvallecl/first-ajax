$(document).on('ready', function () {

  $("button").click(function() {
    $.ajax({
    url: "http://first-ajax-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "text",
  });
  });

});
