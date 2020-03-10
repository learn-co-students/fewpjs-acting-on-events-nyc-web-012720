let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});






// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
// });














// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
//     dodger.style.left = `${left - 5}px`;
//     }
// });


// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
//     dodger.style.left = `${left - 10}px`;
//     }
// });




// function moveDodgerLeft() {







// }

    // let mouse = document.querySelector('#Mouse_events')

    // mouse.addEventListener('click', function() {
    //     mouse.style.transform = 'rotate(360deg)';
    //     mouse.style.transition = '1.5s'
    // })
    // undefined
    // mouse.addEventListener('dblclick', function() {
    //     mouse.style.transform = 'rotate(-360deg)';
    //     mouse.style.transition = '1.5s'
    // })