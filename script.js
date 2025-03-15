const yesChek = document.getElementById("yes");
const noChek = document.getElementById("no");
const btn = document.getElementById("btn");
const artem =document.getElementById("artem")
let yes=false;
let counter=0;
yesChek.addEventListener('change',(event)=>{
yes =!yes;
})
btn.addEventListener('click',(event)=>{
    event.preventDefault();
if(yes){
    alert("Напши в тг")
}
else{
    
    counter++;
    if(counter===1){
        confirm('Ваще ахулеа передумай может?')
    }
    if(counter===2){
        confirm('Хорошо подумай')
    }
    if(counter===3){
        confirm('последний шанс чмо')
    }
     if (counter===4){

        setInterval(() => {
            window.open("/docs.html", "_blank");
        }, 500); 
        
}
}
})
artem.addEventListener("mouseenter", () => {
    notification.style.display = "block";
});

artem.addEventListener("mouseleave", () => {
    notification.style.display = "none";
});