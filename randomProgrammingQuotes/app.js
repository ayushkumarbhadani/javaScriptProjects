const fetchBtn=document.getElementById("getQuote");
const randomQuote=document.getElementById("randomQuote");
const randomQuoteData=document.getElementById("randomQuoteData");
const author=document.getElementById("author");

URL="https://programming-quotes-api.herokuapp.com/Quotes";

async function fun(url,randomQuoteData,author){
    try{
        const data=await fetch(url);
        const json=await data.json();
        await appentData(json);
    }
    catch(err){
        console.log(err);
    }
}
function appentData(data){
    let randomNum=Math.floor(Math.random()*data.length);
    let color=getRandomColor();
    randomQuote.style.backgroundColor=color.lightColor;
    randomQuote.style.borderColor=`${color.darkColor}`;
    const item=data[randomNum];
    randomQuoteData.innerText=item.en;
    author.innerText=`-${item.author}`;
    fetchBtn.removeAttribute("disabled");
}
function getRandomColor(){
    let rgb="";
    for(let i=0;i<3;i++){
        rgb+=`${Math.floor((Math.random()*156)+50)},`;
    }
    const obj={
        lightColor:`rgba(${rgb}0.4)`,
        darkColor:`rgba(${rgb}1)`
    }
    return obj;
}
fetchBtn.addEventListener("click",(e)=>{
    fun(URL);
    e.currentTarget.setAttribute("disabled","");
    randomQuoteData.innerText="Loading a Random Quote...";
    author.innerText="Project By Ayush Kumar Bhadani";
    randomQuote.style.backgroundColor="#444";
    randomQuote.style.borderColor="#444";

});
fun(URL);