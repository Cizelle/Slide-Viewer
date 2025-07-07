let current = 1;
let total = 0;
let folder = "";

const img = document.getElementById("slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const container = document.getElementById("sliderContainer");
const counter = document.getElementById("counter");
const quitBtn = document.getElementById("quitBtn");
const internBtn = document.getElementById("internBtn");

function updateImage() {
  img.src = `ppt_img/${folder}/${current}.jpg`;
  counter.textContent = `${current} / ${total}`;
}

function loadSet(setName, count) {
  folder = setName;
  total = count;
  current = 1;
  container.style.display = "flex";
  updateImage();

  if (setName === "quit_grab") {
    quitBtn.classList.add("active");
    internBtn.classList.remove("active");
  } else {
    internBtn.classList.add("active");
    quitBtn.classList.remove("active");
  }
}

prevBtn.addEventListener("click", () => {
  if (current > 1) {
    current--;
    updateImage();
  }
});

nextBtn.addEventListener("click", () => {
  if (current < total) {
    current++;
    updateImage();
  }
});
