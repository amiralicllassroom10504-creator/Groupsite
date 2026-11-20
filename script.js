// تغییر حالت شب/روز
var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// آزمون کوچک
var options = document.querySelectorAll(".opt");
var result = document.getElementById("quiz-result");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    if (this.getAttribute("data-correct") === "true") {
      result.textContent = "آفرین! درست جواب دادی 🎉";
      result.style.color = "#059669";
    } else {
      result.textContent = "نه، دوباره امتحان کن 🙂";
      result.style.color = "#dc2626";
    }
  });
}
