
var pigLatin = function(phrase){

        if (phrase.match(/[^aeiouy]/) && phrase[1].match(/[aeiouy]/)) {
            phrase = phrase.substring(1, phrase.length) + phrase[0];
        }else if(phrase.match(/[^aeiouy](\w{2})/)) {
            phrase = phrase.substring(2, phrase.length) + phrase[0] + phrase[1];
        }
        return phrase += "ay";
    }
