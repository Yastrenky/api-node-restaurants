let container = document.getElementById('restaurantssccontainer');
let details = document.getElementById('details')
const root = "/api/restaurant";
let detailList={};
$(function() {
  $(map).googleMap({
    zoom:2,
  type: "TERRAIN"
  });
  })
document.getElementById('restaurantssccontainer').onclick = function() {
    event.preventDefault();
    details.innerHTML = '';
    var restaurantID = event.target.getAttribute('data-id');
    var restaurantlong = event.target.getAttribute('data-long');
    var restaurantlat = event.target.getAttribute('data-lat');
    if (restaurantID) {
    detailList[restaurantID].forEach(elm=>{
      let  detailElement = document.createElement('div');
      detailElement.classList.add('detailCard')
      detailElement.innerHTML = decorateDetail(elm);
      details.appendChild(detailElement);
    })





      $(function() {
        $(map).googleMap({
          zoom: 30, // Initial zoom level (optional)
          type: "HYBRID"
        });
        $(map).addMarker({
          coords: [restaurantlong, restaurantlat],
          url: 'http://www.tiloweb.com', // Link to redirect onclick (optional)
          id: 'marker1' // Unique ID for your marker
        });
        })

  }
}// end of event on click


    fetch(root, {
        method: 'get',
      })
      .then(res => res.json())
      .then(res => {
        res.forEach(restaurant => {
          let restaurantElement = document.createElement('div');
          let tempID = restaurant.restaurant_id;
           detailList[tempID]=restaurant.grades;
          restaurantElement.classList.add('restaurant-card')
          restaurantElement.innerHTML = decorateRestaurant(restaurant);
          container.appendChild(restaurantElement);
        })
      })
      .catch(function(error) {
        console.log(error);
      });

    function decorateRestaurant(data) {

      return `
<div><h2>Name: "${data.name}"</h2></div>
<div>Borough: "${data.borough}"</div>
<div>Type of Cuisine: "${data.cuisine} Food"</div>
<span
  data-id="${data.restaurant_id}"
  data-long='${data.address.coord[1]}'
  data-lat ='${data.address.coord[0]}'
  class="deletButton btn btn-success">
  <i class="material-icons ">location_on</i>SHOW IN MAP
</span>
`};
     function decorateDetail(data){

       console.log(data);
        var text= ` <div style="margin=2px;  border: 1px solid #a1a1a1; padding: 8px;" >
         <span>Grade: ${data.grade}</sapan>
         <span>Score: ${data.score}</sapan>
         <div>Date: ${data.date.slice(0, 10)}</div>
         </div>
         `
       return text;
     }
