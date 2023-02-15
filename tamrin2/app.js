const aTag = document.querySelectorAll("a");

function setLinkStyle() {
  aTag.forEach((item) => {
    link = item.getAttribute("href");
    if (link.includes("://") && !link.includes("http://internal.com")) {
      item.style.color = "orange";
    } else {
      item.style.color = "blue";
    }
  });
}

setLinkStyle();
