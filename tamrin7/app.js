const btn = document.getElementById("click");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  let mood = list.getAttribute("data-mood");

  if (mood === "close") {
    list.dataset.mood = "open";
    openList();
  }

  if (mood == "open") {
    list.dataset.mood = "close";
    closeList();
  }
});

const closeList = () => {
  list.style.height = "0px";
};

const openList = () => {
  list.style.height = "200px";
};
