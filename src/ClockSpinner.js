//
export function appendClockSpinner(target) {
  const element = document.createElement("div");
  const dynamicStyles = document.createElement("style");

  const rules = `
      .clock-spinner {
          margin-left: auto;
          position: relative;
          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          background-color: #d3faff;
        }
        .clock-spinner::before,
        .clock-spinner::after {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          margin-left: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 2rem;
          background-color: #223a49;
          animation: clockwise 1s linear infinite;
          transform-origin: center bottom;
        }
        .clock-spinner::before {
          height: 1rem;
          background-color: #223a49;
          animation: clockwise 2500ms linear infinite;
          transform-origin: center bottom;
        }
        @keyframes clockwise {
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
  element.classList.add("clock-spinner");
  target.appendChild(element);
}
