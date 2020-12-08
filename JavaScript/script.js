/*Michelle Marano https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf*/

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
/* This toggles the nav bar when on a small screen */
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  navBarToggle.classList.toggle('active');
});


/* HOLLIE- Questions PAGE (Forum.html) */
/* used w3schools https://www.w3schools.com/howto/howto_js_accordion.asp
Originally i wanted to do an animated accordian , however I ran into problems with 
setting the height for these. 

/*getelementbyID */
var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
        
            /* This part will toggle between opening/closing the panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        } 