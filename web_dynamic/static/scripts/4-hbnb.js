function getPlaces(data) {
  // Gets places by amenities
  $.ajax({
    type: "POST",
    url: "http://localhost:5001/api/v1/places_search/",
    data: JSON.stringify(data),
    dataType: "json",
    contentType: "application/json",
    success: (data) => {
      data.forEach(place => {
        $('.places').append(`<article><div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div><div class="information"><div class="max_guest">${place.max_guest} Guests</div><div class="number_rooms">${place.number_rooms} Bedrooms</div><div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div></div><div class="description">$${place.description}</div></article>`);
      });
    };
  });
}

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

  $.get('http://localhost:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  getPlaces({});

  $('button').click(function () {
    const amenityKeys = Object.values(amenities);
    const dict = {};
    dict.amenities = amenityKeys;
    getPlaces(dict);
  });
});
