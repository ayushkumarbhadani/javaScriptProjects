const data = [
    {
        id: 1,
        img: "dosa.jpeg",
        title: "dosa",
        price: 120,
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 2,
        img: "Aloo_Samosa.jpeg",
        title: "Samossa",
        price: 30,
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 3,
        img: "Dahi_Puri.jpeg",
        title: "Dahi Puri",
        price: 60,
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 4,
        img: "pani_puri.jpeg",
        title: "Pani Puri",
        price: 40,
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    },
    {
        id: 3,
        img: "Dahi_Puri.jpeg",
        title: "Dahi Puri",
        price: 60,
        desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione."
    }
]

window.addEventListener("DOMContentLoaded", () => {
    let card = data.map(function (item) {
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
    card = card.join("");
    console.log(document.querySelector("#container"))
    document.querySelector("#container").innerHTML = card;
});