const cardContainer=document.getElementById("wrapper")
console.log(cardContainer)


cardContainer.addEventListener("click",(e)=>{
    let el=e.target
    if(el.classList.contains("btn")){
        el.closest(".card").style.display="none"
    }

})

