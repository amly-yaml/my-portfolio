$(function () {
  // change the day and night by time automitically
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 6; // between 7pm and 6am
  const body = document.querySelector("body");
  const toggle = document.getElementById("toggle");
  const input = document.getElementById("switch");

  if (night) {
    input.checked = true;
    body.classList.add("night");
  }

  toggle.addEventListener("click", function () {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove("night");
    } else {
      body.classList.add("night");
    }
  });

  // filter for project images in project container
  const projectImages = document.querySelectorAll(".project-images");
  projectImages.forEach((image) => {
    const img = image.querySelector(".project-img");
    image.addEventListener("mouseover", () => {
      img.style.filter = "none"; // Remove filter on hover
    });
    image.addEventListener("mouseout", () => {
      img.style.filter = "grayscale(100%) contrast(1) brightness(90%)"; // Apply filter when not hovering
    });
  });

  // drag up to the top
  const introHeight = document.querySelector(".top-intro").offsetHeight;
  const topButton = document.getElementById("top-button");
  const $topButton = $("#top-button");

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // get the year dynamically
  document.getElementById("year").textContent = new Date().getFullYear();
});
