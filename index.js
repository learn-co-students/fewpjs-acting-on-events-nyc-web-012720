// Your code here

// function moveDodgerLeft(){
//     let dodger = document.getElementById("dodger");

//    return document.addEventListener("keydown",function(e){
//         if(e.key === "ArrowLeft"){
//             // debugger
//             let splitPx = dodger.style.left.split("px")
//             let moveByOne = parseInt(splitPx[0], 10)
//             return dodger.style.left = `${moveByOne - 1}` + "px";
            
//         }
//     })
// }

// function moveDodgerRight(){
//     let dodger = document.getElementById("dodger");

//    return document.addEventListener("keydown",function(e){
//         if(e.key === "ArrowRight"){
//             let splitPx = dodger.style.left.split("px")
//             let moveByOne = parseInt(splitPx[0], 10)
//             return dodger.style.left = `${moveByOne + 1}` + "px";
            
//         }
//     })
// }


function moveDodgerLeft() {
    let dodger = document.getElementById("dodger");

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let dodger = document.getElementById("dodger");

    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);
   
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }

  document.addEventListener("keydown", function(e){
      if(e.key === "ArrowLeft"){
          moveDodgerLeft();
      }else if(e.key === "ArrowRight") {
        moveDodgerRight();
      }
  })