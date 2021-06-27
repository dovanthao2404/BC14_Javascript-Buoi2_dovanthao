const DIVIDEND = 5;
var a = document.getElementsByClassName("average__number");

var returnAverage = document.getElementById("returnAverage");

returnAverage.onclick = function () {
  var pShow = document.querySelector("#divContent p");
  pShow.innerHTML = '';
  var sum = 0;
  for (var index in a) {
    if (a.hasOwnProperty(index) && !isNaN(a[index].value)) {
      sum += +a[index].value;
    } else if (a.hasOwnProperty(index)) {
      sum += a[index].value;
      break;
    }
  }
  if (isNaN(sum)) {
    var pShowAverage = document.createElement("p");
    pShowAverage.innerHTML = `Vui Lòng Nhập Số`;
    divContent.appendChild(pShowAverage);
  } else {
    var resultSuccess = `Trung Bình:  ${average}`;
    showResult()
  }
};

function showResult(result) {
  var pShow = document.createElement("p");
  var returnAverage = document.getElementById("returnAverage");
  returnAverage = ''
  pShow = result;
  returnAverage.appendChild(pShow);
}