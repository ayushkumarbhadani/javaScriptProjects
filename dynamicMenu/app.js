const data = [
    {
        id: 1,
        img: "dosa.jpeg",
        title: "dosa",
        price: 120,
        type: "main course",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 2,
        img: "Aloo_Samosa.jpeg",
        title: "Samossa",
        price: 30,
        type: "fast food",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 3,
        img: "Dahi_Puri.jpeg",
        title: "Dahi Puri",
        price: 60,
        type: "fast food",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 4,
        img: "pani_puri.jpeg",
        title: "Pani Puri Shots",
        price: 40,
        type: "fast food",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 5,
        img: "sandwitch.jpeg",
        title: "Sandwitch",
        price: 30,
        type: "fast food",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 6,
        img: "dahi_vada.jpg",
        title: "Dahi Vada",
        price: 25,
        type: "starters",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 7,
        img: "methi_muthia.jpg",
        title: "Methi Muthia",
        price: 25,
        type: "starters",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 8,
        img: "paneer_tikka.jpg",
        title: "Paneer Tikka",
        price: 45,
        type: "starters",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 8,
        img: "spring_rolls.jpg",
        title: "Spring Rolls",
        price: 30,
        type: "starters",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 9,
        img: "sweet_corn_veg_soup.jpg",
        title: "Sweet Corn Veg Soup",
        price: 35,
        type: "soup",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 9,
        img: "tomato-shorba.jpg",
        title: "Tomato Shorba",
        price: 35,
        type: "soup",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 10,
        img: "veg-manchow-soup.jpg",
        title: "Veg Manchow Soup",
        price: 35,
        type: "soup",
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    }
]

window.addEventListener("DOMContentLoaded", () => {
    let filterType=[];
    let card = [];
    data.forEach(e=>{
        filterType.push(e.type);
    });
    filterType=[...new Set(filterType)];    //filtering the unique values from array
    let filterBtn=filterType.map(function(item){
        return `<button class="filter-btn" value="${item}">${item}</button>`;
    });
    filterBtn=filterBtn.join('');
    let temp=[];
    document.querySelector("#filter").innerHTML+=filterBtn;
    document.querySelectorAll(".filter-btn").forEach((item)=>{
        item.addEventListener("click",()=>{
            temp=[];
            data.forEach(e=>{
                if(e.type===item.value){
                    temp.push(e);
                }
                else if(item.value==="all"){
                    temp.push(e);
                }
            });
            card = menu(temp);
            card=card.join("");
            document.querySelector("#container").innerHTML = card;
        });
    });
    card=menu(data);
    card = card.join("");
    document.querySelector("#container").innerHTML = card;
});

function menu(menuItem){
    return menuItem.map(function (item) {
        return ` 
            <div class="card">
                <div class="card-img">
                    <img src="images/${item.img}">
                </div>
                <div class="desc">
                    <h2>${item.title}</h2>
                    <h3>₹${item.price}</h3>
                    <span>
                        ${item.desc}
                    </span>
                </div>
            </div>
        `;
    });
}