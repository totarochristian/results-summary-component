let data;
//Fetch data from the data file
fetch('../data.json')
.then((response) => response.json())
.then((data) => {
  let scoreTot = 0;
  data.forEach(element => {
    var container = document.getElementById(element.category.toLowerCase());
    var img = container.getElementsByClassName("icon")[0];
    img.src = element.icon;
    var score = container.getElementsByClassName("score")[0];
    score.textContent = element.score;
    scoreTot += element.score;
  });
  var mainScoreResult = document.getElementById("resultSection").getElementsByClassName("score")[0];
  mainScoreResult.textContent = Math.round(scoreTot / data.length);
});