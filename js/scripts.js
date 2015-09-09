
var pigLatin = function(phrase){

        if (phrase.substring(0,2).match(/qu/)) {
            phrase = phrase.substring(2, phrase.length) + phrase[0] + phrase[1];
        }else if (phrase.substring(1,3).match(/qu/)) {
            phrase = phrase.substring(3, phrase.length) + phrase[0] + phrase[1] + phrase[2];
        }else if (phrase.match(/[^aeiou]/) && phrase[1].match(/[aeiou]/)) {
            phrase = phrase.substring(1, phrase.length) + phrase[0];

        }else if(phrase.match(/[^aeiou](\w{2})/)) {
            phrase = phrase.substring(2, phrase.length) + phrase[0] + phrase[1];
        }

        return phrase += "ay";
    }
