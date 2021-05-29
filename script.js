window.addEventListener('scroll',function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY > 0);
})

var hamburger = document.getElementById("hamburger");
var navUL = document.getElementById("nav-ul");

hamburger.addEventListener('click',()=>{
	navUL.classList.toggle('show');
});
