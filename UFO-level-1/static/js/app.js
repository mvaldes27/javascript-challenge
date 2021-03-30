// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufodata from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufodata object

  data.forEach(function(ufodata) {
    console.log(ufodata);

// Step 2:  Use d3 to append one table row `tr` for each ufodata object
    var row = tbody.append("tr");
// Step 3:  Use `Object.entries` to console.log each ufodata value
    Object.entries(ufodata).forEach(function([key, value]) {
      console.log(key, value);

// Step 4: Use d3 to append 1 cell per ufodata value
      var cell = row.append("td");

// Step 5: Use d3 to update each cell's text with ufodata values
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
form.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      runEnter();
    }
  });

function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // get the value from the form

  var inputValue = form.property("value");

//  filter table by date

var filteredData = tableData.filter(table => table.datetime === inputValue);

console.log(filteredData);

// clear original table
tbody.html("");

//display filtered table

filteredData.forEach(function(filter) {
  console.log(filter);

// Step 2:  Use d3 to append one table row `tr` for each ufodata object
  var row = tbody.append("tr");
// Step 3:  Use `Object.entries` to console.log each ufodata value
  Object.entries(filter).forEach(function([key, value]) {
    console.log(key, value);

// Step 4: Use d3 to append 1 cell per ufodata value
    var cell = row.append("td");

// Step 5: Use d3 to update each cell's text with ufodata values
    cell.text(value);
  });
});





  // // Select the input element and get the raw HTML node
  // var  = d3.select("#patient-form-input");

  // // Get the value property of the input element
  // var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(people); 

  // var filteredData = people.filter(person => person.bloodType === inputValue);

  // console.log(filteredData);

};