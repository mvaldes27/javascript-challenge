// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufodata from data.js
console.log(tableData);



//function to add table data

function addTable(data){
  var row = tbody.append("tr");
  Object.entries(data).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
}

//add tableData to page

tableData.forEach(addTable);

var filteredData = tableData; 

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

  //select all input boxes
  var dateInput = d3.select('#datetime').property('value');
  var cityInput = d3.select('#city').property('value');
  var stateInput = d3.select('#state').property('value');
  var countryInput = d3.select('#country').property('value');
  var shapeInput = d3.select('#shape').property('value');

  //save input values into array
  var filterBy = [dateInput, cityInput, stateInput, countryInput, shapeInput];
  var filteredData = data; 
  
  //use forEach to iterate through each filter
  filterBy.forEach(filter => {

    if (filter !== "" || filter !== null){
      if ((filteredData.some(event => event.datetime == filter)) == true){
        filteredData = filteredData.filter(event => event.datetime == filter);
        console.log(filteredData);
      }
      else if ((filteredData.some(event => event.city == filter)) == true){
        filteredData = filteredData.filter(event => event.city == filter);
        console.log(filteredData);
      }
      else if ((filteredData.some(event => event.state == filter)) == true){
        filteredData = filteredData.filter(event => event.state == filter);
        console.log(filteredData);
      }
      else if ((filteredData.some(event => event.country == filter)) == true){
        filteredData = filteredData.filter(event => event.country == filter);
        console.log(filteredData);
      }
      else if ((filteredData.some(event => event.shape == filter)) == true){
        filteredData = filteredData.filter(event => event.shape == filter);
        console.log(filteredData);
      }

      
    }

    

  });

  //clear original table
  tbody.html("");

  //append filtered table data

  filteredData.forEach(addTable);



};