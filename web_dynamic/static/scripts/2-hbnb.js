$(document).ready(function () {
  fetch('http://localhost:5001/api/v1/status/')
    //.then((response) => response.json())
    .then((response) => console.log(response));
});
