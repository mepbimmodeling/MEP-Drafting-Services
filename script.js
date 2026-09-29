gsap.registerPlugin(ScrollTrigger);
const qs=s=>document.querySelector(s), qsa=s=>[...document.querySelectorAll(s)];
// scroll progress
ScrollTrigger.create({start:0,end:'max',onUpdate:self=>{qs('.progress span').style.width=(self.progress*100)+'%'}});
// reveals
qsa('.reveal').forEach((el)=>gsap.from(el,{y:65,opacity:0,duration:1.05,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}}));
qsa('.reveal-delay').forEach((el)=>gsap.from(el,{y:45,opacity:0,duration:1.1,delay:.15,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
// card stacking motion
qsa('.service-card').forEach((card,i)=>gsap.fromTo(card,{y:90,scale:.96,opacity:.4},{y:0,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:card,start:'top 92%',end:'top 52%',scrub:1}}));
// parallax visuals
gsap.to('.bim-visual img',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.bim',start:'top bottom',end:'bottom top',scrub:true}});
gsap.to('.hero-video',{scale:1.1,yPercent:4,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
// step line entries
qsa('.step').forEach((el,i)=>gsap.from(el,{y:40,opacity:0,duration:.7,delay:i*.06,scrollTrigger:{trigger:'.steps',start:'top 82%',once:true}}));
// mouse glow
window.addEventListener('pointermove',e=>gsap.to('.cursor-glow',{x:e.clientX,y:e.clientY,duration:.45,ease:'power2.out'}));
// subtle tilt
qsa('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-3px)`});card.addEventListener('pointerleave',()=>card.style.transform='');});
// magnetic buttons
qsa('.magnetic').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.12,duration:.25})});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.35}));});
