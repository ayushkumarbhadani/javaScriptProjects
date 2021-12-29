let input=document.querySelector("#new-task");
let form=document.querySelector("#addNewTask");
let todoList=[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!todoList.includes(input.value)){
        var isEdit=false;
        if(input.value!=="" && !isEdit){
            todoList.push(input.value);
            input.value="";
            document.querySelector(".good").innerHTML="Task added Successfully";
            displayNoneToggle(".good");
            let todoListText=todoList.map((item)=>{
                return`
                <div class="todo-list-container">
                <input type="checkbox">
                <p>${item}</p>
                <button class="modify-todo edit"><i class="far fa-edit"></i></button>
                <button class="modify-todo delete"><i class="far fa-trash-alt"></i></button>
            </div>
                `;
                
            });
            todoListText=todoListText.join("");
            document.querySelector(".todo-list").innerHTML=todoListText;
            addEvent();
        }
        else if(isEdit){
            let temVar=item.previousElementSibling.textContent;
            input.value=temVar;
            input.focus();
            
            todoList[todoList.indexOf(temVar)]=input.value;
        }
        else{
            document.querySelector(".danger").innerHTML="Please Enter Somthing";
            displayNoneToggle(".danger");
        }
        
    }
    else{
        console.log("Already Added");
        document.querySelector(".warning").innerHTML="Already added to the list";
        displayNoneToggle(".warnings");
    }
    console.log(todoList);
    
    
});
function displayNoneToggle(item){
    document.querySelector(item).classList.remove("displayNone");
    setTimeout(()=>document.querySelector(item).classList.add("displayNone"),3000);
}
function addEvent(){
    document.querySelectorAll(".edit").forEach((item)=>{
        item.addEventListener("click",()=>{
            isEdit=true;
        });
    });
}