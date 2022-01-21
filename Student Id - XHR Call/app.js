const mainContainer=document.getElementById("main");
const fetchBtn=document.getElementById("fetchData");
fetchBtn.addEventListener("click",()=>{
const xhr=new XMLHttpRequest();
xhr.open("GET","./api/studentData.json");
xhr.onreadystatechange=()=>{
    console.log(xhr);
    if(xhr.status===200 && xhr.readyState===4){
        // console.log(xhr.responseText);
        let data=JSON.parse(xhr.responseText).map((item)=>{
            return `
            <table class="student-data">
                <tr>
                    <td>Name:</td>
                    <td>${item.name}</td>
                </tr>
                <tr>
                    <td>Registration Number:</td>
                    <td>${item.regNo}</td>
                </tr>
                <tr>
                    <td>Branch:</td>
                    <td>${item.branch}</td>
                </tr>
                <tr>
                    <td>Course:</td>
                    <td>${item.course}</td>
                </tr>
            </table>
            `
        });
        data=data.join("");
        console.log(data);
        mainContainer.innerHTML=`${data}`
    }
    
}
xhr.send();
});

