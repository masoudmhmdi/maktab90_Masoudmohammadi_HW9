const olElement =document.getElementById("elem")
console.log(olElement)

function clearElement(el){
    el.innerHTML=""
}

setTimeout(()=>{
    clearElement(olElement)
},5000)