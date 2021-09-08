/*Реализация задачи с помощью Абсолютного пути. 
Абсолютный адрес ссылки на файл включает в себя протокол http. 
Данный способ не явлется гибким.
function changeImg_1() {
    let variable = document.getElementById('first_img');
    if (variable.src === "http://127.0.0.1:5500/image/1.png") {
        variable.src = "http://127.0.0.1:5500/image/2.png";
    } else {
        variable.src = "http://127.0.0.1:5500/image/3.png";
    }
}

function changeImg_2() {
    let variable = document.getElementById('first_img');
    if (variable.src === "http://127.0.0.1:5500/image/3.png") {
        variable.src = "http://127.0.0.1:5500/image/2.png";
    } else {
        variable.src = "http://127.0.0.1:5500/image/1.png";
    }
}*/

/*Относительный путь к файлу от документа — это путь к файлу относительно текущего документа.
Данный способ более гибок.
Метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов.
Метод getAttribute() возвращает значение указанного атрибута элемента*/
function changeImg_1() {
    console.log(document.querySelector('img').getAttribute('src'));
    if (document.querySelector('img').getAttribute('src') == "image/1.png") {
        document.getElementById("first_img").src = "image/2.png";
    } else if(document.querySelector('img').getAttribute('src') == "image/2.png") {
        document.getElementById("first_img").src = "image/3.png";
    } else if(document.querySelector('img').getAttribute('src') == "image/3.png") {
        document.getElementById("first_img").src = "image/1.png";
    }
}

function changeImg_2() {
    console.log(document.querySelector('img').getAttribute('src'));
    if (document.querySelector('img').getAttribute('src') == "image/3.png") {
        document.getElementById("first_img").src = "image/2.png";
    } else if(document.querySelector('img').getAttribute('src') == "image/2.png") {
        document.getElementById("first_img").src = "image/1.png";
    } else if(document.querySelector('img').getAttribute('src') == "image/1.png") {
        document.getElementById("first_img").src = "image/3.png";
    }
}