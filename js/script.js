const slider = document.getElementById("myRange");
const output = document.getElementById("slidernumber");
const tally = document.getElementById("tally");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

  const valueToSliderRangeRatio = this.value / 500;
  output.style.left = `calc( 5vw + 175px + 90vw * ${valueToSliderRangeRatio} - 350px * ${valueToSliderRangeRatio})`;

  let totalPrice = Math.floor(this.value * 1.3);
  tally.innerHTML = `$${totalPrice}`;
};
