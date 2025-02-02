document.addEventListener("DOMContentLoaded", function(){
    const BtnHamburger = () =>{
        const btnHamburger = document.querySelector('#btnHamburger');
        const header = document.querySelector('.header');
        if(!btnHamburger) return;
        btnHamburger.addEventListener('click', function(){
            if(header.classList.contains('open')){
                header.classList.remove('open')
            }else{
                header.classList.add('open')
            }
           
        });
    }
    BtnHamburger();
});

