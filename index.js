// Your code here
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });


    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft") {
        moveDodgerLeft();
      }
    });


    function moveDodgerLeft() {
        let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
     
      if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
    }

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(rightNumbers, 10);
  
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
  }