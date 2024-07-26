// TOP BANNER CLOSE BUTTON START //
function countdown() {
  // Set the end date to July 31, 2024
  const endDate = new Date('July 31, 2024 23:59:59').getTime();

  const countdownElement = document.getElementById('countdown');
  const banner = document.querySelector('.top-banner');

  // Update countdown every second
  const interval = setInterval(function() {
      const now = new Date().getTime();
      const distance = endDate - now;

      // Calculate remaining days
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      countdownElement.textContent = days;

      if (distance < 0) {
          clearInterval(interval);
          banner.style.display = 'none'; // Hide the banner when countdown ends
      }
  }, 1000); // Update every second (1000 milliseconds)
}

countdown(); // Start the countdown when the page loads
// TOP BANNER CLOSE BUTTON END //

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

// Testimonials 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    520: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 3,
    }

  }
});

// Testimonials Finish

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
