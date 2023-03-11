//
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const carouselButton = document.querySelector(".header-menu-btn.left");
const menuItems = [
  { icon: "add", action: "add", label: "" },
  { icon: "skip_previous", action: "previous", label: "" },
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
        removeImage();
        break;

      default:
        break;
    }
  }
  console.log("carouseling!");
}

/* function uploadFile() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style = "display:none";
  fileInput.multiple = "multiple";
  main.appendChild(fileInput);
  fileInput.addEventListener("change", handleFileInputChange);
  function handleFileInputChange(inputEvent) {
    Array.from(inputEvent.target.files).forEach((newFile) => {
      carouselFiles.push(newFile);
    });
    //carouselFiles.push(inputEvent.target.files[0]);
    console.log(carouselFiles);

    const file = carouselFiles[0];

    const img = document.createElement("img");
    img.classList.add("test-image");
    img.file = file;

    function readFile(file, destination) {
      const reader = new FileReader();
      reader.onload = (e) => {
        destination = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    readFile(file, img.src);

    //main.textContent = "";
    //main.appendChild(img);
    main.querySelector(".carousel").textContent = "";
    main.querySelector(".carousel").appendChild(img);
    setTimeout(() => console.log(img), 5000);
  }
  fileInput.click();

  //fileInput.removeEventListener("change", handleFileInputChange);
} */

function addImage() {
  carouselImages.push({
    url: `https://picsum.photos/1000/1000?random=${carouselImages.length}`,
  });
  console.log(carouselImages);
  const container = document.querySelector(".carousel__container");
  fillCarousel(container);
}

function removeImage() {
  carouselImages.pop();
  console.log(carouselImages);
  const container = document.querySelector(".carousel__container");
  fillCarousel(container);
}

function collapseCarousel() {
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

  //addCarouselStyles();

  carousel.appendChild(container);
  carousel.appendChild(createControls());
  fillCarousel(container);
  /* for (let imageItem of carouselImages) {
    console.log(imageItem);
    const image = document.createElement("img");
    image.src = imageItem.url;
    image.classList.add("carousel__image");
    carousel.appendChild(image);
  } */
  /* const image = document.createElement("img");
  image.src = carouselImages[0].url;
  image.classList.add("carousel__image");
  carousel.appendChild(image); */

  main.appendChild(carousel);
  addFooterNav();

  interval = setInterval(() => slideshow(container), 5000);
}

/* function addCarouselStyles() {
  if (!document.querySelector("style.carousel")) {
    const carouselStyles = document.createElement("style");
    carouselStyles.classList.add("carousel");
    carouselStyles.textContent = `
        .carousel {
          font-size: 15rem;
        }
        `;
    document.head.appendChild(carouselStyles);
  }
} */

function slideshow(container) {
  //const container = document.querySelector(".carousel__container");
  let activeImageIndex = carouselImages.findIndex(
    (item) => item.isActive === true
  );
  console.log({ activeImageIndex });
  carouselImages[activeImageIndex].isActive = false;
  if (activeImageIndex < carouselImages.length - 1) {
    activeImageIndex += 1;
  } else {
    activeImageIndex = 0;
  }
  carouselImages[activeImageIndex].isActive = true;
  console.log({ activeImageIndex });
  const currentWidth = container.offsetWidth;
  const containerMargin = currentWidth * activeImageIndex;
  container.style = `transform: translateX(-${containerMargin}px);`;
  const dotContainer = document.querySelector(".dot-container");
  console.log(dotContainer);
  makeDots(dotContainer);
}

function createControls() {
  const controls = document.createElement("div");
  controls.classList.add("carousel__controls");
  controls.innerHTML = `
  <span class='material-icons-outlined control__item prev'>arrow_back_ios</span>
  <span class='material-icons-outlined control__item next'>arrow_forward_ios</span>
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
    /* const dot = document.createElement("div");
    dot.classList.add("dot");
    if (imageItem.isActive) {
      dot.classList.add("filled");
    }
    dotContainer.appendChild(dot); */
  }
  makeDots(dotContainer);
}

function makeDots(dotContainer) {
  dotContainer.innerHTML = "";
  for (let imageItem of carouselImages) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (imageItem.isActive) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
    dotContainer.appendChild(dot);
  }
}

function addFooterNav() {
  const element = document.createElement("menu");
  element.classList.add("rudder");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("span");
    menuItem.classList.add("material-icons-outlined", "rudder-item");
    menuItem.textContent = item.icon;
    menuItem.dataset.action = item.action;
    element.appendChild(menuItem);
  });
  footer.appendChild(element);
}
