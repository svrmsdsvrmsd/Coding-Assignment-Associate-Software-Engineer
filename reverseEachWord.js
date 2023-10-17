function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}
const sentence = "Hello, world! This is a test.";
const reversedSentence = reverseWords(sentence);
console.log("Original sentence:", sentence);
console.log("Reversed sentence:", reversedSentence);
