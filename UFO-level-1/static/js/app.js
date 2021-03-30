// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufodata from data.js
console.log(tableData);

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

function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // get the value from the form

  var inputValue = form.property("value");

  //  filter table by..

  var filteredbydate = tableData.filter(table => table.datetime === inputValue);
  var filteredbycity = tableData.filter(table => table.city === inputValue);
  var filteredbystate = tableData.filter(table => table.state === inputValue);
  var filteredbycountry = tableData.filter(table => table.country === inputValue);
  var filteredbyshape = tableData.filter(table => table.shape === inputValue);

  //save inputs as array

  //if value is null, don't need it, if it is, pull through and filter based on criteria 

  var filters = [filteredbydate, filteredbycity, filteredbystate, filteredbycountry, filteredbyshape];

  // clear original table
  tbody.html("");

  //display filtered table

  d3.select(".form-control>span").text(inputValue);

//filter by date
  filteredbydate.forEach(function(filter) {
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

};
  