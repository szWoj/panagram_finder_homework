const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}


// PangramFinder.prototype.isPangram = function () {


// return this.alphabet.every((letter) => this.phrase.includes(letter));
  
// };

PangramFinder.prototype.isPangram = function () {
  phrase = this.phrase;
  
  const result = this.alphabet.every((letter) =>{
    return phrase.includes(letter)
  });
  return result;
};
module.exports = PangramFinder;
