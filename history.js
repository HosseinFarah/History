function showContent(id, pushState = true) {
  fetch(`http://localhost:3001/notes/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector("#content").textContent = data.content;
      if (pushState) {
        history.pushState({ id }, '', `?id=${id}`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

fetch("http://localhost:3001/notes")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((el) => {
      const newBtn = document.createElement("button");
      newBtn.dataset.id = el.id;
      newBtn.textContent = `content - ${el.id}`;
      newBtn.style.display = "inline-block";
      newBtn.style.margin = "2px";
      newBtn.style.padding = "5px";
      newBtn.style.borderRadius = "5px";
      newBtn.style.border="none";
      newBtn.style.backgroundColor = "rgb(15 106 179)";
      newBtn.style.color = "white";
      newBtn.style.cursor = "pointer";
      newBtn.style.fontSize = "16px";
      document.body.appendChild(newBtn);
    });
    document.querySelectorAll("button").forEach((el) => {
      el.addEventListener("click", (e) => {
        showContent(e.target.dataset.id);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

window.onpopstate = function(event) {
  if (event.state && event.state.id) {
    showContent(event.state.id, false);
  }
};

// Load content based on URL parameters on page load
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id) {
  showContent(id, false);
}