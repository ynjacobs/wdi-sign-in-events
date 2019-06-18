document.addEventListener('DOMContentLoaded', function() {

    // Let's add our first event handlers to this simple document
        const goBody = document.querySelector('body');
        const goModal = document.querySelector('.modal');
        const goButton = document.querySelector('.submit');
        // const goX = document.querySelector('.close');
        // const goSignin = document.querySelector('.signin');
        // getstarted
        goBody.addEventListener('click', function(e) {
            if(e.target.classList.contains('signin'))
                goModal.style.display = 'block';
            else if (e.target.classList.contains('close'))
            goModal.style.display = 'None';
            else if (e.target.classList.contains('submit'))
            {
                const inputs = document.querySelectorAll('input');
                inputs.forEach(element => {element.classList.add('error')});

            }
            else if(e.target.classList.contains('modal'))
            goModal.style.display = 'None';
        });

        goModal.addEventListener('focusin', function(e){
            
    e.target.classList.remove('error');
        });

        
    });