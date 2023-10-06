let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit soluta commodi aperiam dolor voluptas maxime.",
    image: "images/slider 2.PNG"
  },
  {
    name: "loki",
    des:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit soluta commodi aperiam dolor voluptas maxime.",
    image: "images/slider 1.PNG"
  },
  {
    name: "wanda vision",
    des:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit soluta commodi aperiam dolor voluptas maxime.",
    image: "images/slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit soluta commodi aperiam dolor voluptas maxime.",
    image: "images/slider 4.PNG"
  },
  {
    name: "luca",
    des:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit soluta commodi aperiam dolor voluptas maxime.",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

let cardContainers1 = [...document.querySelectorAll(".card-container1")];
let preBtns1 = [...document.querySelectorAll(".pre-btn1")];
let nxtBtns1 = [...document.querySelectorAll(".nxt-btn1")];

cardContainers1.forEach((item, i) => {
  let containerDimensions1 = item.getBoundingClientRect();
  let containerWidth1 = containerDimensions1.width;

  nxtBtns1[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth1 - 200;
  });

  preBtns1[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth1 + 200;
  });
});

let cardContainers2 = [...document.querySelectorAll(".card-container2")];
let preBtns2 = [...document.querySelectorAll(".pre-btn2")];
let nxtBtns2 = [...document.querySelectorAll(".nxt-btn2")];

cardContainers2.forEach((item, i) => {
  let containerDimensions1 = item.getBoundingClientRect();
  let containerWidth1 = containerDimensions1.width;

  nxtBtns2[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth1 - 200;
  });

  preBtns2[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth1 + 200;
  });
});
