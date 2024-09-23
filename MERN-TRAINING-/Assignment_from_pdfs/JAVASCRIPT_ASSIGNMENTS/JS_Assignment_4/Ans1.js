let count = 0;
let btn = document.getElementById("btn-change")

btn.addEventListener("click", () => {
    let text = document.getElementById("text")
    text.innerText = "Text change count " + (++count) 
})