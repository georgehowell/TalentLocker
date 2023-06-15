function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();



window.addEventListener('load', () => {

  // Either add a class to the body and do the rest
  // using CSS animations...
  document.body.classList.add('loaded')

  // ... or just start the timeout now
  window.setTimeout(() => {
    document.querySelector('.hide').classList.remove('hide')
  }, 10000)
})
