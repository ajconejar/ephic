document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  const contentSections = document.querySelectorAll('.content-section');
  const triggerHeight = window.innerHeight / 2; // Adjust as needed

  window.addEventListener('scroll', () => {
    if (window.scrollY > triggerHeight) {
      document.body.classList.add('scrolled');
      heroTitle.classList.add('scrolled');
      contentSections.forEach(section => section.classList.add('scrolled'));
    } else {
      document.body.classList.remove('scrolled');
      heroTitle.classList.remove('scrolled');
      contentSections.forEach(section => section.classList.remove('scrolled'));
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  const triggerHeight = window.innerHeight / 2; // Adjust as needed

  window.addEventListener('scroll', () => {
    if (window.scrollY > triggerHeight) {
      document.body.classList.add('scrolled');
      heroTitle.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
      heroTitle.classList.remove('scrolled');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollArrow = document.querySelector('.scroll-arrow');
  const targetSection = document.querySelector('#services');
  let isArrowHidden = false;

  scrollArrow.addEventListener('click', function(e) {
    e.preventDefault();
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      hideArrow();
    }
  });

  function hideArrow() {
    scrollArrow.classList.add('hidden');
    isArrowHidden = true;
  }

  function showArrow() {
    scrollArrow.classList.remove('hidden');
    isArrowHidden = false;
  }

  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const targetPosition = targetSection.offsetTop;

    if (scrollPosition < targetPosition - window.innerHeight / 2) {
      if (isArrowHidden) {
        showArrow();
      }
    } else {
      if (!isArrowHidden) {
        hideArrow();
      }
    }
  });

  // Ensure smooth scrolling for all browsers
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});




  function visitFunction() {
    alert('You clicked Visit!'); // Example alert
    // Add further functionality here
  }

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get video elements by their IDs
    const video1 = document.getElementById('video1');
  
    function playVideoSequence() {
      video1.play();
  
      video1.addEventListener('ended', function() {
        setTimeout(function() {
          video1.play();
        }, 2000); // 2-second pause
      });
    }
  
    // Initialize the video sequence
    playVideoSequence();
  });

  // Function to show/hide the scroll-up button based on scroll position
  window.onscroll = function() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
  };

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listen for the ArrowUp key press to trigger the scroll up
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        scrollToTop();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker');
    const tickerWrapper = document.getElementById('tickerWrapper');
    let lastScrollTop = 0;

    ticker.addEventListener('mouseenter', () => {
        ticker.style.animationPlayState = 'paused';
    });

    ticker.addEventListener('mouseleave', () => {
        ticker.style.animationPlayState = 'running';
    });

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            tickerWrapper.classList.add('hidden');
            ticker.style.animationPlayState = 'paused';
        } else {
            // Scrolling up
            tickerWrapper.classList.remove('hidden');
            ticker.style.animationPlayState = 'running';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
});
  function visitFunction() {
    alert('You clicked Visit!'); // Example alert
    // Add further functionality here
  }

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get video elements by their IDs
    const video1 = document.getElementById('video1');
  
    function playVideoSequence() {
      video1.play();
  
      video1.addEventListener('ended', function() {
        setTimeout(function() {
          video1.play();
        }, 2000); // 2-second pause
      });
    }
  
    // Initialize the video sequence
    playVideoSequence();
  });

  // Function to show/hide the scroll-up button based on scroll position
  window.onscroll = function() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
  };

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listen for the ArrowUp key press to trigger the scroll up
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        scrollToTop();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker');
    const tickerWrapper = document.getElementById('tickerWrapper');
    let lastScrollTop = 0;

    ticker.addEventListener('mouseenter', () => {
        ticker.style.animationPlayState = 'paused';
    });

    ticker.addEventListener('mouseleave', () => {
        ticker.style.animationPlayState = 'running';
    });

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            tickerWrapper.classList.add('hidden');
            ticker.style.animationPlayState = 'paused';
        } else {
            // Scrolling up
            tickerWrapper.classList.remove('hidden');
            ticker.style.animationPlayState = 'running';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
});
  function visitFunction() {
    alert('You clicked Visit!'); // Example alert
    // Add further functionality here
  }

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get video elements by their IDs
    const video1 = document.getElementById('video1');
  
    function playVideoSequence() {
      video1.play();
  
      video1.addEventListener('ended', function() {
        setTimeout(function() {
          video1.play();
        }, 2000); // 2-second pause
      });
    }
  
    // Initialize the video sequence
    playVideoSequence();
  });

  // Function to show/hide the scroll-up button based on scroll position
  window.onscroll = function() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
  };

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listen for the ArrowUp key press to trigger the scroll up
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        scrollToTop();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker');
    const tickerWrapper = document.getElementById('tickerWrapper');
    let lastScrollTop = 0;

    ticker.addEventListener('mouseenter', () => {
        ticker.style.animationPlayState = 'paused';
    });

    ticker.addEventListener('mouseleave', () => {
        ticker.style.animationPlayState = 'running';
    });

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            tickerWrapper.classList.add('hidden');
            ticker.style.animationPlayState = 'paused';
        } else {
            // Scrolling up
            tickerWrapper.classList.remove('hidden');
            ticker.style.animationPlayState = 'running';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
});
  function visitFunction() {
    alert('You clicked Visit!'); // Example alert
    // Add further functionality here
  }

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get video elements by their IDs
    const video1 = document.getElementById('video1');
  
    function playVideoSequence() {
      video1.play();
  
      video1.addEventListener('ended', function() {
        setTimeout(function() {
          video1.play();
        }, 2000); // 2-second pause
      });
    }
  
    // Initialize the video sequence
    playVideoSequence();
  });

  // Function to show/hide the scroll-up button based on scroll position
  window.onscroll = function() {
    var scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
  };

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listen for the ArrowUp key press to trigger the scroll up
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        scrollToTop();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.querySelector('.ticker');
    const tickerWrapper = document.getElementById('tickerWrapper');
    let lastScrollTop = 0;

    ticker.addEventListener('mouseenter', () => {
        ticker.style.animationPlayState = 'paused';
    });

    ticker.addEventListener('mouseleave', () => {
        ticker.style.animationPlayState = 'running';
    });

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            tickerWrapper.classList.add('hidden');
            ticker.style.animationPlayState = 'paused';
        } else {
            // Scrolling up
            tickerWrapper.classList.remove('hidden');
            ticker.style.animationPlayState = 'running';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
});
