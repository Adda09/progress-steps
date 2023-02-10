let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");
let progress = document.getElementsByClassName("progress")[0]


let curr = 1 ; 

next.addEventListener('click',() => {
    curr++ ;
    if(curr > circles.length){
        curr = circles.length
    }
    charge()
})

prev.addEventListener('click',() => {
    curr-- ;
    if(curr < 1){
        curr = 1
    }
    charge();
});

function charge(){
    circles.forEach((circle, index) =>{
        if(index < curr){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    });

    const act = document.querySelectorAll('.active')
    

    progress.style.width = (act.length - 1) / (circles.length - 1) * 100 + '%'

    if(curr ===  1){
        prev.disabled = true
    }else if(curr === circles.length){
        next.disabled = true

    }else{
        prev.disabled = false
        next.disabled = false
    }
}