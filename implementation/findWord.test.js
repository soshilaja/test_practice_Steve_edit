// const { it, expect } = require("@jest/globals");
const findWord = require('./findWord');

console.log(findWord.findWord('Excel is a software', 'Excel'));

describe('======= Find word =======', () => {
    it('He was tall and thin and angry.', () => {

        expect(findWord.findWord("He was tall and thin and angry.", "and")).toBe(2);
        expect(findWord.findWord("He was tall and thin and angry.", "and")).not.toBe(0);

        expect(findWord.findWord("He was tall and thin and angry.", "")).toBe(0);

        expect(findWord.findWord("He was tall and thin and angry.", "NoSense")).toBe(0);


    });

    it('He was tall and thin and angry.', () => {
        expect(findWord.findWord("", "Hi")).not.toBe(2);
        expect(findWord.findWord("", "and")).not.toBe(2);
        expect(findWord.findWord("", "and")).toBe(null);
    });
});
