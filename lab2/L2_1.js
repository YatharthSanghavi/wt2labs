function countCharacters(str) {
    let count = {};

    for (let ch of str) {
        count[ch] = (count[ch] || 0) + 1;
    }

    return count;
}

let str1 = "hello";
console.log(countCharacters(str1));
