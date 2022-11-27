$(document).ready(function () {
  const amenities = {};

  $('.amenities .popover input').click(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete amenities[$(this).attr('data-name')];
    }
    const names = Object.keys(amenities);
    if (names.length > 0) {
      $('.amenities h4').text(names).sort();
    } else {
      $('.amenities h4').text('');
    }
  });

  fetch('http://localhost:5001/api/v1/status/')
  .then((response) => response.json()).then(data => {
    if (data.status === "OK") {
      $('#api_status').addClass('available');
      // if ($('#api_status').hasClass('available')) {
      //   console.log('yes it does');
      // }
    } else {
      $('#api_status').removeClass('available');
    }
    // console.log(data);
  });
});
