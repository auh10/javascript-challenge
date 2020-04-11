// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// use .map() to create table inside tbody tag w/innerHTML
let userHTML = data.map(data => `<tr><td>${data.datetime}</td><td>${data.city}</td><td>${data.state}</td><td>${data.country}</td><td>${data.shape}</td><td>${data.durationMinutes}</td><td>${data.comments}</td></tr>`)
document.querySelector('table tbody').innerHTML = userHTML.join('');


// //create a function to filter the input search bar
 
//   let button = d3.select("#filter-btn");

//     button.on("click", function() {

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

//   var filteredData = data.filter(data => data.datetime === date);

//   buildTable(filteredData);




