const cursor=document.querySelector('.cursor'), dot=document.querySelector('.cursor-dot');
window.addEventListener('pointermove',e=>{
  if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}
  if(dot){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'}
});
document.querySelectorAll('a,button,.reel-card,.skill').forEach(el=>{
  el.addEventListener('mouseenter',()=>{if(cursor){cursor.style.width='46px';cursor.style.height='46px'}});
  el.addEventListener('mouseleave',()=>{if(cursor){cursor.style.width='28px';cursor.style.height='28px'}});
});
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const menu=document.querySelector('.menu');
const nav=document.querySelector('.site-header nav');
if(menu){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    if(open){
      nav.style.display='flex';nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';
      nav.style.flexDirection='column';nav.style.padding='25px';nav.style.background='#0a0a0c';
    }else nav.style.display='';
  });
}
function submitForm(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const subject=encodeURIComponent('SHOTBY.ROHITH — New Shoot Enquiry');
  const body=encodeURIComponent(`Name: ${f.get('name')}\nContact: ${f.get('contact')}\nShoot: ${f.get('message')}`);
  window.location.href=`mailto:shotby.rohith@gmail.com?subject=${subject}&body=${body}`;
  document.querySelector('#form-note').textContent='Opening your email app…';
  return false;
}
