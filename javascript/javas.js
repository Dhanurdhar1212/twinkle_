var sho=1;
function funshow(){
    var id1 = document.getElementById('header');
    var id2 = document.getElementById('main-up');
    if(sho==1){
        id1.style.display='block';
        id2.style.display='none';
        sho=0;
    }
    else{
        id1.style.display='none';
        id2.style.display='block';
        sho=1;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var photo=1;
function funshow1(){
    var id2 = document.getElementById('ok');
    if(photo==1){
        id2.style.display='block';
        photo=0;
    }
    else{
        id2.style.display='none';
        photo=1;
    }
}
