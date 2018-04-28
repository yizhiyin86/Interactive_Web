// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filtereddata to addressData initially
var filtereddata = dataSet;

// renderTable renders the filtereddata to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filtereddata.length; i++) {
    // Get get the current address object and its fields
    var event = filtereddata[i];
    var fields = Object.keys(event);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the event object, create a new cell at set its inner text to be the current value at the current event's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = event[field];
    }
  }
}

function handleSearchButtonClick() {
  // create a list to store if any input is empty
  var flag=[];
  
  // get an array of keys used for filtering 
  var keys=Object.keys(filtereddata[0]);
  
  console.log(`keys array is ${keys}`);

  // assign input values as variables and push it to the flag list
  //dateinput
  var filterDate = $dateInput.value.trim();
  flag.push(filterDate);

  var filterCity = $cityInput.value.trim().toLowerCase();
  flag.push(filterCity);

  var filterState = $stateInput.value.trim().toLowerCase();
  flag.push(filterState);

  var filterCountry = $countryInput.value.trim().toLowerCase();
  flag.push(filterCountry);

  var filterShape = $shapeInput.value.trim().toLowerCase();
  flag.push(filterShape);

  console.log(flag);

  filtereddata=dataSet;
  console.log(`data before filter is ${filtereddata.length}`);
  // var gua=filtereddata.slice(1);
  // console.log(gua['datetime']);
  for (var i=0;i<flag.length;i++)
  {if(flag[i].length!=0)
    {filtereddata=filtereddata.filter(event =>event[keys[i]]==flag[i]);
    console.log(`data after filter ${keys[i]} is ${filtereddata.length}`);
    }
  }

  if(filtereddata.length==0){
  window.alert('Well, no UFO event observed! Please reload the webpage before the next search!');}
  else{window.alert(`Your search is done! ${filtereddata.length} fits your searching standards.`)};
  renderTable();
  };


// Render the table for the first time on page load
renderTable();
