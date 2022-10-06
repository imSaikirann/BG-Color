const text = document.querySelector("input")
const box = document.querySelector(".box")
const body = document.querySelector("body")

text.addEventListener("keyup",(e)=>{
    const bgColor = e.target.value;
    body.style.backgroundColor=bgColor;
    
    setTimeout(()=>{
        resetbg();
    },30000)
})

function resetbg()
{
    body.style.backgroundColor="black"
    text.value=""
}