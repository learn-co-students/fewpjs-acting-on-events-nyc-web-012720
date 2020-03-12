let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"

// dodger.style.bottom = "100px"

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        let leftNumbers = dodger.style.left.replace("px", "")
        let left = parseInt(leftNumbers, 10)
        if (left > 0){
            dodger.style.left = `${left - 1}px`
        }
    }
    if (event.key === "ArrowRight"){
        let rightNumbers = dodger.style.left.replace("px", "")
        let right = parseInt(rightNumbers, 10)
        if (right < 360){
            dodger.style.left = `${right + 1}px`
        }
    }
    if (event.key === "ArrowUp"){}
    if (event.key === "ArrowDown"){}
})

let moveDodgerLeft = function(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
}
let moveDodgerRight = function(){
    let rightNumbers = dodger.style.left.replace("px", "")
    let right = parseInt(rightNumbers, 10)
    if (right < 360){
        dodger.style.left = `${right + 1}px`
    }
}