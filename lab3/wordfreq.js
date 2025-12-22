function wordFreqObj(str) {
    const words = str.split(/\s+/);
    const freq = {};
    words.map(word => {
        freq[word] = (freq[word] || 0) + 1;
    });
    return freq;
}

const str = "hi hello how are you hello hi";
console.log(wordFreqObj(str));