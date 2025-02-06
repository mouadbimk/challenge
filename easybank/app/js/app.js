document.addEventListener("DOMContentLoaded", function(){
    const BtnHamburger = () =>{
        const btnHamburger = document.querySelector('#btnHamburger');
        const header = document.querySelector('.header');
        const body = document.querySelector('body');
        const fadeElements = document.querySelectorAll('.has-fade');
        if(!btnHamburger) return;
        btnHamburger.addEventListener('click', function(){
            if(header.classList.contains('open')){
                body.classList.remove('noscroll')
                header.classList.remove('open');
                fadeElements.forEach(function(element){
                    element.classList.remove('fade-in');
                    element.classList.add('fade-out');
                });
               


            }else{
                body.classList.add('noscroll')
                header.classList.add('open');
                fadeElements.forEach(function(element){
                    element.classList.add('fade-in');
                    element.classList.remove('fade-out');
                });
               
            }
           
        });
    }
    BtnHamburger();
});

