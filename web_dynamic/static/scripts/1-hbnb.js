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
});
