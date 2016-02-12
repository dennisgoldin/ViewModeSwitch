var myTest = document.querySelector("#test");
var myGridStyle = document.querySelector("#grid");
var myListStyle = document.querySelector("#list");

myTest.addEventListener('click', function () {
  console.log(myGridStyle.disabled);
  if (!myGridStyle.disabled) {
    myGridStyle.disabled = true;
    myListStyle.disabled = false;
  } else {
    myGridStyle.disabled = false;
    myListStyle.disabled = true;
  }
});
