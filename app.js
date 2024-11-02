const container = document.querySelector(".container");
const starContainer = document.querySelector(".star-container");
const buttons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");
const thanks = document.querySelector(".thanks");
const selected = document.querySelector(".selected");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    starContainer.innerHTML = "";
    const count = Number(e.target.innerText);
    selected.textContent = `You selected ${count} out of 5`;
    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.className = "star";
      const img = document.createElement("img");
      img.src = "./images/icon-star.svg";
      div.appendChild(img);
      starContainer.appendChild(div);
    }
  });
});

submitBtn.addEventListener("click", () => {
  if (starContainer.innerHTML === "") {
    alert(
      " Please let us know how we did with your support request. All feedback isappreciated to help us improve our offering"
    );
    return;
  }

  container.style.display = "none";
  thanks.classList.add("active");
});
