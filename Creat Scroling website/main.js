let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let albasha = document.querySelector('.albasha');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'; // move in the left 
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    albasha.style.fontSize = value + 'px';
    if(scrollY >= 67 ){
        albasha.style.fontSize = 67 + 'px';
        albasha.style.fontSize = 'fixed';
        if(screenY >= 478){
            albasha.style.display = 'none';
        }else{
            albasha.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#001c20,#10001f)';
        }else{ document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
}