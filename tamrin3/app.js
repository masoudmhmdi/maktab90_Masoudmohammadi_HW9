const list = document.getElementById("my-list");
const addBtn = document.getElementById("add-btn");

function addLi() {
  while (true) {
    let input = prompt("list Item?")
    if (!input) {
        break;
    }
    let newLi = document.createElement("li");
    newLi.textContent = input;
    list.append(newLi);

  }
}
addBtn.addEventListener("click",addLi);
