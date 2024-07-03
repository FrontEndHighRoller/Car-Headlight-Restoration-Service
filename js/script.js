// FAQ collapsible START

var coll = document.getElementsByClassName("collapsibles");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// FAQ collapsible END

// CALCULATE PRICE //

function calculatePrice() {
  const modelValue = parseInt(document.getElementById("model").value);
  const locationValue = parseInt(document.getElementById("location").value);
  const damagedHeadlightsValue = parseInt(
    document.getElementById("damaged-headlights").value
  );

  if (
    isNaN(modelValue) ||
    isNaN(locationValue) ||
    isNaN(damagedHeadlightsValue)
  ) {
    alert("Please select options for all fields."); // You can display an error message
    return; // Don't calculate the price if any selection is invalid
  }

  const totalPrice = modelValue + locationValue + damagedHeadlightsValue;

  document.getElementById("total-price").textContent = totalPrice;
}
