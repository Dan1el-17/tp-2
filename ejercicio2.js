const word1 = "tren";
const word2 = "edificio"

const compareWordsLength = (word1, word2) => {
    if (word1.length > word2.length) {
        return "La palabra " + word1 + " es mas larga."        
    } else {
        return "La palabra " + word2 + " es mas larga."  
    }
}

const result = compareWordsLength(word1, word2);

console.log(result)