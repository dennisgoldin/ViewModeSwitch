
var gridView = document.querySelector("#gridLink");
var listView = document.querySelector("#listLink");

var gridStyle = document.querySelector("#grid");
var listStyle = document.querySelector("#list");

gridView.addEventListener('click', function () {
  console.log("*Grid Click*");
  gridStyle.disabled = false;
  listStyle.disabled = true;
});

listView.addEventListener('click', function () {
  console.log("*List Click*");
  gridStyle.disabled = true;
  listStyle.disabled = false;
});


// This will toggle.  I need an action for each icon
//
// var mySwitch = document.querySelector("#iconContainer");
// var myGridStyle = document.querySelector("#grid");
// var myListStyle = document.querySelector("#list");
//
// mySwitch.addEventListener('click', function () {
//   console.log(myGridStyle.disabled);
//   if (!myGridStyle.disabled) {
//     myGridStyle.disabled = true;
//     myListStyle.disabled = false;
//   } else {
//     myGridStyle.disabled = false;
//     myListStyle.disabled = true;
//   }
// });
