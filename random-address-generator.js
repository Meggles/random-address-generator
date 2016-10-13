var streetNumber = ['21', '5', '22', '54', '3', '60'];
var streetName = ['Elm Street', 'Maple Drive', 'Cedar Avenue', 'Willow Road', 'Oak Circle', 'Pine Way'];
var city = ['Sturbridge', 'Pacific Beach', 'Florence', 'Portsmouth', 'Seattle', 'Somerville'];
var state = ['Massachusetts', 'California', 'Rhode Island', 'Maine', 'Florida', 'Washington'];
var zip = ['01566', '92109', '02144', '02109', '01010', '13245'];

var randomStreetNumbers = Math.floor(Math.random() * streetNumber.length);
var randomStreetNumber = streetNumber[randomStreetNumbers];

var randomStreetNames = Math.floor(Math.random() * streetName.length);
var randomStreetName = streetName[randomStreetNames];

var randomCities = Math.floor(Math.random() * city.length);
var randomCity = city[randomCities];

var randomStates = Math.floor(Math.random() * state.length);
var randomState = state[randomStates];

var randomZips = Math.floor(Math.random() * zip.length);
var randomZip = zip[randomZips];

var addressParts = [randomStreetNumber, randomStreetName, randomCity, randomState, randomZip];
var randomAddresses = addressParts.forEach(function(el) {
  console.log(el);
//   console.log(el.join(', '));
});

// TODO:
// 1. Join all values into a single string
// 2. DRY it up: make array [StreetNumber, StreetName, City, State, Zip] and loop through each using variables (for StreetNumber, States, etc) it to make code much more concise!
