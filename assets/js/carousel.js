document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("carousel-main-img");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
          const newSrc = this.getAttribute("data-src");

          mainImage.src = newSrc;

          thumbnails.forEach(img => img.classList.remove("active"));

          this.classList.add("active");
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");

  let currentTestimonial = 0;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove("active");
          if (i === index) {
              testimonial.classList.add("active");
          }
      });
  }

  prevBtn.addEventListener("click", function () {
      currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
      showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener("click", function () {
      currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
      showTestimonial(currentTestimonial);
  });

  showTestimonial(currentTestimonial);
});
