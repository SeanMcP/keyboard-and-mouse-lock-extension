(() => {
  try {
    const element = document.querySelector("html");
    if (!element) throw new Error('`html` element not found')
    const selector = "html[data-locked='true']";
    const style = document.createElement("style");
    style.textContent = `
      ${selector} { box-shadow: inset 0 0 0 1px #ea4335; pointer-events: none; }
      ${selector}, ${selector} * { cursor: none !important; }
      `;
    document.head.appendChild(style);

    window.addEventListener("keydown", (event) => {
      const combo =
        event.altKey && event.ctrlKey && event.shiftKey && event.key === "L";
      if (element.dataset.locked === "true") {
        if (combo) {
          element.dataset.locked = "false";
        } else {
          event.preventDefault();
        }
      } else if (combo) {
        element.dataset.locked = "true";
        event.preventDefault();
      }
    });
  } catch (error) {
    console.info("Unable to add lock", error ? ": " + error.message : '');
  }
})();
