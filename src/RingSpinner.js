export function appendRingSpinner(target) {
  const element = document.createElement("div");
  const dynamicStyles = document.createElement("style");

  const rules = `
        .ring-spinner {
            height: 50px;
  width: 50px;
  border: 2px solid #7eceff;
  border-radius: 50%;
  border-top: 2px solid #223a49;
  animation: ring-spinner 1000ms linear infinite;
          }
          @keyframes ring-spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `;

  dynamicStyles.textContent = rules;
  document.head.appendChild(dynamicStyles);
  element.classList.add("ring-spinner");
  target.appendChild(element);
}

export function showSpinnerBackdrop() {
  const backdrop = document.createElement("div");
  backdrop.classList.add("spinner-backdrop");

  const dynamicStyles = document.createElement("style");

  const rules = `
    .spinner-backdrop{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: #ffffff77;
      display: flex;
      justify-content: center;
      align-items: center;
    }
        `;

  dynamicStyles.textContent = rules;
  document.head.appendChild(dynamicStyles);

  appendRingSpinner(backdrop);
  document.body.appendChild(backdrop);
}

export function removeSpinnerBackdrop() {
  const backdrop = document.querySelector(".spinner-backdrop");
  if (backdrop) {
    backdrop.remove();
  }
}
