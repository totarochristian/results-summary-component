let data;
//Fetch data from the data file
fetch('../data.json')
.then((response) => response.json())
.then((data) => {
  console.log(data);
});