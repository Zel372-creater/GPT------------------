window.addEventListener('scroll', function() {
    let chapters = document.getElementById('chapters');
    chapters.style.top = window.scrollY + 'px';
});

let text = "";

window.onload = function() {

    let imageCreatedChapterOne = false;
    let pCreatedChapterOne = false;
    let imageCreatedChapterTwo = false;
    let pCreatedChapterTwo = false;
    let imageCreatedChapterTrhee = false;
    let pCreatedChapterTrhee = false;
    let imageCreatedChapterFour = false;
    let pCreatedChapterFour = false;

    let pElement = document.getElementById('p');
    let buttonElementOne = document.getElementById('glavaOne');
    let buttonElementTwo = document.getElementById('glavaTwo');
    let buttonElementThree = document.getElementById('glavaThree');
    let buttonElementFour = document.getElementById('glavaFour');
    let h1Element = document.getElementById('chapter1');

    buttonElementOne.addEventListener('click', function() {
        h1Element.textContent = "Cценарии 1: Быстрое повторение теоретического материала по разработке";
        pElement.textContent = getTextChapterOne();
        pElement.className = "text";
        if(!pCreatedChapterOne && !imageCreatedChapterOne){
            RemoveTemporyElemtens();
            let image = new Image();
            image.src = "scripts/gpt1.png";
            image.id = 'image';
            image.className = 'image';
            document.getElementById('chapterContent').appendChild(image);
            let pElements = document.createElement('p');
            let doptext = 'Как мы видим, ChatGPT разъяснил нам, что такое SOLID, и разобрал его принципы на примерах.';
            pElements.textContent = doptext;
            pElements.className = 'text';
            pElements.id = 'pElements';
            document.getElementById('chapterContent').appendChild(pElements);
        }
        imageCreatedChapterOne = true;
        pCreatedChapterOne = true;
        checkChapterTwo();
        checkChapterThree();
        checkChapterFour();
    });

    buttonElementTwo.addEventListener('click', function() {
        RemoveTemporyElemtens();
        h1Element.textContent = "Cценарии 2: Изучение английского языка: чтение и письмо";
        pElement.textContent = getTextChapterTwo();
        pElement.className = "text";
        if(!imageCreatedChapterTwo && !pCreatedChapterTwo){
            RemoveTemporyElemtens();
            let image = new Image();
            image.src = "scripts/gpt3.png";
            image.id = 'image1';
            image.className = 'image';
            document.getElementById('chapterContent').appendChild(image);
            let pElements = document.createElement('p');
            let doptext = 'После правил выдается тест:';
            pElements.textContent = doptext;
            pElements.className = 'text';
            pElements.id = 'pElements1';
            document.getElementById('chapterContent').appendChild(pElements);
            let = imagetwo = new Image();
            imagetwo.src = "scripts/gpt4.png";
            imagetwo.id = 'image2';
            imagetwo.className = 'image';
            document.getElementById('chapterContent').appendChild(imagetwo);
            let pElements2 = document.createElement('p');
            let doptext2 = 'После ответа на вопросы ChatGPT вернул следующее:';
            pElements2.textContent = doptext2;
            pElements2.className = 'text';
            pElements2.id = 'pElements2';
            document.getElementById('chapterContent').appendChild(pElements2);
            let = imagethree = new Image();
            imagethree.src = "scripts/gpt5.png";
            imagethree.id = 'image3';
            imagethree.className = 'image';
            document.getElementById('chapterContent').appendChild(imagethree);
            let pElements3 = document.createElement('p');
            let doptext3 = 'Увидев результат, решаем закрепить тему. Просим проанализировать ошибки и на основе этого создать новый тест. На что чат дает такой ответ:';
            pElements3.textContent = doptext3;
            pElements3.className = 'text';
            pElements3.id = 'pElements3';
            document.getElementById('chapterContent').appendChild(pElements3);
            let = imagefour = new Image();
            imagefour.src = "scripts/gpt6.png";
            imagefour.id = 'image4';
            imagefour.className = 'image';
            document.getElementById('chapterContent').appendChild(imagefour);
            let pElements4 = document.createElement('p');
            let doptext4 = 'И снова тест:';
            pElements4.textContent = doptext4;
            pElements4.className = 'text';
            pElements4.id = 'pElements4';
            document.getElementById('chapterContent').appendChild(pElements4);
            let = imagefife = new Image();
            imagefife.src = "scripts/gpt7.png";
            imagefife.id = 'image5';
            imagefife.className = 'image';
            document.getElementById('chapterContent').appendChild(imagefife);
            let pElements5 = document.createElement('p');
            let doptext5 = 'Вот так максимально быстро и гибко можно изучить или повторить новый материал.';
            pElements5.textContent = doptext5;
            pElements5.className = 'text';
            pElements5.id = 'pElements5';
            document.getElementById('chapterContent').appendChild(pElements5);
        }
        imageCreatedChapterTwo = true;
        pCreatedChapterTwo = true;
        checkImageCreatedAndP();
        checkChapterThree();
        checkChapterFour();
    });

    buttonElementThree.addEventListener('click', function() {
        RemoveTemporyElemtens();
        h1Element.textContent = "Cценарии 3: Решение практических проблем в разработке.";
        pElement.textContent = getTextChapterThree();
        pElement.className = "text";
        if(!imageCreatedChapterTrhee && !pCreatedChapterTrhee){
            RemoveTemporyElemtens();
            let image = new Image();
            image.src = "scripts/gpt8.png";
            image.id = 'image6';
            image.className = 'image';
            document.getElementById('chapterContent').appendChild(image);
        }
        imageCreatedChapterTrhee = true;
        pCreatedChapterTrhee = true;
        checkChapterTwo();
        checkImageCreatedAndP();
        checkChapterFour();

    });

    buttonElementFour.addEventListener('click', function() {
        RemoveTemporyElemtens();
        h1Element.textContent = "Cценарии 4. Живая дискуссия";
        pElement.textContent = getTextChapterFour();
        pElement.className = "text";
        if(!imageCreatedChapterFour && !pCreatedChapterFour){
            RemoveTemporyElemtens();
            let image = new Image();
            image.src = "scripts/gpt9.png";
            image.id = 'image9';
            image.className = 'image';
            document.getElementById('chapterContent').appendChild(image);
            let pElements9 = document.createElement('p');
            let doptext = 'На что получим хороший пример, который чат-бот использует для аргументации своей позиции.';
            pElements9.textContent = doptext;
            pElements9.className = 'text';
            pElements9.id = 'pElements9';
            document.getElementById('chapterContent').appendChild(pElements9);
            let = image2 = new Image();
            image2.src = "scripts/gpt10.png";
            image2.id = 'image10';
            image2.className = 'image';
            document.getElementById('chapterContent').appendChild(image2);
            let br = document.createElement('br');
            document.getElementById('chapterContent').appendChild(br);
            document.getElementById('chapterContent').appendChild(br);
            let = image3 = new Image();
            image3.src = "scripts/gpt11.png";
            image3.id = 'image11';
            image3.className = 'image';
            document.getElementById('chapterContent').appendChild(image3);
            let pElements11 = document.createElement('p');
            let doptext11 = 'Завершаем суммирующим вопросом.';
            pElements11.textContent = doptext11;
            pElements11.className = 'text';
            pElements11.id = 'pElements11';
            document.getElementById('chapterContent').appendChild(pElements11);
            let = image4 = new Image();
            image4.src = "scripts/gpt12.png";
            image4.id = 'image12';
            image4.className = 'image';
            document.getElementById('chapterContent').appendChild(image4);
            let pElements12 = document.createElement('p');
            let doptext12 = `Мы посмотрели, как можно использовать бесплатную версию ChatGPT и насколько он полезен, пройдемся по его плюсам и минусам (да, они тоже существуют). 

Преимущества: 

Индивидуализированное обучение. ChatGPT может предоставить персонализированные ответы и объяснения на ваши вопросы, что поможет лучше понять материал конкретно вам.

Доступ к информации: Тематика вопросов очень широкая — от ваших профессиональных задач разработчика до философских концепций, а вы получаете быстрые и точные ответы. 

Практика иностранного языка. Общение с ChatGPT может помочь вам практиковать разговорные навыки иностранных языков. Также чат можно использовать как словарь, грамматический справочник или помощник в написании деловых писем.

Удобство. ChatGPT доступен 24/7, у него нет выходных, он не устает и не имеет предвзятого отношения к собеседнику, то есть к вам.

Недостатки

Неточность данных. Каждая версия ChatGPT имеет свой объем информации. Например, у версии 3.5 данные актуальны до апреля 2021 года, что может привести к предоставлению устаревших сведений;

Ограниченность ответов. Несмотря на впечатляющую способность генерировать тексты, ChatGPT иногда предоставляет неточные или неполные ответы, особенно на сложные вопросы, где нужны экспертиза из узких областей знаний;

Неполное понимание контекста. Если ваш запрос будет слишком общим или неполным, это может привести к некорректным ответам;

Необходимость специальных знаний для работы. Для получения полных и корректных ответов нужно предварительно потратить время на изучение и настройку параметров ИИ-модели.

Неконсистентные ответы. В начале одной сессии ChatGPT может выдавать одну формулировку, а затем оценивать ваши запросы совсем по-другому.

ChatGPT открывает перед нами большие перспективы, но важно понимать, что это всего лишь инструмент со своими ограничениями. Будет ли он работать на вас, зависит от того, насколько вы готовы дополнительно проверять информацию от него и комбинировать с другими способами обучения`;
            pElements12.textContent = doptext12;
            pElements12.className = 'text';
            pElements12.id = 'pElements12';
            document.getElementById('chapterContent').appendChild(pElements12);
        }
        imageCreatedChapterFour = true;
        pCreatedChapterFour = true;
        checkChapterTwo();
        checkImageCreatedAndP();
        checkChapterThree();

    });

    function getTextChapterOne() {
        return text = `Ситуация: вам нужно подготовится к собеседованию или освежить в голове 
            какую-либо тему, вспомнить алгоритм использования определенной технологии.Можно пойти и 
            открыть документацию, прочитать ее заново. Или же использовать ChatGPT и попросить его нам 
            объяснить тему на примерах:`;
    }

    function getTextChapterTwo() {
        text = `Ситуация: вы забыли, когда нужно использовать артикль the. Запрос может быть выполнен 
        на любом языке, здесь используем английский:«Create a test to repeat when to use the and when 
        not to use the. And before that, write rules for when to use the and when not to use the» Вот 
        такой ответ дает чат:`;
        return text;
    }

    function getTextChapterThree() {
        return text = ` Ситуация: вы работаете над приложением, где для общения с сервером используется 
        GraphQL. И нам часто необходимо получать данные, которые сильно связаны друг с другом, как это 
        часто бывает, когда используется GraphQL. В таком случае вы также можете обратиться за помощью 
        к ChatGPT. Пример вопроса и ответ:`;
    }

    function getTextChapterFour() {
        return text  = `Ситуация: вы хотите более полно понимать ту или иную идею/концепцию/тему. 
        Кроме того, обсуждение интересных вам вещей с безотказным и почти всезнающим собеседником —  
        это просто весело. Рассмотрим еще один пример про SOLID. Сначала зададим интересующий вопрос, 
        а затем еще одним начнем дискуссию.`;
    }

    function checkImageCreatedAndP() {
        let image = document.getElementById('image');
        let p  = document.getElementById('pElements');
        if(image && p){
            image.remove();
            p.remove()
            pCreatedChapterOne = false;
            imageCreatedChapterOne = false;
        }else {
            console.log("Элемент удалён");
        }
    }

    function checkChapterTwo(){
        let image = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let image3 = document.getElementById('image3');
        let image4 = document.getElementById('image4');
        let image5 = document.getElementById('image5');
        let p  = document.getElementById('pElements1');
        let p2  = document.getElementById('pElements2');
        let p3  = document.getElementById('pElements3');
        let p4  = document.getElementById('pElements4');
        let p5  = document.getElementById('pElements5')
        if(image && p){
            image.remove();
            image2.remove();
            image3.remove();
            image4.remove();
            image5.remove();
            p.remove();
            p2.remove();
            p3.remove();
            p4.remove();
            p5.remove();
            pCreatedChapterTwo = false;
            imageCreatedChapterTwo = false;
        }else {
            console.log("Элемент удалён");
        }
    }

    function RemoveTemporyElemtens(){
        let temporaryp = document.getElementById('temporaryp');
        let temporarypimage = document.getElementById('temporarypimage');
        if(temporaryp && temporarypimage){
            temporaryp.remove();
            temporarypimage.remove();
        }
        else {
            console.log("Элемент удалён");
        }
    }

    function  checkChapterThree(){
        let image = document.getElementById('image6');
        if(image && p){
            image.remove();
            pCreatedChapterTrhee = false;
            imageCreatedChapterTrhee = false;
        }else {
            console.log("Элемент удалён");
        }
    };

    function  checkChapterFour(){
        let image9 = document.getElementById('image9');
        let image10 = document.getElementById('image10');
        let image11 = document.getElementById('image11');
        let image12 = document.getElementById('image12');
        let p9  = document.getElementById('pElements9');
        let p11  = document.getElementById('pElements11');
        let p12  = document.getElementById('pElements12');
        if(image && p){
            image9.remove();
            image10.remove();
            image11.remove();
            image12.remove();
            p9.remove();
            p11.remove();
            p12.remove();
            pCreatedChapterFour = false;
            imageCreatedChapterFour = false;
        }else {
            console.log("Элемент удалён");
        }
    };

};