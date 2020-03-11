// Your code here
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
}); 

const dodger = document.getElementById('dodger');
const containerWidth = document.getElementById('game').offsetWidth;

const moveDodgerLeft = () => {
    let left = parseInt(dodger.style.left, 10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
};

const moveDodgerRight = () => {
    let left = parseInt(dodger.style.left, 10);
    
    if (left < (containerWidth-dodger.offsetWidth)) {
        dodger.style.left = `${left + 1}px`;
    }
}