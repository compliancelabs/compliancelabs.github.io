// Cookie-consent
window.addEventListener('load',function(){
  window.cookieconsent.initialise({
    palette:{popup:{background:"#002b59"},button:{background:"#ff6b00"}},
    content:{message:"We use cookies to ensure you get the best experience.", dismiss:"Got it!"}
  });
});
// Smooth-scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
