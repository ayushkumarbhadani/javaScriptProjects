let input=document.querySelector("#new-task");
let form=document.querySelector("#addNewTask");
let todoList=[];
let index=-1;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if(!todoList.includes(input.value)){
        if(input.value!==""){
            if(index==-1){
                todoList.push(input.value);
            }
            else{
                todoList[index]=input.value;
                index=-1;
                document.querySelector(".btn").textContent="Add Item";
            }
            input.value="";
            document.querySelector(".good").innerHTML="Task Added Successfully";
            displayNoneToggle(".good");
            renderTodo();
            addEvent();
        }
        else{
            document.querySelector(".danger").innerHTML="Please Enter Somthing";
            displayNoneToggle(".danger");
        }  
    }
    else{
        document.querySelector(".warning").innerHTML="Already added to the list";
        displayNoneToggle(".warnings");
    }
});
function displayNoneToggle(item){
    document.querySelector(item).classList.remove("displayNone");
    setTimeout(()=>document.querySelector(item).classList.add("displayNone"),3000);
}
function renderTodo(){
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
function addEvent(){
    document.querySelectorAll(".edit").forEach((item)=>{
        item.addEventListener("click",()=>{
            var tempvar=item.previousElementSibling.textContent;
            input.value=item.previousElementSibling.textContent;
            input.focus();
            index=todoList.indexOf(tempvar);
            document.querySelector(".btn").textContent="Update";
        });
    });
    document.querySelectorAll(".delete").forEach((item)=>{
        item.addEventListener("click",()=>{
            var tempvar=item.previousElementSibling.previousElementSibling.textContent;
            var deleteIndex=todoList.indexOf(tempvar);
            if(deleteIndex!==-1){
                todoList.splice(deleteIndex,1);
                displayNoneToggle(".danger");
            }
            renderTodo();
        });
    });
}