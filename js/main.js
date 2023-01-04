var elinp = document.querySelector('.inp');
var elbtn = document.querySelector('.btn');
var ela = document.querySelector('.list__sub_a')
var elb = document.querySelector('.list__sub_b')
var elc = document.querySelector('.list__sub_c')
var eld = document.querySelector('.list__sub_d')




elbtn.addEventListener('click' , function(){
    ela.textContent = elinp.value / 4;
    elb.textContent = elinp.value / 20;
    elc.textContent = elinp.value / 70;
    eld.textContent = elinp.value / 800;
})

