function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const video1 = document.getElementById('video1');

  function playVideoSequence() {
    video1.play();

    video1.addEventListener('ended', function() {
      setTimeout(function() {
        video1.play();
      }, 2000);
    });
  }

  playVideoSequence();
});

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp") {
    scrollToTop();
  }
});