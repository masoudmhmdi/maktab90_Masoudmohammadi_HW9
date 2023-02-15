const btn=document.getElementById("hider")
const text=document.getElementById("text")
console.log(btn , text)

function hider(){
    text.style.display="none"
    setTimeout(function(){
        console.log(this)
        btn.style.display="none"
        console.log("done")
    },3000)
}

btn.addEventListener("click",hider)