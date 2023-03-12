//
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const carouselButton = document.querySelector(".header-menu-btn.left");
const menuItems = [
  { icon: "add", action: "add", label: "" },
  { icon: "skip_previous", action: "previous", label: "" },
  { icon: "pause", action: "pause", label: "" },
  { icon: "skip_next", action: "next", label: "" },
  { icon: "close", action: "remove", label: "" },
];
const carouselImages = [
  { url: "https://picsum.photos/1000/1000?random=0", isActive: false },
  { url: "https://picsum.photos/1000/1000?random=1", isActive: false },
  { url: "https://picsum.photos/1000/1000?random=2", isActive: false },
  { url: "https://picsum.photos/1000/1000?random=3", isActive: false },
  { url: "https://picsum.photos/1000/1000?random=4", isActive: false },
  { url: "https://picsum.photos/1000/1000?random=5", isActive: false },
];
let interval = undefined;

export default function Carousel(event) {
  if (event.target === carouselButton) {
    if (carouselButton.matches(".expanded")) {
      collapseCarousel();
    } else {
      addCarousel();
    }
  } else if (event.target.closest(".rudder")) {
    const action = event.target.dataset.action;
    switch (action) {
      case "add":
        console.log("add");
        addImage();
        break;
      case "remove":
        console.log("removing");
        removeImage(); //slide forward if you've deleted current image
        break;
      case "play":
      case "pause":
        playPause(event);
        break;
      case "previous":
        console.log("previous");
        moveSlide("backward");
        break;
      case "next":
        console.log("next");
        moveSlide("forward");
        break;

      default:
        break;
    }
  } else if (event.target.closest(".carousel__controls")) {
    const action = event.target.dataset.action;
    switch (action) {
      case "selectImage":
        console.log(`select ${+event.target.dataset.index + 1}`);
        moveSlide(event.target.dataset.index);
        break;
      case "back":
        console.log("back");
        moveSlide("backward");
        break;
      case "forward":
        console.log("forward");
        moveSlide("forward");
        break;

      default:
        break;
    }
  }
  console.log("carouseling!");
}

function playPause(event) {
  if (event.target.dataset.action === "play") {
    console.log("play");
    startSlideshow();
    event.target.dataset.action = "pause";
    event.target.dataset.icon = "pause";
    event.target.textContent = "pause";
  } else if (event.target.dataset.action === "pause") {
    console.log("pause");
    clearInterval(interval);
    event.target.dataset.action = "play";
    event.target.dataset.icon = "play_circle";
    event.target.textContent = "play_circle";
  }
}

function addImage() {
  carouselImages.push({
    url: `https://picsum.photos/1000/1000?random=${carouselImages.length}`,
  });
  console.log(carouselImages);
  const container = document.querySelector(".carousel__container");
  fillCarousel(container);
}

function removeImage() {
  if (carouselImages.pop().isActive) {
    //this intentionally mutates the array.
    moveSlide();
  }
  console.log(carouselImages);
  const container = document.querySelector(".carousel__container");
  fillCarousel(container);
}

export function collapseCarousel() {
  clearInterval(interval);
  main.innerHTML = "";
  footer.innerHTML = "";
  carouselButton.classList.remove("expanded");
  carouselImages.forEach((item) => (item.isActive = false));
}

function addCarousel() {
  carouselImages[0].isActive = true;

  carouselButton.classList.add("expanded");
  main.innerHTML = "";
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  const container = document.createElement("div");
  container.classList.add("carousel__container");
  container.style = `transform: translateX(0);`;

  carousel.appendChild(container);
  carousel.appendChild(createControls());
  fillCarousel(container);

  main.appendChild(carousel);
  addFooterNav();

  //interval = setInterval(() => slideshow(), 5000);
  //console.log({ interval });
  startSlideshow();
}

function startSlideshow() {
  clearInterval(interval);
  interval = setInterval(() => moveSlide(), 5000);
}

function moveSlide(direction = "forward") {
  const container = document.querySelector(".carousel__container");
  let activeImageIndex = carouselImages.findIndex(
    (item) => item.isActive === true
  );
  if (carouselImages[activeImageIndex]) {
    carouselImages[activeImageIndex].isActive = false;
  }
  if (direction === "forward") {
    if (activeImageIndex < carouselImages.length - 1) {
      activeImageIndex += 1;
    } else {
      activeImageIndex = 0;
    }
  } else if (direction === "backward") {
    if (activeImageIndex > 0) {
      activeImageIndex -= 1;
    } else {
      activeImageIndex = carouselImages.length - 1;
    }
  } else {
    activeImageIndex = +direction;
    console.log({ direction });
    startSlideshow();
  }

  carouselImages[activeImageIndex].isActive = true;
  const currentWidth = container.offsetWidth;
  const containerMargin = currentWidth * activeImageIndex;
  container.style = `transform: translateX(-${containerMargin}px);`;
  const dotContainer = document.querySelector(".dot-container");
  makeDots(dotContainer);
}

function createControls() {
  const controls = document.createElement("div");
  controls.classList.add("carousel__controls");
  controls.innerHTML = `
  <span class='material-icons-outlined control__item scale-on-hover prev' data-action="back">arrow_back_ios</span>
  <span class='material-icons-outlined control__item scale-on-hover next' data-action="forward">arrow_forward_ios</span>
  `;
  const dotContainer = document.createElement("div");
  dotContainer.classList.add("dot-container");
  controls.appendChild(dotContainer);
  return controls;
}

function fillCarousel(container) {
  container.innerHTML = "";
  const dotContainer = container.nextSibling.lastChild;
  console.log({ dotContainer });
  console.log(dotContainer);
  // how to make dots in time?
  for (let imageItem of carouselImages) {
    console.log(imageItem);
    const image = document.createElement("img");
    image.src = imageItem.url;
    image.classList.add("carousel__image");
    container.appendChild(image);
  }
  makeDots(dotContainer);
}

function makeDots(dotContainer) {
  dotContainer.innerHTML = "";
  carouselImages.forEach((imageItem, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot", "scale-on-hover");
    dot.dataset.index = index;
    dot.dataset.action = "selectImage";
    if (imageItem.isActive) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
    dotContainer.appendChild(dot);
  });
  /* for (let imageItem of carouselImages) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (imageItem.isActive) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
    dotContainer.appendChild(dot);
  } */
}

function addFooterNav() {
  const element = document.createElement("menu");
  element.classList.add("rudder");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("span");
    menuItem.classList.add(
      "material-icons-outlined",
      "rudder-item",
      "scale-on-hover"
    );
    menuItem.textContent = item.icon;
    menuItem.dataset.action = item.action;
    element.appendChild(menuItem);
  });
  footer.appendChild(element);
}
