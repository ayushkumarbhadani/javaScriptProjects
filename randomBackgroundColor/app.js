let generateRandomColor=()=> (generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber())
let generateRandomNumber = ()=> (Math.floor(Math.random()*256));
function changeBackground(){
    let newBackgroundColor="rgb("+generateRandomColor()+")";
    document.querySelector("#background").innerHTML= " "+newBackgroundColor;
    document.body.style.backgroundColor=newBackgroundColor;
}
document.querySelector("#btn").addEventListener("click",()=>
    changeBackground())
changeBackground();