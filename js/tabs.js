const tabsElement = document.querySelectorAll('[data-tabs-handler]');
const tabsContent = document.querySelectorAll('[data-tabs-field]');
const designTitle  = document.querySelectorAll('.design__title');

// console.dir(designTitle);

// for (let btn of tabsElement) {
//     btn.addEventListener('click', () => {
//         tabsElement.forEach(item => item.classList.remove('design-list__item_active'));
//         btn.classList.add('design-list__item_active');


//         tabsContent.forEach(content => {
//             if (content.dataset.tabsField === btn.dataset.tabsHandler) {
//                 content.classList.remove('hidden');
//             } else {
//                 content.classList.add('hidden');
//             }            
//         })
//     })
// }


    tabsElement.forEach((btn, tabIndex) => {
        btn.addEventListener('click', (e) => {
        tabsElement.forEach(item => item.classList.remove('design-list__item_active'));
        btn.classList.add('design-list__item_active');

        
        tabsContent.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }   
        })
        
        // Меняем заголовок 
        // console.log(e.target.dataset.tabsHandler);
        // if (e.target.dataset.tabsHandler === 'interior') {
        //     designTitle[0].classList.remove('hidden')
        //     designTitle[1].classList.add('hidden')
        //   } else {
        //     designTitle[1].classList.remove('hidden')
        //     designTitle[0].classList.add('hidden')
        //   }
        // Или проще
        designTitle.forEach((title) => title.classList.toggle('hidden'));
        //     designTitle.forEach((title, titleIdx) => {
        //     title.classList.add('hidden');
        
        //     if(tabIndex === titleIdx) {
        //         title.classList.remove('hidden');
        //     }
        // })
    })
})