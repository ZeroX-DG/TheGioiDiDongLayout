$(document).ready(function() {
  // create carousel for ad
  createCarousel(
    ".ad-carousel",
    ".ad-carousel-slides" , 
    ".ad-item"
  );
  // create carousel for hot product
  createCarousel(
    ".hot-product-carousel", 
    ".hot-product-carousel", 
    ".product-carousel-item"
  );
});

function createCarousel(carousel_container, slide_container, carousel_item) {
  // plan:
  // shift the first slide to left, then move that first slide to the end
  let carousel_animate_time = 500; 
  // we we shift each item 100% of it width meaning we will margin it by its width
  let item_width = $(carousel_item).width() + 'px';

  $(carousel_container + " #next").click(function() {
    $(carousel_item + ":nth(0)").animate({
      marginLeft: "-" + item_width // slide to left
    }, carousel_animate_time, function() {
      $(carousel_item + ":nth(0)").css("margin-left", "0"); // remove slide to left css
      let current_slide = $(carousel_item + ":nth(0)").detach(); // take it out
      $(slide_container).append(current_slide); // then put it at the end
    });
  });
  $(carousel_container + " #prev").click(function() {
    // plan:
    // take the last slide, move it to top, then shift each slide to right
    let last_slide = $(carousel_item + ":last").detach();
    $(slide_container).prepend(last_slide);
    $(carousel_item + ":nth(0)").css("margin-left", "-" + item_width);
    $(carousel_item + ":nth(0)").animate({
      marginLeft: "0%" // slide to right
    }, carousel_animate_time);
  });
}

function ShowMoreFooterSupportLink() {
  $("footer .hidden").css("display", "block");
}