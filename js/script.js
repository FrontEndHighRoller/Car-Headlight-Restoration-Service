// MODAL START //
// document.addEventListener('DOMContentLoaded', (event) => {
//   const modal = document.getElementById('modal');
//   const closeBtn = document.querySelector('.close-btn');

//   // Show the modal
//   modal.style.display = 'none'; 

//   // When the user clicks on <span> (x), close the modal
//   closeBtn.onclick = function() {
//       modal.style.display = 'none';
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = 'none';
//       }
//   }
// });
// MODAL END //


// TOP BANNER CLOSE BUTTON START //
// function countdown() {
//   // Set the end date to July 31, 2024
//   const endDate = new Date('August 31, 2024 23:59:59').getTime();

//   const countdownElement = document.getElementById('countdown');
//   const banner = document.querySelector('.top-banner');

//   // Update countdown every second
//   const interval = setInterval(function() {
//       const now = new Date().getTime();
//       const distance = endDate - now;

//       // Calculate remaining days
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));

//       countdownElement.textContent = days;

//       if (distance < 0) {
//           clearInterval(interval);
//           banner.style.display = 'none'; 
//       }
//   }, 1000);
// }

// countdown(); 
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
  const damagedHeadlightsValue = parseInt(document.getElementById("damaged-headlights").value);

  if (
    isNaN(modelValue) ||
    isNaN(locationValue) ||
    isNaN(damagedHeadlightsValue)
  ) {
    alert("Please select options for all fields."); // Display an error message
    return; // Don't calculate the price if any selection is invalid
  }

  const totalPrice = modelValue + locationValue + damagedHeadlightsValue;
  // const totalPriceDiscount = Math.ceil(totalPrice - (totalPrice / 100) * 10); // Calculate discounted price and round up

  document.getElementById("total-price").textContent = totalPrice;
  // document.getElementById("discounted-price").textContent = totalPriceDiscount;

  // Show the price paragraphs
  document.getElementById("normal-price").classList.remove("hidden");
  // document.getElementById("discount-price").classList.remove("hidden");

  // Apply slide-in-bounce animation to the discounted price
  // document.getElementById("discount-price").classList.add("slide-in-bounce");

  // Trigger confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}






