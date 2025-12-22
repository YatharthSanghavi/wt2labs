function countVowelsConsonants(str) {
    let vowels = 0, consonants = 0;
    str = str.toLowerCase();

    for (let ch of str) {
        if (/[aeiou]/.test(ch)) {
            vowels++;
        } else if (/[a-z]/.test(ch)) {
            consonants++;
        }
    }

    return { vowels, consonants };
}

console.log(countVowelsConsonants("JavaScript"));
