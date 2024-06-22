let text = "";
    
window.onload = function() {

        let listCreated = false;

        let pElement = document.getElementById('p');
        console.log("pElement: " + pElement);
        let buttonElementOne = document.getElementById('glavaOne');
        let buttonElementTwo = document.getElementById('glavaTwo');
        let buttonElementThree = document.getElementById('glavaThree');
        let h1Element = document.getElementById('chapter1');

        buttonElementOne.addEventListener('click', function() {
            h1Element.textContent = "Что такое ChatGPT?";
            pElement.textContent = getTextChapterOne();
            pElement.className = "text";
            let list = document.getElementById('list');
            checkElementList();
        });

        buttonElementTwo.addEventListener('click', function() {
            h1Element.textContent = "Кто разрароботал ChatGPT?";
            pElement.textContent = getTextChapterTwo();
            pElement.className = "text";
            checkElementList();
        });

        buttonElementThree.addEventListener('click', function() {
            h1Element.textContent = "Как получить доступ к ChatGPT бесплатно?";
            pElement.textContent = getTextChapterThree();
            pElement.className = "text";
            
            if(!listCreated){
            let listElement = document.createElement('ul');
            listElement.id = "list";
            let listItem1 = document.createElement('li');
            listItem1.textContent = 'Игровая площадка OpenAI: Игровая площадка OpenAI - это онлайн-платформа, с помощью которой вы можете напрямую получить доступ к ChatGPT. Просто откройте ChatGPT, войдите в свою учетную запись OpenAI на экране входа в ChatGPT и перейдите на игровую площадку, где вы сможете вводить приглашения и получать ответы от модели.';
            listElement.appendChild(listItem1);

            let listItem2 = document.createElement('li');
            listItem2.textContent = 'Интеграции: ChatGPT интегрирован в различные приложения и платформы. Некоторые онлайн-сервисы, чат-боты или виртуальные помощники могут включать возможности ChatGPT, позволяя вам получить доступ к модели через эти конкретные интерфейсы.';
            listElement.appendChild(listItem2);

            let listItem3 = document.createElement('li');
            listItem3.textContent = 'OpenAI API: OpenAI предоставляет разработчикам API для доступа к функциональности ChatGPT и интеграции ее в свои приложения, продукты или сервисы. Документация API подробно описывает, как программно отправлять запросы API и получать ответы от модели';
            listElement.appendChild(listItem3);

            let listItem4 = document.createElement('li');
            listItem4.textContent = 'Партнерские приложения: OpenAI сотрудничает со сторонними приложениями и платформами, которые могут предлагать доступ к функциям ChatGPT. Эти приложения могут предоставлять индивидуальные интерфейсы или специализированные функциональные возможности, созданные на основе модели.';
            listElement.appendChild(listItem4);

            listElement.className = "list";
            listItem1.className = "text";
            listItem2.className = "text";
            listItem3.className = "text";
            listItem4.className = "text";
            
            let chapterContent = document.getElementById("chapterContent");
            chapterContent.appendChild(listElement);
            }
            listCreated = true;
        });

        function getTextChapterOne() {
            return text = `ChatGPT - это чат-бот с искусственным интеллектом или, можно сказать, 
            инструмент NLP (обработки естественного языка), разработанный OpenAI, который обеспечивает 
            естественную беседу между людьми и ботом. Здесь GPT расшифровывается как Generative 
            Pre-Trained Transformer, который представляет собой разновидность большой языковой модели 
            для ее обучения. Это может дать ответы на ваши вопросы, которые могут быть связаны с 
            публикациями в социальных сетях, написанием контента, кодированием, электронными письмами и 
            многим другим.`;
        }

        function getTextChapterTwo() {
            text = `ChatGPT был создан OpenAI, организацией, занимающейся исследовательской 
            лабораторией искусственного интеллекта в Сан-Франциско. Его соучредителями 
            являются Илон Маск, Сэм Альтман, Питер Тиль, главный научный сотрудник OpenAI 
            Илья Суцкевер, Джессика Ливингстон и соучредитель Linkedin Рид Хоффман. 
            Они официально выпустили ChatGPT 30 ноября 2022 года. В настоящее время 
            Сэм Альтман является генеральным директором ChatGPT`;
            return text;
        }

        function getTextChapterThree() {
            return text = ` Доступ к веб-сайту ChatGPT - простой процесс. 
            Вот несколько распространенных способов бесплатного доступа к ChatGPT и 
            взаимодействия с ним:`;
        }

        function checkElementList() {
            let list = document.getElementById('list');
            if(list){
                list.remove();
                listCreated = false;
            }else {
                console.log("Элемент удалён");
            }
        }

};

window.addEventListener('scroll', function() {
    let chapters = document.getElementById('chapters');
    chapters.style.top = window.scrollY + 'px';
});