var emoji = require('node-emoji')

module.exports = function (app) {

    emoji.get('coffee') // returns the emoji code for coffee (displays emoji on terminals that support it)
    emoji.which(emoji.get('coffee')) // returns the string "coffee"
    emoji.get(':fast_forward:') // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/)
    emoji.emojify('I :heart: :coffee:!') // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!"
    emoji.random() // returns a random emoji + key, e.g. `{ emoji: '❤️', key: 'heart' }`
    emoji.search('cof') // returns an array of objects with matching emoji's. `[{ emoji: '☕️', key: 'coffee' }, { emoji: ⚰', key: 'coffin'}]`
}