// alert('i am alive')
// grab images in a variable
let pics = [
    "/images/design1.jpg",
    "/images/design2.jpg",
    "/images/design3.jpg",
    "/images/design4.jpg",
    "/images/design5.jpg",
    "/images/design6.jpg"

]

let btn = document.querySelector("button")
let img = document.querySelector("#icon")
// console.log(img.src);

let counter = 1
btn.addEventListener('click', function () {
    // alert('CLICKED')
    // solve proplem counter > pics number
    if (counter === 6) {
        counter = 0
    }

    img.src = pics[counter]

    counter++

})

//to solve problem of no pic at start
window.addEventListener("load", function () {
    img.src = pics[1]
});