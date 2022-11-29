const menuLink = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...menuLink, mainScroll]; 


newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const ID = event.target.getAttribute('href').substr(1);

        // document.getElementById(ID).scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        // })
        
        // Или через подключенную библиотеку для кроссбраузерности
        seamless.scrollIntoView(document.getElementById(ID), {
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    })
})