function replaceNonAlphaNum(ch){
    let ascii = ch.charCodeAt();
    let checkBound = function(min, max, num){
        if(num >= min && num <= max)  {
            return true;
        } else {
            return false;
        }
    }
    if(
        checkBound(48, 57, ascii) || 
        checkBound(65, 90, ascii) ||
        checkBound(97, 122, ascii)
    ){
        return ch;
    } else {
        return ' ';
    }
}

function mapWord(wordArr, word) {
    let hasDupe = false;
    wordArr.map(w => {
        if(w.value === word){
            w.freq = w.freq + 1;
            hasDupe = true;
        }
    });
    if(!hasDupe)
        wordArr.push({value: word, freq: 1});

    return wordArr;
}

function storeWords(text){
    let wordArrFreq = [];
    let currWord = "";
    text.split('').forEach(ch => {
        if(replaceNonAlphaNum(ch) !== ' '){
            currWord = currWord + ch;
        }
        else if(currWord.length > 0){
            wordArrFreq = mapWord(wordArrFreq, currWord);
            currWord = "";
        }
    });
    if(currWord.length > 0){
        wordArrFreq = mapWord(wordArrFreq, word);
    }
    return wordArrFreq;
}


let list = storeWords("Add milk and eggs, then add flour and sugar.");
list.forEach(x => {
    console.log("Word: " + x.value + " | Frequency: " + x.freq );
});