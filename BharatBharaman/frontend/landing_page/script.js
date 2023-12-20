
let bharat_bhraman = document.getElementById('text1');
let qutub_minar = document.getElementById('qutub_minar');
let clouds = document.getElementById('clouds');
let red_fort = document.getElementById('red_fort');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    bharat_bhraman.style.marginTop = value * -1.4 + 'px';
    qutub_minar.style.top = value * 0.9 + 'px';
    clouds.style.top = value * -0.1 + 'px';
    red_fort.style.left = value * 0.9 + 'px';
    img1.style.top = value * 0.9 + 'px';
    img2.style.left = value * -0.9 + 'px';
});

myID = document.getElementById('explore');

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 50 && y <= 2500) {
        myID.className = "cta show"
        
    } else {
        myID.className = "cta hide"
    }
};

window.addEventListener("scroll", myScrollFunc);