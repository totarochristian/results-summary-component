let data;
//Fetch data from the data file
fetch('../data.json')
.then((response) => response.json())
.then((data) => {
  console.log(data);
  data.forEach(element => {
    var container = document.getElementById(element.category.toLowerCase());
    var img = container.getElementsByClassName("icon");
    console.log(img);
  });
});