function changeBackground(color) {
    document.body.style.background=color   
}

const toogleBtn= document.getElementById("btn")

toogleBtn.addEventListener("click", () => {
    let currentColor= document.body.style.background;

    switch (currentColor) {
        case (currentColor=="white"):
            changeBackground('black')
            break;
        case (currentColor=="black"):
            changeBackground('white')
            break;    
        default:
            changeBackground('white')
            break;
    }
    if (currentColor=! 'white'){
        changeBackground('white')
    }
    else{
        changeBackground('black')
    }
});


const BlackBtn= document.getElementById("black")
BlackBtn.addEventListener("click",()=>{
    changeBackground('black')
})
const WhiteBtn= document.getElementById("white")
WhiteBtn.addEventListener("click",()=>{
    changeBackground('white')
})
const RedBtn= document.getElementById("red")
RedBtn.addEventListener("click",()=>{
    changeBackground('red')
})
const GreenBtn= document.getElementById("green")
GreenBtn.addEventListener("click",()=>{
    changeBackground('green')
})

