$(document).ready(function () {
  let amenities = {};

  $('.amenities .popover input').change(() => {
    if ($(this).checked) {
      amenities[$(this).attr("data-name")] = $(this).attr('data-id');
    } else if ($(this).checked) {
      delete amenities[$(this).attr('data-name')];
    }
    let names = Object.keys(amenities);
    if (names.length > 0) {$('.amenities h4').text(names).sort();}
  });
});
