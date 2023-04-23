const keys = [
  [
    {
      '`': {
        classes: ['keyboard-button--symbol'],
        eng: '`',
        ru: 'ё',
        engUpper: '~',
        ruUpper: 'Ё',
        keycode: 192,
      },
    },
    {
      1: {
        classes: ['keyboard-button--symbol'],
        eng: '1',
        ru: '1',
        engUpper: '!',
        ruUpper: '!',
        keycode: 49,
      },
    },
    {
      2: {
        classes: ['keyboard-button--symbol'],
        eng: '2',
        ru: '2',
        engUpper: '@',
        ruUpper: '"',
        keycode: 50,
      },
    },
    {
      3: {
        classes: ['keyboard-button--symbol'],
        eng: '3',
        ru: '3',
        engUpper: '#',
        ruUpper: '№',
        keycode: 51,
      },
    },
    {
      4: {
        classes: ['keyboard-button--symbol'],
        eng: '4',
        ru: '4',
        engUpper: '$',
        ruUpper: ';',
        keycode: 52,
      },
    },
    {
      5: {
        classes: ['keyboard-button--symbol'],
        eng: '5',
        ru: '5',
        engUpper: '%',
        ruUpper: '%',
        keycode: 53,
      },
    },
    {
      6: {
        classes: ['keyboard-button--symbol'],
        eng: '6',
        ru: '6',
        engUpper: '^',
        ruUpper: ':',
        keycode: 54,
      },
    },
    {
      7: {
        classes: ['keyboard-button--symbol'],
        eng: '7',
        ru: '7',
        engUpper: '&',
        ruUpper: '?',
        keycode: 55,
      },
    },
    {
      8: {
        classes: ['keyboard-button--symbol'],
        eng: '8',
        ru: '8',
        engUpper: '*',
        ruUpper: '*',
        keycode: 56,
      },
    },
    {
      9: {
        classes: ['keyboard-button--symbol'],
        eng: '9',
        ru: '9',
        engUpper: '(',
        ruUpper: '(',
        keycode: 57,
      },
    },
    {
      0: {
        classes: ['keyboard-button--symbol'],
        eng: '0',
        ru: '0',
        engUpper: ')',
        ruUpper: ')',
        keycode: 48,
      },
    },
    {
      '-': {
        classes: ['keyboard-button--symbol'],
        eng: '-',
        ru: '-',
        engUpper: '_',
        ruUpper: '_',
        keycode: 189,
      },
    },
    {
      '=': {
        classes: ['keyboard-button--symbol'],
        eng: '=',
        ru: '=',
        engUpper: '+',
        ruUpper: '+',
        keycode: 187,
      },
    },
    {
      Backspace: {
        classes: ['keyboard-button--service', 'keyboard-button--backspace'],
        eng: 'Backspace',
        keycode: 8,
      },
    },
  ],
  [
    {
      Tab: {
        classes: ['keyboard-button--service', 'keyboard-button--tab'],
        eng: 'Tab',
        keycode: 9,
      },
    },
    {
      q: {
        classes: ['keyboard-button--symbol'],
        eng: 'q',
        ru: 'й',
        engUpper: 'Q',
        ruUpper: 'Й',
        keycode: 81,
      },
    },
    {
      w: {
        classes: ['keyboard-button--symbol'],
        eng: 'w',
        ru: 'ц',
        engUpper: 'W',
        ruUpper: 'Ц',
        keycode: 87,
      },
    },
    {
      e: {
        classes: ['keyboard-button--symbol'],
        eng: 'e',
        ru: 'у',
        engUpper: 'E',
        ruUpper: 'У',
        keycode: 69,
      },
    },
    {
      r: {
        classes: ['keyboard-button--symbol'],
        eng: 'r',
        ru: 'к',
        engUpper: 'R',
        ruUpper: 'К',
        keycode: 82,
      },
    },
    {
      t: {
        classes: ['keyboard-button--symbol'],
        eng: 't',
        ru: 'е',
        engUpper: 'T',
        ruUpper: 'Е',
        keycode: 84,
      },
    },
    {
      y: {
        classes: ['keyboard-button--symbol'],
        eng: 'y',
        ru: 'н',
        engUpper: 'Y',
        ruUpper: 'Н',
        keycode: 89,
      },
    },
    {
      u: {
        classes: ['keyboard-button--symbol'],
        eng: 'u',
        ru: 'г',
        engUpper: 'U',
        ruUpper: 'Г',
        keycode: 85,
      },
    },
    {
      i: {
        classes: ['keyboard-button--symbol'],
        eng: 'i',
        ru: 'ш',
        engUpper: 'I',
        ruUpper: 'Ш',
        keycode: 73,
      },
    },
    {
      o: {
        classes: ['keyboard-button--symbol'],
        eng: 'o',
        ru: 'щ',
        engUpper: 'O',
        ruUpper: 'Щ',
        keycode: 79,
      },
    },
    {
      p: {
        classes: ['keyboard-button--symbol'],
        eng: 'p',
        ru: 'з',
        engUpper: 'P',
        ruUpper: 'P',
        keycode: 80,
      },
    },
    {
      '[': {
        classes: ['keyboard-button--symbol'],
        eng: '[',
        ru: 'х',
        engUpper: '{',
        ruUpper: 'Х',
        keycode: 219,
      },
    },
    {
      ']': {
        classes: ['keyboard-button--symbol'],
        eng: ']',
        ru: 'ъ',
        engUpper: '}',
        ruUpper: 'Ъ',
        keycode: 221,
      },
    },
    {
      '\\': {
        classes: ['keyboard-button--symbol'],
        eng: '\\',
        ru: '\\',
        engUpper: '|',
        ruUpper: '/',
        keycode: 220,
      },
    },
  ],
  [
    {
      'Caps Lock': {
        classes: ['keyboard-button--service', 'keyboard-button--capslock'],
        eng: 'Caps Lock',
        keycode: 20,
      },
    },
    {
      a: {
        classes: ['keyboard-button--symbol'],
        eng: 'a',
        ru: 'ф',
        engUpper: 'A',
        ruUpper: 'Ф',
        keycode: 65,
      },
    },
    {
      s: {
        classes: ['keyboard-button--symbol'],
        eng: 's',
        ru: 'ы',
        engUpper: 'S',
        ruUpper: 'Ы',
        keycode: 83,
      },
    },
    {
      d: {
        classes: ['keyboard-button--symbol'],
        eng: 'd',
        ru: 'в',
        engUpper: 'D',
        ruUpper: 'В',
        keycode: 68,
      },
    },
    {
      f: {
        classes: ['keyboard-button--symbol'],
        eng: 'f',
        ru: 'а',
        engUpper: 'F',
        ruUpper: 'А',
        keycode: 70,
      },
    },
    {
      g: {
        classes: ['keyboard-button--symbol'],
        eng: 'g',
        ru: 'п',
        engUpper: 'G',
        ruUpper: 'П',
        keycode: 71,
      },
    },
    {
      h: {
        classes: ['keyboard-button--symbol'],
        eng: 'h',
        ru: 'р',
        engUpper: 'H',
        ruUpper: 'Р',
        keycode: 72,
      },
    },
    {
      j: {
        classes: ['keyboard-button--symbol'],
        eng: 'j',
        ru: 'о',
        engUpper: 'J',
        ruUpper: 'О',
        keycode: 74,
      },
    },
    {
      k: {
        classes: ['keyboard-button--symbol'],
        eng: 'k',
        ru: 'л',
        engUpper: 'K',
        ruUpper: 'Л',
        keycode: 75,
      },
    },
    {
      l: {
        classes: ['keyboard-button--symbol'],
        eng: 'l',
        ru: 'д',
        engUpper: 'L',
        ruUpper: 'Д',
        keycode: 76,
      },
    },
    {
      ';': {
        classes: ['keyboard-button--symbol'],
        eng: ';',
        ru: 'ж',
        engUpper: ':',
        ruUpper: 'Ж',
        keycode: 186,
      },
    },
    {
      "'": {
        classes: ['keyboard-button--symbol'],
        eng: "'",
        ru: 'э',
        engUpper: '"',
        ruUpper: '"',
        keycode: 222,
      },
    },
    {
      Enter: {
        classes: ['keyboard-button--service', 'keyboard-button--enter'],
        eng: 'Enter',
        keycode: 13,
      },
    },
  ],
  [
    {
      Shift: {
        classes: ['keyboard-button--service', 'keyboard-button--shiftleft'],
        eng: 'Shift',
        keycode: 16,
      },
    },
    {
      z: {
        classes: ['keyboard-button--symbol'],
        eng: 'z',
        ru: 'я',
        engUpper: 'Z',
        ruUpper: 'Я',
        keycode: 90,
      },
    },
    {
      x: {
        classes: ['keyboard-button--symbol'],
        eng: 'x',
        ru: 'ч',
        engUpper: 'X',
        ruUpper: 'Ч',
        keycode: 88,
      },
    },
    {
      c: {
        classes: ['keyboard-button--symbol'],
        eng: 'c',
        ru: 'с',
        engUpper: 'C',
        ruUpper: 'С',
        keycode: 67,
      },
    },
    {
      v: {
        classes: ['keyboard-button--symbol'],
        eng: 'v',
        ru: 'м',
        engUpper: 'V',
        ruUpper: 'М',
        keycode: 86,
      },
    },
    {
      b: {
        classes: ['keyboard-button--symbol'],
        eng: 'b',
        ru: 'и',
        engUpper: 'B',
        ruUpper: 'И',
        keycode: 66,
      },
    },
    {
      n: {
        classes: ['keyboard-button--symbol'],
        eng: 'n',
        ru: 'т',
        engUpper: 'N',
        ruUpper: 'Т',
        keycode: 78,
      },
    },
    {
      m: {
        classes: ['keyboard-button--symbol'],
        eng: 'm',
        ru: 'ь',
        engUpper: 'M',
        ruUpper: 'Ь',
        keycode: 77,
      },
    },
    {
      ',': {
        classes: ['keyboard-button--symbol'],
        eng: ',',
        ru: 'б',
        engUpper: '<',
        ruUpper: 'Б',
        keycode: 188,
      },
    },
    {
      '.': {
        classes: ['keyboard-button--symbol'],
        eng: '.',
        ru: 'ю',
        engUpper: '>',
        ruUpper: 'Ю',
        keycode: 190,
      },
    },
    {
      '/': {
        classes: ['keyboard-button--symbol'],
        eng: '/',
        ru: '.',
        engUpper: '?',
        ruUpper: ',',
        keycode: 191,
      },
    },
    {
      Shift: {
        classes: ['keyboard-button--service', 'keyboard-button--shiftright'],
        eng: 'Shift',
        keycode: 16,
      },
    },
  ],
  [
    {
      Ctrl: {
        classes: ['keyboard-button--service', 'keyboard-button--controlleft'],
        eng: 'Ctrl',
        keycode: 17,
      },
    },
    {
      Win: {
        classes: ['keyboard-button--service', 'keyboard-button--metaleft'],
        eng: 'Win',
        keycode: 91,
      },
    },
    {
      Alt: {
        classes: ['keyboard-button--service', 'keyboard-button--altleft'],
        eng: 'Alt',
        keycode: 18,
      },
    },
    {
      Space: {
        classes: ['keyboard-button--service', 'keyboard-button--space'],
        eng: 'Space',
        keycode: 32,
      },
    },
    {
      Alt: {
        classes: ['keyboard-button--service', 'keyboard-button--altright'],
        eng: 'Alt',
        keycode: 18,
      },
    },
    {
      Win: {
        classes: ['keyboard-button--service', 'keyboard-button--metaright'],
        eng: 'Win',
        keycode: 92,
      },
    },
    {
      Ctrl: {
        classes: ['keyboard-button--service', 'keyboard-button--controlright'],
        eng: 'Ctrl',
        keycode: 17,
      },
    },
  ],
];

export default keys;
