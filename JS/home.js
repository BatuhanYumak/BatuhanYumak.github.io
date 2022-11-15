
// })

var typeText = document.querySelector(".typeText")
    var textToBeTyped = "Batuhan Yumak"
    var index = 0, isAdding = true
    
    function playAnim() {
      setTimeout(function () {
        // set the text of typeText to a substring of the text to be typed using index.
        typeText.innerText = textToBeTyped.slice(0, index)
        if (isAdding) {
          // adding text
          if (index > textToBeTyped.length) {
            // no more text to add
            isAdding = false
            //break: wait 2s before playing again
            setTimeout(function () {
              playAnim()
            }, 2000)
            return
          } else {
            // increment index by 1
            index++
          }
        } else {
          // removing text
          {
            // no more text to remove
            
          }  {
            // decrement index by 1
            
          }
        }
        // call itself
        playAnim()
      }, 120)
    }
    // start animation
    playAnim()
    

    var translator = new Translator();

    translator.getListOfLanguages(function(languages) {
      languages.forEach(function(language) {
          console.log(language.name, langauge.language);
      });
  });

  var config = {
    api_key: 'AIzaSyCUmCjvKRb-kOYrnoL2xaXb8I-_JJeKpf0',
};

translator.getListOfLanguages(function(languages) {
    languages.forEach(function(language) {
        console.log(language.name, langauge.language);
    });
}, config);

var config = {
  from: 'language-of-the-text',
  to: 'convert-into',
  api_key: 'AIzaSyCUmCjvKRb-kOYrnoL2xaXb8I-_JJeKpf0', // use your own key
  callback: function (translatedText) {
      console.log('translated text', translatedText);
      
      // here you can use "speakTextUsingRobot"
      // see below sections
  }
};

translator.translateLanguage(textToConvert, config);



