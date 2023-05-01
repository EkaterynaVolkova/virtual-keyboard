class VirtualKeyboard {
  constructor(lang='en'){
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
        "ru": "ю",
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
    this.lang = lang;
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
      keyboard += `<span data-code="${keyObject['code']}" data-value="${value}" class="${keyObject['class']}">${value}</span>`;
    });
    keyboard += "</div>";
    keyboard += "<p class='info'>Клавиатура создана в операционной системе Linux</p>";
    keyboard += "<p class='info'>Для переключения языка комбинация: Win + space</p>"
    keyboard += "</div>";
    body.innerHTML = keyboard;
  }

  setUpGeneralEvents(){
    const textInput = document.querySelector('#text-input');

    document.addEventListener("keydown", (e) => {
      let code = e.key;
      e.preventDefault();
      let element = document.querySelector(`[data-value="${code}"]`);
      if (element){
        textInput.innerHTML += element.dataset.value;
        element.classList.add("active-key");
      }
    });

    document.addEventListener("keyup", () => {
      let element = document.querySelector('.active-key');
      if (element){
        element.classList.remove("active-key");
      }
    });
  }

  setUpClickEvents(){
    let textInput = document.querySelector('#text-input');

    const keyClickHandler = (event) => {
      let element = event.target;
      textInput.innerHTML += element.innerHTML;
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(function (el) {
      el.addEventListener("click", keyClickHandler);
    });
  };
  
  }

let virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.init();