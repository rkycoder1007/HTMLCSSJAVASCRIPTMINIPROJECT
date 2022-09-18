const question=document.querySelectorAll(".question");
question.forEach((value)=>{
    value.addEventListener("click",()=>{
        const ans=value.lastElementChild;
        ans.classList.toggle("active");
        const i=value.firstElementChild.firstElementChild.firstElementChild;
        i.classList.toggle("rotate");
    })
})