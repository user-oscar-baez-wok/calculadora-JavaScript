const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "=") {
      display.value = eval(display.value);
      if (eval(display.value) === Infinity) display.value = "ERROR";
    } else if (button.id === "AC") {
      display.value = "0";
    } else if (button.id === "C") {
      display.value = display.value.slice(0, -1);
    } else {
      if (display.value === "0") display.value = "";
      display.value += button.id;
    }
  });
});
