// Your code here

let dodger = document.getElementById("dodger");

// move left
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  // move right
function moveDodgerRight() {
    // let rightNumbers = dodger.style.right.replace("px", "");
    // let right = parseInt(rightNumbers, 10);
    // let rightNumbers = dodger.style.right.replace("px", "");
    // let right = left + 40
   
    // if (right < 400) {
    //   dodger.style.right = `${right + 1}px`;
    // }

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

//   move function

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });

