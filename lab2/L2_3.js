function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return {
        word: longest,
        length: longest.length
    };
}

console.log(longestWord("JavaScript is very powerful language"));
