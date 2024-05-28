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
//    gridd.backgroundSize = 'cover'
//    gridd.backgroundPosition = 'center'
//    gridd.backgroundRepeat = 'no-repeat'
   
});
});