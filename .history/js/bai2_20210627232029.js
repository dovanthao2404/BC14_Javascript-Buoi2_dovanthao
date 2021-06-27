const DIVIDEND = 5;
var a = document.getElementsByClassName("average__number");

var returnAverage = document.getElementById("returnAverage");

returnAverage.onclick = function () {
  var sum = 0;
  if (isNaN(sum)) {
    var resultFailure = `Vui Lòng Nhập Số`;
    showResult(resultFailure);
  } else {
    var average = sum / DIVIDEND;
    var resultSuccess = `Trung Bình:  ${average}`;
    showResult(resultSuccess);
  }
};
function averaged() {

  for (var index in a) {
    if (a.hasOwnProperty(index) && !isNaN(a[index].value)) {
      sum += +a[index].value;
    } else if (a.hasOwnProperty(index)) {
      sum += a[index].value;
      break;
    }
  }
}
function showResult(result) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = '';
  var pShow = document.createElement("p");
  pShow.innerHTML = result;
  divContent.appendChild(pShow);
}