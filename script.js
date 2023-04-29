class VirtualKeyboard {
  constructor(){
    this.keys = { "_192":"~", "_49":"1", "_50":"2", "_51":"3", "_52":"4", "_53":"5", "_54":"6", "_55":"7", "_56":"8", "_57":"9", "_48":"0", "_189":"-", "_187":"+", "_8":"backspace",
    "_9":"tab", "_81":"q", "_87":"w", "_69":"e", "_82":"r", "_84":"t", "_89":"y", "_85":"u", "_73":"i", "_79":"o", "_80":"p", "_219":"[", "_221":"]", "_220":"\\",
    "_20": "caps", "_65":"a", "_83":"s", "_68":"d", "_70":"f", "_71":"g", "_72":"h", "_74":"j", "_75":"k", "_76":"l", "_186":";", "_222":"'", "_13":"enter",
    "_16":"shift", "_90":"z", "_88":"x", "_67":"c", "_86":"v", "_66":"b", "_78":"n", "_77":"m", "_188":",", "_190":".", "_191":"?", "_16":"shift",
    "_17":"ctrl", "_91":"Win", "_18":"alt", "_32":"space", "_18":"alt", "_92":"Win", "_17":"ctrl"};
  }

  renderKeyboard(){
    const keys = this.keys;
    const body = document.querySelector("body");
    let keyboard = "<textarea id='text-input' rows='4' cols='50'></textarea>";
    keyboard += "<div class='keyboard'>";
    for (let [key, value] in keys) {
        console.log(key, value);
      }
    for (const key in keys) {
        keyboard += `<span data-code="${key.slice(1)}" class='key'>${keys[key]}</span>`;
    };
    keyboard += "</div>";
    body.innerHTML = keyboard;
  }
}

let virtualKeyboard = new VirtualKeyboard();
virtualKeyboard.renderKeyboard();