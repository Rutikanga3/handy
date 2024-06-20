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
// document.addEventListener('DOMContentLoaded',function(){
//     let divon = document.getElementsByClassName('divone')
//     divone.addEventListener('mouseover',function(){
//         divon.style.transition = 'transform 0.3s ease 0s';
        
//     })
// })
// document.addEventListener('DOMContentLoaded',function(){
//     let divon = document.getElementsByClassName('divone')
//     divon.addEventListener('mouseout',function(){
//         divon.style.transition = 'none';
        
//     })
// })
 let divon = document.getElementsByClassName('divone')
 divon.style.transition = 'transform 0.3s ease 0s';

 let footerbutton = document.getElementById('footbtn')
footerbutton.style.transition = 'transform 0.2s ease 0s';

document.addEventListener('DOMContentLoaded',function(){
    let secondPic = document.getElementsByClassName('secpic')
    secondPic.addEventListener('click',function(){
     secondPic.style.backgroundImage = 'url("assets/pexels-pixabay-51325.jpg")'
     secondPic.style.backgroundSize = 'cover'
     secondPic.style.backgroundPosition = 'center'
     secondPic.style.backgroundRepeat = 'no-repeat' 
        
        
    })
})
