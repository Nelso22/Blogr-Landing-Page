console.log("hello");

const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");

function show() {
  document.querySelector(".mobile-nav").classList.toggle("active");
}

toggleBtn.addEventListener("click", show);
closeBtn.addEventListener("click", show);

toggleBtn