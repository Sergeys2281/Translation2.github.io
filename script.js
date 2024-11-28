$(document).ready(function () {
    const words = {
        easy: [
          { word: "apple", translation: "яблуко" },
          { word: "sun", translation: "сонце" },
          { word: "water", translation: "вода" },
          { word: "cat", translation: "кіт" },
          { word: "dog", translation: "собака" },
          { word: "car", translation: "автомобіль" },
          { word: "tree", translation: "дерево" },
          { word: "milk", translation: "молоко" },
          { word: "book", translation: "книга" },
          { word: "table", translation: "стіл" },
          { word: "chair", translation: "стілець" },
          { word: "house", translation: "будинок" },
          { word: "window", translation: "вікно" },
          { word: "flower", translation: "квітка" },
          { word: "bread", translation: "хліб" },
          { word: "ball", translation: "м'яч" },
          { word: "bird", translation: "птах" },
          { word: "cake", translation: "торт" },
          { word: "fish", translation: "риба" },
          { word: "hat", translation: "капелюх" }
        ],
        medium: [
          { word: "friend", translation: "друг" },
          { word: "family", translation: "сім'я" },
          { word: "school", translation: "школа" },
          { word: "city", translation: "місто" },
          { word: "teacher", translation: "вчитель" },
          { word: "student", translation: "студент" },
          { word: "computer", translation: "комп'ютер" },
          { word: "mobile", translation: "мобільний телефон" },
          { word: "garden", translation: "сад" },
          { word: "street", translation: "вулиця" },
          { word: "music", translation: "музика" },
          { word: "river", translation: "річка" },
          { word: "mountain", translation: "гора" },
          { word: "travel", translation: "подорож" },
          { word: "hobby", translation: "хобі" },
          { word: "coffee", translation: "кава" },
          { word: "evening", translation: "вечір" },
          { word: "morning", translation: "ранок" },
          { word: "party", translation: "вечірка" },
          { word: "movie", translation: "фільм" }
        ],
        hard: [
          { word: "happiness", translation: "щастя" },
          { word: "computer", translation: "комп'ютер" },
          { word: "forest", translation: "ліс" },
          { word: "dream", translation: "мрія" },
          { word: "knowledge", translation: "знання" },
          { word: "university", translation: "університет" },
          { word: "research", translation: "дослідження" },
          { word: "environment", translation: "довкілля" },
          { word: "adventure", translation: "пригода" },
          { word: "education", translation: "освіта" },
          { word: "development", translation: "розвиток" },
          { word: "inspiration", translation: "натхнення" },
          { word: "philosophy", translation: "філософія" },
          { word: "imagination", translation: "уява" },
          { word: "experience", translation: "досвід" },
          { word: "opportunity", translation: "можливість" },
          { word: "responsibility", translation: "відповідальність" },
          { word: "challenge", translation: "виклик" },
          { word: "perspective", translation: "перспектива" },
          { word: "achievement", translation: "досягнення" }
        ]
      };
      
      
  
    const totalSteps = 10;
    let currentStep = 1;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
  
    function loadWord() {
        const difficulty = $('#difficulty').val(); 
        const wordList = words[difficulty]; 
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const currentWord = wordList[randomIndex];
        $('#word').text(currentWord.word);
        $('#translation').val('');
        return currentWord;
    }
    
  
    function startNewGame() {
        currentStep = 1;
        correctAnswers = 0;
        incorrectAnswers = 0;
    
        $('#correct').text(correctAnswers);
        $('#incorrect').text(incorrectAnswers);
        $('#step-counter').text(`${currentStep}/${totalSteps}`);
    
        $('#check').show();
        $('#translation').show();
        $('#word').show();
        $('#show-result').hide();
        $('#restart').hide();
    
        const difficulty = $('#difficulty').val();
        if (!difficulty) {
            alert("Оберіть рівень складності!");
            return;
        }
    
        currentWord = loadWord();
    }
    
  
    let currentWord = loadWord();

    $('#check').click(function () {
        const userTranslation = $('#translation').val().trim().toLowerCase();
        if (userTranslation === currentWord.translation.toLowerCase()) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
  
    $('#correct').text(correctAnswers);
    $('#incorrect').text(incorrectAnswers);
  
    currentStep++;
    if (currentStep <= totalSteps) {
        $('#step-counter').text(`${currentStep}/${totalSteps}`);
        currentWord = loadWord();
    } else {
        $('#check').hide();
        $('#translation').hide();
        $('#word').hide();
        $('#show-result').show();
        $('#restart').show();
    }
    });
  
    $('#show-result').click(function () {
        const level =
        correctAnswers === totalSteps
            ? "С2"
            : correctAnswers >= totalSteps / 2
            ? "B1"
            : "A1";
        $('#result-text').text(`Ваш рівень: ${level}`);
        $('#result-modal').fadeIn();
    });
  
    $('.close').click(function () {
        $('#result-modal').fadeOut();
    });
  
    $('#restart').click(function () {
        startNewGame();
    });
  
    startNewGame();
});
  