$(document).ready(function () {

  $("#mainContainer").hover(
    function () {
      $(this).css('box-shadow', '8px 5px 22px gray');
    }, function () {
      $(this).css('box-shadow', 'none');
    }
  );


  // this is to autofill input city basead on user location
  $.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function (location) {
      $('#country').html(location.country_name);
      $('#state').html(location.state);
      $('#city').html(location.city);
      console.log(location.city, location.country_name, location.state);
      $('#cityName').val(location.city);
      $('#latitude').html(location.latitude);
      $('#longitude').html(location.longitude);
      $('#ip').html(location.IPv4);
    }
  });
});
