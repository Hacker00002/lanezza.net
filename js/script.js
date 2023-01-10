const elBtn = document.querySelectorAll(".likeFather");
const elLike = document.querySelectorAll(".iconki");
const elFather = document.querySelector(".swiper-wrapper");
const elLoader = document.querySelector(".elLoader");
let arr = [];

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// scroll-bar
window.onscroll = function () {
  mufunction();
};

function mufunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}

// like

elBtn.forEach((el) => {
  el.addEventListener("cl..ick", () => {
    el.classList.toggle("active");
  });
});

elLike.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("activeTwo");
  });
});

// api slider posts
fetch("https://63b7bb194d97e82aa3c44300.mockapi.io/slider")
  .then((resItem) => {
    return resItem.json();
  })
  .then((dataTwo) => {
    arr = dataTwo;
    render(arr);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    elLoader.style.display = "none";
  });

function render(element) {
  elFather.innerHTML = "";
  element.forEach((request) => {
    const elPost = document.createElement("div");
    elPost.setAttribute("class", "swiper-slide");
    elPost.innerHTML = `
    <img
    src="./img/PicsArt_05-25-01.36.33.png"
    alt=""
    width="110px"
    class="img"
    />
    <img src="${request.avatar}" alt=""/>
    `;
    elFather.appendChild(elPost);
  });
}
