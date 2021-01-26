// Business Logic:

function TravelBook() {
  this.places = {};
  this.currentId = 0;
}

TravelBook.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

TravelBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Place(location, landmark, timeOfYear, notes, traveler) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.traveler = traveler
}
let travelBook = new TravelBook();

let kansas = new Place("Kansas", "Jayhawk Statue", "August", "Really Flat", "Austin");
let egypt = new Place("Egypt", "Pyramids", "December", "Very Dirty", "Sage");
let singapore = new Place("Singapore", "Singapura", "June", "Beautiful", "James");
let spain = new Place("Alicante", "Sea", "November", "Really Sunny", "Olga");

travelBook.addPlace(kansas);
travelBook.addPlace(egypt);
travelBook.addPlace(spain);
travelBook.addPlace(singapore);

// console.log(travelBook);

// User Interface Logic:

$(document).ready(function() {
  let addNewPlace;
    $("#Austin").click(function(){
      console.log("clicked");
      
      $("#landis").text(`Austin has been to  ${travelBook.places[1].location},  where the landmark is a ${travelBook.places[1].landmark}. He went there in  ${travelBook.places[1].timeOfYear} and took these notes "${travelBook.places[1].notes}"! ${travelBook.places[1].traveler} is a great traveler.`);
      $("#landis").toggle();
    });

    $("#Sage").click(function(){
      console.log("clicked");
      $("#sypert").text(`Sage has been to ${travelBook.places[2].location}, where the landmark are the ${travelBook.places[2].landmark}. She went there in ${travelBook.places[2].timeOfYear} and took these notes "${travelBook.places[2].notes}"! ${travelBook.places[2].traveler} loves to travel.`);
      $("#sypert").toggle();
    });

    $("#Olga").click(function(){
      console.log("clicked");
      $("#hizhytska").text(`I was live in ${travelBook.places[3].location } for 10 years, and I enjoyed a lot from a ${travelBook.places[3].landmark}. Last time I was there in ${travelBook.places[3].timeOfYear} and it was ${travelBook.places[3].notes}. It was written by ${travelBook.places[3].traveler}`);
      $("#hizhytska").toggle();
    });

    $("#James").click(function(){
      console.log("clicked");

      $("#wyn").text(`${travelBook.places[4].traveler} has been to  ${travelBook.places[4].location},  where the landmark is ${travelBook.places[4].landmark}. He went there in  ${travelBook.places[4].timeOfYear} and took these notes "${travelBook.places[4].notes}"!`);
      $("#wyn").toggle();
    });

    $("form#places-form").submit(function(event) {
      event.preventDefault();
      addNewPlace = new Place($("input#add-location").val(), $("input#add-landmark").val(), $("input#add-toy").val(),$("input#add-notes").val(), $("input#add-traveler").val());
      console.log(addNewPlace);
  });
});

