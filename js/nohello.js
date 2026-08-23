// @ts-ignore
const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'hello',
    'hi',
    'hey',
    "g'day",
    'bonjour',
    'yo',
    'hola',
    'morning!',
    'hallo',
    'ciao',
    '&#128075;',
    'namaste',
    'hoi',
    "m'athchomaroon",
    'hiya',
    'ÐŸÑ€Ð¸Ð²ÐµÑ‚',
    'you got a sec?',
    'Ù…Ø±Ø­Ø¨Ø§',
    'greetings!',
    'aloha',
    'ã“ã‚“ã«ã¡ã¯',
    'buenos dias',
    'nuqneH',
    'heya',
    'olÃ ',
    'apipoulaÃ¯',
    'j0',
    'howdy',
    '×©×œ×•×',
    'yooooooooooo!',
    'ä½ å¥½',
    'åœ¨å—ï¼Ÿ',
    'you there?',
    'fraeslis',
    'ì—¬ë³´ì„¸ìš”',
    'sul sul',
    'quick question...',
    'achuta',
    'à¨¸à¨¤ à¨¸à©à¨°à©€ à¨…à¨•à¨¾à¨²',
    'ping',
    'Î§Î±Î¯ÏÎµÏ„Îµ',
    'Ø³Ù„Ø§Ù…',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}
