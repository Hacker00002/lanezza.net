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

const sliderForm = document.querySelector("#adminForm");
const sliderInput = document.querySelector("#sliderImg");
const sliderText = document.querySelector("#h3");
const elFather = document.querySelector(".swiper-wrapper");
let arr = [];

// sliderPosts
sliderForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const sliderImg = evt.target.imgSlider.value;

  const slider = {
    avatar: sliderImg,
  };

  fetch("https://63b7bb194d97e82aa3c44300.mockapi.io/slider", {
    method: "POST",
    body: JSON.stringify(slider),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      sliderText.style.display = "block";
      window.location.reload();
      sliderForm.reset();
    });
});

fetch("https://63b7bb194d97e82aa3c44300.mockapi.io/slider")
  .then((resItem) => {
    return resItem.json();
  })
  .then((dataTwo) => {
    arr = dataTwo;
    render(arr);
  });

function render(element) {
  elFather.innerHTML = "";
  element.forEach((request) => {
    const elPost = document.createElement("div");
    elPost.setAttribute("class", "swiper-sliders");

    elPost.innerHTML = `
    <img
    src="./img/PicsArt_05-25-01.36.33.png"
    alt=""
    width="110px"
    class="img"
    />
    <img src="${request.avatar}" width="300px" height="180px" alt=""/>
    <button class="delete-post">Delete post</button>
    `;
    console.log(elPost);

    elFather.appendChild(elPost);
  });
}
