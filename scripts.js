// NAV TOGGLE
const toggler=document.querySelector('.toggler');
const navLinks=document.querySelector('.nav-links');
toggler&&toggler.addEventListener('click',()=>navLinks.classList.toggle('open'));

// NAV SHRINK ON SCROLL
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('shadow-sm',window.scrollY>10);
});

// COUNTER ANIMATE
const counters=document.querySelectorAll('.counter');
const runCounter=el=>{
  const target=+el.dataset.target;
  const increment=target/200;
  let current=0;
  const update=()=>{
    if(current<target){current+=increment;el.textContent=Math.ceil(current).toLocaleString();requestAnimationFrame(update);}
    else{el.textContent=target.toLocaleString();}
  };
  update();
};
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){runCounter(entry.target);io.unobserve(entry.target);}});
});
counters.forEach(c=>io.observe(c));

// FADE-UP ON SCROLL
const fadeUp=document.querySelectorAll('.fade-up');
const fadeIo=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
},{threshold:.2});
fadeUp.forEach(el=>fadeIo.observe(el));

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    const tgt=document.querySelector(this.getAttribute('href'));
    tgt&&tgt.scrollIntoView({behavior:'smooth',block:'start'});
  });
});
