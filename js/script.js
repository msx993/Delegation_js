

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

const createPaletteItems = () => {
    const buttons = [];
    for (let i = 0; i < 36; i += 1) {
        const button = document.createElement("button");
        button.classList.add("item");
        button.type = "button";
        const color = getRandomHexColor();
        button.style.backgroundColor = color;
        button.dataset.color = color;
        buttons.push(button);
    }
    colorPalette.append(...buttons);
}
createPaletteItems()

colorPalette.addEventListener("click", (event) =>{
    //console.log(event.target, event.currentTarget, event.target.nodeName);
    if (event.target.nodeName !== "BUTTON") {
        return
    }
    const color = event.target.dataset.color;
    output.textContent = `Selected color: - ${color}`;
    output.style.color = color;
    const activeButton = colorPalette.querySelector(".active");
    if (activeButton) {
        activeButton.classList.remove("active");
    }
    event.target.classList.add("active");
})

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const userList = document.querySelector("#userList");
const onDeleteButtonClick = (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return
    }
const button = event.target
const li = button.parentNode
const id = li.dataset.id
const itemToDelete = document.querySelector(`li[data-id="${id}"]`)
itemToDelete.remove()
}
userList.addEventListener("click", onDeleteButtonClick)



const navList = document.querySelector("js-nav")
const onNavClick = (event) => {

}
const activateButton = event.target
activateButton.classList.add('active')
const currentActiveButton = navList .querySelector(".btn .activate")



navList.addEventListener("click", onNavClick)