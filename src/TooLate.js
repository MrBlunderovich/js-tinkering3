//
export default function TooLate(target, number) {
  target.textContent = "";
  target.classList.remove("too-late");
  if (!number || typeof number !== "number" || number < 1) {
    target.textContent = "Too late!";
  } else {
    //target.textContent = number;
    countdown(target, number);
  }
}

function countdown(target, number) {
  if (target.matches(".counting")) {
    return;
  }
  const counter = setInterval(count, 500);

  function count() {
    target.classList.remove("animate-flash");
    if (number < 0) {
      target.textContent = "Too late!";
      target.classList.add("too-late");
      target.classList.remove("counting");
      clearInterval(counter);
    } else {
      target.classList.add("counting");
      setTimeout(() => target.classList.add("animate-flash"), 50);
      target.textContent = number;
      number -= 1;
    }
  }
}
