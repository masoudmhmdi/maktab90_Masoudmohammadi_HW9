const elements=document.querySelectorAll(".hover-text")
console.log(elements)

// document.body.addEventListener("mouseleave")

elements.forEach((item)=>{
    item.addEventListener("mouseenter",(e)=>{
        let topPosition = e.target.getClientRects()[0].top
        if(topPosition>20){
            e.target.querySelector(".tooltip-text").setAttribute("id","top")
            e.target.querySelector(".tooltip-text").style.display="inline-block"
        }

        if(topPosition<20){
            e.target.querySelector(".tooltip-text").setAttribute("id","bottom")
            e.target.querySelector(".tooltip-text").style.display="inline-block"
        }

    })
})


elements.forEach((item)=>{
    item.addEventListener("mouseleave",(e)=>{
        let topPosition = e.target.getClientRects()[0].top
        if(topPosition>20){
            e.target.querySelector(".tooltip-text").setAttribute("id","")
            e.target.querySelector(".tooltip-text").style.display="none"
        }

        if(topPosition<20){
            e.target.querySelector(".tooltip-text").setAttribute("id","")
            e.target.querySelector(".tooltip-text").style.display="none"
        }

    })
})
