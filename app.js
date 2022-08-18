//Create objects to store elements


//step 1: create a function to display
//step 2: access main section by id
//step 3: create a div element using back-ticks dynamically with service
//step 4: append the div to main section 
//  place the button in the js file and modal body in html file

//Call the function giving the object as parameter

//handle booking info

/**
 * write function named handleBooking
 * it will have an object as parameter
 * button onclick call handleBooking function. {object as parameter won't work in the function. Have to pass using JSON.stringify}
 * 
 */



//let's create object

let arrServices = [

{
  vehicle : 'Car',

  imageUrl : 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',

  description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?',

  farePerKilo : 3,
  capacity : 4

},

{
  vehicle : 'Bus',

  imageUrl : 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',

  description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?',

  farePerKilo : 3,
  capacity : 40

},

{
  vehicle : 'Bike',

  imageUrl : 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',

  description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?',

  farePerKilo : 2,
  capacity : 2

}


]

function travelServices(transport){

const mainContainer = document.getElementById('main-container');

const stringifiedObject = JSON.stringify(transport);

let div = document.createElement("div");

div.innerHTML = `

<div class="card mt-3 mx-auto" style="max-width:1000px">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${transport.imageUrl}" class="img-fluid rounded h-100" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Transport Mode: ${transport.vehicle}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
      <p class="card-text"><small class="text-muted">Fare Per Kilo: ${transport.farePerKilo}</small></p>
      <p class="card-text"><small class="text-muted">Capacity: ${transport.capacity}</small></p>
      <button onclick = 'handleBooking(${stringifiedObject})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Book Now
        </button>

    </div>
  </div>
</div>
</div>


`

mainContainer.appendChild(div);

}

// travelServices(carObject);
// travelServices(busObject);
// travelServices(bikeObject)
function displayAllServices(services){
for(let i = 0; i < services.length;i++)
{
  let element = services[i];
  travelServices(element);

}
}

displayAllServices(arrServices);

function handleBooking(obj){
  const modalBody = document.getElementById('modal-body');
  const stringifiedObj = JSON.stringify(obj);
  modalBody.innerHTML = `

  <div class="card" style="width: auto;">
  <img class="card-img-top" src="${obj.imageUrl}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${obj.vehicle}</h5>
    <p class="card-text">Fare per kilo: ${obj.farePerKilo} Capacity: ${obj.capacity}</p>
    <p class="card-text">Fare: <span id="fare-total"></span></p>
    <p class="card-text">Tax: <span id="tax-total"></span></p>
    <p class="card-text">Total-cost: <span id="total-cost"></span></p>

    <div class="d-flex">
    <input id ="distance" class="form-control me-2" type="input" placeholder="Distance to travel" aria-label="Search">
    <input id="vehicle-quantity" class="form-control me-2" type="input" placeholder="Vehicle Quantity" aria-label="Search">
    <button id="btn-booking" class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringifiedObj})'>Submit</button>
    </div>    
  </div>
</div>
`

//Calculate Total Fare

}

function calculateCost(obj){
  console.log(obj);
    const distanceInput = document.getElementById('distance').value;
    const vehicleQuantity = document.getElementById('vehicle-quantity').value;
  
    console.log(distanceInput,vehicleQuantity);
    const totalFare = distanceInput * vehicleQuantity * obj.farePerKilo;
  
    document.getElementById('fare-total').innerText = totalFare;
  
    document.getElementById('total-cost').innerText = totalFare;    
  }


document.getElementById('btn-search').addEventListener('click',function(){
  const searchValue = document.getElementById('search-content').value;

  for(let i = 0; i < arrServices.length; i++)
  {
    const element = arrServices[i];

    if(element.vehicle.toLowerCase() == searchValue.toLowerCase()){
      document.getElementById('main-container').innerHTML = "";
      travelServices(element);
      return;
    } 

    
  }
  alert("Sorry! Nothing found for your input");
})





