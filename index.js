// Your code heredocument.addEventListener("keydown", function(e) {
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
});

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "");
  if (leftNumbers > 0) {
  let left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left - 1}px`;
  } else alert("Hit a motherfucking wall")
}
function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace("px", "");
  if (leftNumbers < 360){
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;
  }
  else alert("Hit a motherfucking wall")
}