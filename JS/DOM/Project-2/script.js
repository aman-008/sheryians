const popup = document.querySelector(".popup");
const createBtn = document.querySelector(".create-btn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector("#submitBtn");
const products = document.querySelector(".products");

const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const priceInput = document.querySelector("#price");
const imageInput = document.querySelector("#image");

let editCard = null;

createBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    submitBtn.textContent = "Create";
    editCard = null;

    titleInput.value = "";
    descInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

submitBtn.addEventListener("click", () => {

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    const price = priceInput.value.trim();
    const image = imageInput.value.trim();

    if(!title || !desc || !price || !image){
        alert("Fill all fields");
        return;
    }

    if(editCard){

        editCard.querySelector("img").src = image;
        editCard.querySelector("h2").textContent = title;
        editCard.querySelector(".desc").textContent = desc;
        editCard.querySelector(".price").textContent = "₹" + price;

        popup.style.display = "none";
        return;
    }

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${image}" alt="">

        <div class="card-content">

            <h2>${title}</h2>

            <p class="desc">${desc}</p>

            <p class="price">₹${price}</p>

            <div class="btns">
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </div>

        </div>
    `;

    products.appendChild(card);

    popup.style.display = "none";
});

products.addEventListener("click", (e)=>{

    const card = e.target.closest(".card");

    if(e.target.classList.contains("delete")){
        card.remove();
    }

    if(e.target.classList.contains("update")){

        editCard = card;

        titleInput.value =
        card.querySelector("h2").textContent;

        descInput.value =
        card.querySelector(".desc").textContent;

        priceInput.value =
        card.querySelector(".price")
        .textContent.replace("₹","");

        imageInput.value =
        card.querySelector("img").src;

        submitBtn.textContent = "Update";

        popup.style.display = "flex";
    }
});