const keys = [
  [
    {
      '`': {
        classes: ['keyboard-button--symbol'],
        eng: '`',
        ru: 'ё',
        engUpper: '~',
        ruUpper: 'Ё',
      },
    },
    {
      1: {
        classes: ['keyboard-button--symbol'],
        eng: '1',
        ru: '1',
        engUpper: '!',
        ruUpper: '!',
      },
    },
    {
      2: {
        classes: ['keyboard-button--symbol'],
        eng: '2',
        ru: '2',
        engUpper: '@',
        ruUpper: '"',
      },
    },
    {
      3: {
        classes: ['keyboard-button--symbol'],
        eng: '3',
        ru: '3',
        engUpper: '#',
        ruUpper: '№',
      },
    },
    {
      4: {
        classes: ['keyboard-button--symbol'],
        eng: '4',
        ru: '4',
        engUpper: '$',
        ruUpper: ';',
      },
    },
    {
      5: {
        classes: ['keyboard-button--symbol'],
        eng: '5',
        ru: '5',
        engUpper: '%',
        ruUpper: '%',
      },
    },
    {
      6: {
        classes: ['keyboard-button--symbol'],
        eng: '6',
        ru: '6',
        engUpper: '^',
        ruUpper: ':',
      },
    },
    {
      7: {
        classes: ['keyboard-button--symbol'],
        eng: '7',
        ru: '7',
        engUpper: '&',
        ruUpper: '?',
      },
    },
    {
      8: {
        classes: ['keyboard-button--symbol'],
        eng: '8',
        ru: '8',
        engUpper: '*',
        ruUpper: '*',
      },
    },
    {
      9: {
        classes: ['keyboard-button--symbol'],
        eng: '9',
        ru: '9',
        engUpper: '(',
        ruUpper: '(',
      },
    },
    {
      0: {
        classes: ['keyboard-button--symbol'],
        eng: '0',
        ru: '0',
        engUpper: ')',
        ruUpper: ')',
      },
    },
    {
      '-': {
        classes: ['keyboard-button--symbol'],
        eng: '-',
        ru: '-',
        engUpper: '_',
        ruUpper: '_',
      },
    },
    {
      '=': {
        classes: ['keyboard-button--symbol'],
        eng: '=',
        ru: '=',
        engUpper: '+',
        ruUpper: '+',
      },
    },
    {
      Backspace: {
        classes: ['keyboard-button--service', 'keyboard-button--backspace'],
        eng: 'Backspace',
      },
    },
  ],
  [
    {
      Tab: {
        classes: ['keyboard-button--service', 'keyboard-button--caps-tab'],
        eng: 'Tab',
      },
    },
    {
      q: {
        classes: ['keyboard-button--symbol'],
        eng: 'q',
        ru: 'й',
        engUpper: 'Q',
        ruUpper: 'Й',
      },
    },
    {
      w: {
        classes: ['keyboard-button--symbol'],
        eng: 'w',
        ru: 'ц',
        engUpper: 'W',
        ruUpper: 'Ц',
      },
    },
    {
      e: {
        classes: ['keyboard-button--symbol'],
        eng: 'e',
        ru: 'у',
        engUpper: 'E',
        ruUpper: 'У',
      },
    },
    {
      r: {
        classes: ['keyboard-button--symbol'],
        eng: 'r',
        ru: 'к',
        engUpper: 'R',
        ruUpper: 'К',
      },
    },
    {
      t: {
        classes: ['keyboard-button--symbol'],
        eng: 't',
        ru: 'е',
        engUpper: 'T',
        ruUpper: 'Е',
      },
    },
    {
      y: {
        classes: ['keyboard-button--symbol'],
        eng: 'y',
        ru: 'н',
        engUpper: 'Y',
        ruUpper: 'Н',
      },
    },
    {
      u: {
        classes: ['keyboard-button--symbol'],
        eng: 'u',
        ru: 'г',
        engUpper: 'U',
        ruUpper: 'Г',
      },
    },
    {
      i: {
        classes: ['keyboard-button--symbol'],
        eng: 'i',
        ru: 'ш',
        engUpper: 'I',
        ruUpper: 'Ш',
      },
    },
    {
      o: {
        classes: ['keyboard-button--symbol'],
        eng: 'o',
        ru: 'щ',
        engUpper: 'O',
        ruUpper: 'Щ',
      },
    },
    {
      p: {
        classes: ['keyboard-button--symbol'],
        eng: 'p',
        ru: 'з',
        engUpper: 'P',
        ruUpper: 'P',
      },
    },
    {
      '[': {
        classes: ['keyboard-button--symbol'],
        eng: '[',
        ru: 'х',
        engUpper: '{',
        ruUpper: 'Х',
      },
    },
    {
      ']': {
        classes: ['keyboard-button--symbol'],
        eng: ']',
        ru: 'ъ',
        engUpper: '}',
        ruUpper: 'Ъ',
      },
    },
    {
      '\\': {
        classes: ['keyboard-button--symbol'],
        eng: '\\',
        ru: '\\',
        engUpper: '|',
        ruUpper: '/',
      },
    },
  ],
  [
    {
      'Caps Lock': {
        classes: ['keyboard-button--service', 'keyboard-button--caps-lock'],
        eng: 'Caps Lock',
      },
    },
    {
      a: {
        classes: ['keyboard-button--symbol'],
        eng: 'a',
        ru: 'ф',
        engUpper: 'A',
        ruUpper: 'Ф',
      },
    },
    {
      s: {
        classes: ['keyboard-button--symbol'],
        eng: 's',
        ru: 'ы',
        engUpper: 'S',
        ruUpper: 'Ы',
      },
    },
    {
      d: {
        classes: ['keyboard-button--symbol'],
        eng: 'd',
        ru: 'в',
        engUpper: 'D',
        ruUpper: 'В',
      },
    },
    {
      f: {
        classes: ['keyboard-button--symbol'],
        eng: 'f',
        ru: 'а',
        engUpper: 'F',
        ruUpper: 'А',
      },
    },
    {
      g: {
        classes: ['keyboard-button--symbol'],
        eng: 'g',
        ru: 'п',
        engUpper: 'G',
        ruUpper: 'П',
      },
    },
    {
      h: {
        classes: ['keyboard-button--symbol'],
        eng: 'h',
        ru: 'р',
        engUpper: 'H',
        ruUpper: 'Р',
      },
    },
    {
      j: {
        classes: ['keyboard-button--symbol'],
        eng: 'j',
        ru: 'о',
        engUpper: 'J',
        ruUpper: 'О',
      },
    },
    {
      k: {
        classes: ['keyboard-button--symbol'],
        eng: 'k',
        ru: 'л',
        engUpper: 'K',
        ruUpper: 'Л',
      },
    },
    {
      l: {
        classes: ['keyboard-button--symbol'],
        eng: 'l',
        ru: 'д',
        engUpper: 'L',
        ruUpper: 'Д',
      },
    },
    {
      ';': {
        classes: ['keyboard-button--symbol'],
        eng: ';',
        ru: 'ж',
        engUpper: ':',
        ruUpper: 'Ж',
      },
    },
    {
      "'": {
        classes: ['keyboard-button--symbol'],
        eng: '\'',
        ru: 'э',
        engUpper: '"',
        ruUpper: '"',
      },
    },
    {
      Enter: {
        classes: ['keyboard-button--service', 'keyboard-button--enter'],
        eng: 'Enter',
      },
    },
  ],
  [
    {
      Shift: {
        classes: ['keyboard-button--service', 'keyboard-button--shift'],
        eng: 'Shift',
      },
    },
    {
      z: {
        classes: ['keyboard-button--symbol'],
        eng: 'z',
        ru: 'я',
        engUpper: 'Z',
        ruUpper: 'Я',
      },
    },
    {
      x: {
        classes: ['keyboard-button--symbol'],
        eng: 'x',
        ru: 'ч',
        engUpper: 'X',
        ruUpper: 'Ч',
      },
    },
    {
      c: {
        classes: ['keyboard-button--symbol'],
        eng: 'c',
        ru: 'с',
        engUpper: 'C',
        ruUpper: 'С',
      },
    },
    {
      v: {
        classes: ['keyboard-button--symbol'],
        eng: 'v',
        ru: 'м',
        engUpper: 'V',
        ruUpper: 'М',
      },
    },
    {
      b: {
        classes: ['keyboard-button--symbol'],
        eng: 'b',
        ru: 'и',
        engUpper: 'B',
        ruUpper: 'И',
      },
    },
    {
      n: {
        classes: ['keyboard-button--symbol'],
        eng: 'n',
        ru: 'т',
        engUpper: 'N',
        ruUpper: 'Т',
      },
    },
    {
      m: {
        classes: ['keyboard-button--symbol'],
        eng: 'm',
        ru: 'ь',
        engUpper: 'M',
        ruUpper: 'Ь',
      },
    },
    {
      ',': {
        classes: ['keyboard-button--symbol'],
        eng: ',',
        ru: 'б',
        engUpper: '<',
        ruUpper: 'Б',
      },
    },
    {
      '.': {
        classes: ['keyboard-button--symbol'],
        eng: '.',
        ru: 'ю',
        engUpper: '>',
        ruUpper: 'Ю',
      },
    },
    {
      '/': {
        classes: ['keyboard-button--symbol'],
        eng: '/',
        ru: '.',
        engUpper: '?',
        ruUpper: ',',
      },
    },
    {
      Shift: {
        classes: ['keyboard-button--service', 'keyboard-button--shift'],
        eng: 'Shift',
      },
    },
  ],
  [
    {
      Ctrl: {
        classes: ['keyboard-button--service', 'keyboard-button--ctrl'],
        eng: 'Ctrl',
      },
    },
    {
      Win: {
        classes: ['keyboard-button--service', 'keyboard-button--win'],
        eng: 'Win',
      },
    },
    {
      Alt: {
        classes: ['keyboard-button--service', 'keyboard-button--alt'],
        eng: 'Alt',
      },
    },
    {
      Space: {
        classes: ['keyboard-button--service', 'keyboard-button--space'],
        eng: 'Space',
      },
    },
    {
      Alt: {
        classes: ['keyboard-button--service', 'keyboard-button--alt'],
        eng: 'Alt',
      },
    },
    {
      Win: {
        classes: ['keyboard-button--service', 'keyboard-button--win'],
        eng: 'Win',
      },
    },
    {
      Ctrl: {
        classes: ['keyboard-button--service', 'keyboard-button--ctrl'],
        eng: 'Ctrl',
      },
    },
  ],
];

export default keys;
