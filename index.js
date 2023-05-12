let cursor = document.querySelector(".cursor")
let btn = document.querySelector("button")


// document.addEventListener("mousemove", (event) => {
//     console.log(event.pageX);
//     console.log(event.pageY);
// })


// btn.addEventListener("mousedown", (event) => {
//     cursor.style.cursor = "pointer"
//     cursor.style.background = "none"
// })


document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.pageX + "px"
    cursor.style.top = event.pageY + "px"
    cursor.style.display = "block"


})


btn.onmouseout = () => {
    cursor.style.cursor = "pointer";
    cursor.style.background = "none";
}

cursor.onmouseout = () => {
    // cursor.style.position = "absolute";
    cursor.style.background = "yellow";
}

    





// function big(cursor) {
//     cursor.style.cursor = "pointer";
//     cursor.style.background = "yellow";
// }