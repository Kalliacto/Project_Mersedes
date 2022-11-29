const featureLink = document.querySelectorAll('.feature__link');
const featureLists = document.querySelectorAll('.feature-sub');
 
// --------------------------------------------------
//         for (let i = 0; i < featureLink.length; i++) {
//             featureLink[i].addEventListener('click', function () {
//             console.log(featureLink[i]);
//         });
// }
// // -----------------ИЛИ такой же перебор через f()forEach --------------------------------

// featureLink.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         // Перебераем кнопки и удаляем класс feature__link_active если он есть
//         featureLink.forEach((btnItem) => {
//             btnItem.classList.remove('feature__link_active');
//         });
//         // Кликнутой кнопке наоборот добавляем класс feature__link_active
//         btnItem.classList.add('feature__link_active');

//         featureLists.forEach((listItem) => {
//             // Перебираем весь список и добавляем всем класс hidden
//                 listItem.classList.add('hidden');
//             })
//             // у кликнутого элемента списка наоборот удаляем hidden
//             featureLists[index].classList.remove('hidden');
//         })
//     });

// -----------------Расширенная версия со скрытие активного элемента по клику на активный элемент--------------------------------
    featureLink.forEach((btnItem, index) => {
        btnItem.addEventListener('click', () => {
            if (btnItem.classList.contains("feature__link_active")) {
                btnItem.classList.remove("feature__link_active");
                featureLists[index].classList.add("hidden");
            } else {
                featureLink.forEach((btn) => {
                    btn.classList.remove("feature__link_active");
                });
                btnItem.classList.add("feature__link_active");
    
                featureLists.forEach((listItem) => {
                    listItem.classList.add("hidden");
                });
                featureLists[index].classList.remove("hidden");
            }
        });
    });