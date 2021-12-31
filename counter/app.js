function getElement(value){
    let element=document.querySelector(value);
    if(element){
        return element;
    }
    throw new Error(`Element "${value}" does not exist`);
}
class Counter{
    constructor(element,value){
        this.counter=element;
        this.value=value;

        this.incBtn=element.querySelector(".increase");
        this.decBtn=element.querySelector(".decrease");
        this.resetBtn=element.querySelector(".reset");

        this.valueDOM=element.querySelector(".value>h1");
        this.valueDOM.textContent=this.value;

        this.increase=this.increase.bind(this);
        this.decrease=this.decrease.bind(this);
        this.reset=this.reset.bind(this);

        this.incBtn.addEventListener("click",this.increase);
        this.decBtn.addEventListener("click",this.decrease);
        this.resetBtn.addEventListener("click",this.reset);
    }
    increase(){
        this.value++;
        this.valueDOM.textContent=this.value;
    }
    decrease(){
        this.value--;
        this.valueDOM.textContent=this.value;
    }
    reset(){
        this.value=0;
        this.valueDOM.textContent=this.value;
    }
}
let firstCounterInitialPoint;
let secondCounterInitialPoint
function getUserInput()
{
    firstCounterInitialPoint=prompt("Enter First Counter Starting Point:");
    secondCounterInitialPoint=prompt("Enter Second Counter Starting Point:");
    checkUserInput();
}
function checkUserInput(){
    try{
        if(isNaN(firstCounterInitialPoint) || isNaN(secondCounterInitialPoint)){
            throw new Error("Value Entered is not a Number, Please enter a number");
            // console.log("nonanumber")
        }
    }catch(err){
        alert(err);
        getUserInput();
        
    }
}
getUserInput();


const firstCounter=new Counter(getElement(".first-counter"),firstCounterInitialPoint);
const secondCounter=new Counter(getElement(".second-counter"),secondCounterInitialPoint);