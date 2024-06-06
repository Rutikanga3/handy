document.addEventListener('DOMContentLoaded',function(){
    var btn = document.getElementById('herobtn')
btn.addEventListener('mouseover',function(){
    btn.style.backgroundColor = 'white';
    btn.style.color ='black';
    btn.style.boxShadow = '10px 10px 10px  rgba(250, 250, 250,0.5) '
});
});
document.addEventListener('DOMContentLoaded',function(){
    var btn = document.getElementById('herobtn')
btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor = 'transparent';
    btn.style.color ='white';
    btn.style.boxShadow ='none'
    
});
});
document.addEventListener('DOMContentLoaded',function(){
    var gridd = document.getElementsByClassName('grid1')
gridd.addEventListener('mouseover',function(){
   gridd.style.backgroundImage = 'url("assets/pexels-pixabay-51325.jpg")'
   gridd.style.backgroundSize = 'cover'
   gridd.style.backgroundPosition = 'center'
   gridd.style.backgroundRepeat = 'no-repeat'
   
});
});
document.addEventListener('DOMContentLoaded',function(){
    let burger = document.getElementsByClassName('bx bx-menu')
    let navy = document.getElementsByClassName('navlinks')
    burger.addEventListener('click',function(){
        navy.style.visibility = 'visible';
        navy.style.display = 'flex';
        navy.style.flexDirection = 'column';
        
        
    })
})

var navLinks = document.querySelectorAll('.navlink');
navLinks.forEach(function(navLink) {
navLink.style.listStyleType = 'none';
})