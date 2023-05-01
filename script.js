class VirtualKeyboard {
  constructor(){
    this.keys = [
      {
        "code": 192,
        "en": "~",
        "ru": "~",
        "class": "key"
      },
      {
        "code": 49,
        "en": 1,
        "ru": 1,
        "class": "key"
      },
      {
        "code": 50,
        "en": 2,
        "ru": 2,
        "class": "key"
      },
      {
        "code": 51,
        "en": 3,
        "ru": 3,
        "class": "key"
      },
      {
        "code": 52,
        "en": 4,
        "ru": 4,
        "class": "key"
      },
      {
        "code": 53,
        "en": 5,
        "ru": 5,
        "class": "key"
      },
      {
        "code": 54,
        "en": 6,
        "ru": 6,
        "class": "key"
      },
      {
        "code": 55,
        "en": 7,
        "ru": 7,
        "class": "key"
      },
      {
        "code": 56,
        "en": 8,
        "ru": 8,
        "class": "key"
      },
      {
        "code": 57,
        "en": 9,
        "ru": 9,
        "class": "key"
      },
      {
        "code": 48,
        "en": 0,
        "ru": 0,
        "class": "key"
      },
      {
        "code": 189,
        "en": "-",
        "ru": "-",
        "class": "key"
      },
      {
        "code": 187,
        "en": "=",
        "ru": "=",
        "class": "key"
      },
      {
        "code": 8,
        "en": "backspace",
        "ru": "backspace",
        "class": "key"
      },
      {
        "code": 9,
        "en": "tab",
        "ru": "tab",
        "class": "key"
      },
      {
        "code": 81,
        "en": "q",
        "ru": "й",
        "class": "key"
      },
      {
        "code": 87,
        "en": "w",
        "ru": "ц",
        "class": "key"
      },
      {
        "code": 69,
        "en": "e",
        "ru": "у",
        "class": "key"
      },
      {
        "code": 82,
        "en": "r",
        "ru": "к",
        "class": "key"
      },
      {
        "code": 84,
        "en": "t",
        "ru": "е",
        "class": "key"
      },
      {
        "code": 89,
        "en": "y",
        "ru": "н",
        "class": "key"
      },
      {
        "code": 85,
        "en": "u",
        "ru": "г",
        "class": "key"
      },
      {
        "code": 73,
        "en": "i",
        "ru": "ш",
        "class": "key"
      },
      {
        "code": 79,
        "en": "o",
        "ru": "щ",
        "class": "key"
      },
      {
        "code": 80,
        "en": "p",
        "ru": "з",
        "class": "key"
      },
      {
        "code": 219,
        "en": "[",
        "ru": "х",
        "class": "key"
      },
      {
        "code": 221,
        "en": "]",
        "ru": "ъ",
        "class": "key"
      },
      {
        "code": 220,
        "en": "\\",
        "ru": "\\",
        "class": "key"
      },
      {
        "code": 20,
        "en": "caps",
        "ru": "caps",
        "class": "key"
      },
      {
        "code": 65,
        "en": "a",
        "ru": "ф",
        "class": "key"
      },
      {
        "code": 83,
        "en": "s",
        "ru": "ы",
        "class": "key"
      },
      {
        "code": 68,
        "en": "d",
        "ru": "в",
        "class": "key"
      },
      {
        "code": 70,
        "en": "f",
        "ru": "а",
        "class": "key"
      },
      {
        "code": 71,
        "en": "g",
        "ru": "п",
        "class": "key"
      },
      {
        "code": 72,
        "en": "h",
        "ru": "р",
        "class": "key"
      },
      {
        "code": 74,
        "en": "j",
        "ru": "о",
        "class": "key"
      },
      {
        "code": 75,
        "en": "k",
        "ru": "л",
        "class": "key"
      },
      {
        "code": 76,
        "en": "l",
        "ru": "д",
        "class": "key"
      },
      {
        "code": 186,
        "en": ";",
        "ru": "ж",
        "class": "key"
      },
      {
        "code": 222,
        "en": "'",
        "ru": "э",
        "class": "key"
      },
      {
        "code": 13,
        "en": "enter",
        "ru": "enter",
        "class": "key key-enter"
      },
      {
        "code": 16,
        "en": "shift",
        "ru": "shift",
        "class": "key key-shift l-shift"
      },
      {
        "code": 90,
        "en": "z",
        "ru": "я",
        "class": "key"
      },
      {
        "code": 88,
        "en": "x",
        "ru": "ч",
        "class": "key"
      },
      {
        "code": 67,
        "en": "c",
        "ru": "с",
        "class": "key"
      },
      {
        "code": 86,
        "en": "v",
        "ru": "м",
        "class": "key"
      },
      {
        "code": 66,
        "en": "b",
        "ru": "и",
        "class": "key"
      },
      {
        "code": 78,
        "en": "n",
        "ru": "т",
        "class": "key"
      },
      {
        "code": 77,
        "en": "m",
        "ru": "ь",
        "class": "key"
      },
      {
        "code": 188,
        "en": ",",
        "ru": "б",
        "class": "key"
      },
      {
        "code": 190,
        "en": ".",
        "ru": "ю",
        "class": "key"
      },
      {
        "code": 191,
        "en": "/",
        "ru": ".",
        "class": "key"
      },
      {
        "code": 38,
        "en": "▲",
        "ru": "▲",
        "class": "key key-up"
      },
      {
        "code": 16,
        "en": "shift",
        "ru": "shift",
        "class": "key key-shift"
      },
      {
        "code": 17,
        "en": "ctrl",
        "ru": "ctrl",
        "class": "key"
      },
      {
        "code": 91,
        "en": "win",
        "ru": "win",
        "class": "key"
      },
      {
        "code": 18,
        "en": "alt",
        "ru": "alt",
        "class": "key"
      },
      {
        "code": 32,
        "en": "space",
        "ru": "space",
        "class": "key key-space"
      },
      {
        "code": 18,
        "en": "alt",
        "ru": "alt",
        "class": "key"
      },
      {
        "code": 17,
        "en": "ctrl",
        "ru": "ctrl",
        "class": "key"
      },
      {
        "code": 37,
        "en": "◄",
        "ru": "◄",
        "class": "key"
      },
      {
        "code": 40,
        "en": "▼",
        "ru": "▼",
        "class": "key"
      },
      {
        "code": 39,
        "en": "►",
        "ru": "►",
        "class": "key"
      },
    ];
    // let currentCookies = document.cookie.split(';');
    // let cookieLang = '';
    // for(let i = 0; i < currentCookies.length; i++) {
    //   let c = currentCookies[i];
    //   if (c.indexOf("lang=") == 0) {
    //     cookieLang = c.substring("lang=".length, c.length);
    //   }
    // }
    let lang = localStorage.getItem('lang');

    this.lang = lang ? lang : 'en';
  }

  init() {
    this.renderKeyboard();
    this.setUpGeneralEvents();
    this.setUpClickEvents();
  }

  renderKeyboard(){
    const keys = this.keys;
    const body = document.querySelector("body");
    const lang = this.lang;
    let keyboard = "<div class='wrap'><h1 class='header'>RSS Виртуальная клавиатура</h1>";
    keyboard += "<textarea id='text-input' rows='15' cols='50'></textarea>";
    keyboard += "<div class='keyboard'>";
    keys.forEach(keyObject => {
      let value = keyObject[lang];
      let dataValue = value;
      if (keyObject['code'] === 32){
        dataValue = " ";
      } else if (keyObject['code'] === 13) {
        dataValue = "\n";
      } else if ([17, 18, 91, 16, 20, 9, 8].includes(keyObject['code'])){
        dataValue = "";
      }
      keyboard += `<span data-code="${keyObject['code']}" data-value="${dataValue}" class="${keyObject['class']}">${value}</span>`;
    });
    keyboard += "</div>";
    keyboard += "<p class='info'>Клавиатура создана в операционной системе Windows</p>";
    keyboard += "<p class='info'>Для переключения языка комбинация: ctrl + alt</p>"
    keyboard += "</div>";
    body.innerHTML = keyboard;
  }

  setUpGeneralEvents(){
    document.addEventListener("keydown", (e) => {
      let code = e.key;
      let element;
      let leftElement, rightElement;
      e.preventDefault();

      if (e.ctrlKey && e.altKey) {
        this.lang  =  (this.lang === 'en') ? 'ru' : 'en';
        // document.cookie = "lang=" + this.lang;
        localStorage.setItem('lang', this.lang);
        this.switchLanguage();
      }  

      if (e.code === "Enter") {
        element = document.querySelector('[data-code="13"]');
      }  else if (e.code === "Backspace") {
        element = document.querySelector('[data-code="8"]');
      } else if (e.code === "Tab") {
        element = document.querySelector('[data-code="9"]');
      } else if ( e.altKey ) {
        [leftElement, rightElement] = document.querySelectorAll('[data-code="18"]');
        element = (e.location === 1) ? leftElement : rightElement;
      } else if ( e.ctrlKey ) {
        [leftElement, rightElement] = document.querySelectorAll('[data-code="17"]');
        element = (e.location === 1) ? leftElement : rightElement;
      } else if ( e.shiftKey ) {
        [leftElement, rightElement] = document.querySelectorAll('[data-code="16"]');
        element = (e.location === 1) ? leftElement : rightElement;
      } 
      else {
        element = document.querySelector(`[data-value="${code}"]`);
      }

      if (element){
        element.click();
        element.classList.add("active-key");
      }
    });

    document.addEventListener("keyup", (e) => {
      if ((e.code === "CapsLock") && e.getModifierState("CapsLock")) {
        this.toggleCapsLock();
      }
      
      let element = document.querySelector('.active-key');
      if (element){
        element.classList.remove("active-key");
      }
    });
  }

  setUpClickEvents(){
    let textInput = document.querySelector('#text-input');

    const tabClickHandler = () => {
      if (textInput.selectionStart !== undefined) {
        let startPosition = textInput.selectionStart;
        let currentText = textInput.value;
        textInput.value = currentText.substring(0,startPosition);
        textInput.value += "    ";
        textInput.value += currentText.substring(startPosition);
        textInput.selectionEnd = startPosition + 4;
        textInput.selectionStart = textInput.selectionEnd;
        textInput.focus();
      }
    }

    const backspaceClickHandler = () => {
      if (textInput.selectionStart !== undefined) {
        let startPosition = textInput.selectionStart;
        let currentText = textInput.value;
        if (currentText.length) {
          textInput.value = currentText.substring(0,startPosition-1);
          textInput.value += currentText.substring(startPosition);
          textInput.selectionEnd = startPosition - 1;
          textInput.selectionStart = textInput.selectionEnd;
          textInput.focus();
        }
      }
    }

    const keyClickHandler = (event) => {
      let element = event.target;
      let value = element.dataset.value;
      let startPosition = 0;
      if (textInput.selectionStart !== undefined) {
        startPosition = textInput.selectionStart;
        let currentText = textInput.value;
        if (currentText.length) {
          textInput.value = currentText.substring(0,startPosition); 
          textInput.value += value;
          textInput.value += currentText.substring(startPosition);
          textInput.selectionEnd = startPosition + 1;
          textInput.selectionStart = textInput.selectionEnd;
          textInput.focus();
        } else {
          textInput.value += value;
       }
      }
    }

    const capsClickHandler = () => {
      this.toggleCapsLock();
    }

    const keys = document.querySelectorAll('.key');

    keys.forEach(function (el) {
      let code = el.dataset.code;
      if (Number(code) === 20) {
        el.addEventListener("click",  capsClickHandler);
      } else if (Number(code) === 8) {
        el.addEventListener("click",  backspaceClickHandler);
      } else if (Number(code) === 9) {
        el.addEventListener("click",  tabClickHandler);
      } else {
        el.addEventListener("click", keyClickHandler);
      }
    });
  };

  switchLanguage(){
    const keys = this.keys;
    const lang = this.lang;
    keys.forEach(keyObject => {
      if (keyObject['en'] !== keyObject['ru']){
        let value = keyObject[lang];
        let key = document.querySelector(`[data-code="${keyObject['code']}"]`)
        key.innerHTML = value;
        key.dataset.value = value;
      }
    });
  }

  toggleCapsLock(){
    let capsLock = document.querySelector('[data-code="20"]');
    capsLock.classList.toggle("active-caps");
    const keys = this.keys;
    const lang = this.lang;
    keys.forEach(keyObject => {
      if (keyObject['en'] !== keyObject['ru']){
        let value = keyObject[lang];
        let key = document.querySelector(`[data-code="${keyObject['code']}"]`)
        if ( capsLock.classList.contains("active-caps") ) {
          key.innerHTML = value.toUpperCase();
          key.dataset.value = value.toUpperCase();
        } else {
          key.innerHTML = value.toLowerCase();
          key.dataset.value = value.toLowerCase();
        }
      }
    });
  }
  
  }

let virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.init();