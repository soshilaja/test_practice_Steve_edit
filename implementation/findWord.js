// implementation written by Wombats according to specs and tests received

const findWord = function(str, word) {
    // treat null string
    if (str == "") {
        return null
    }

    //remove dots etc
    clearStr = str.replace(/[^\w\s]/gi, "");
    console.log(clearStr);

    //count word occurence
    const strArray = clearStr.toLowerCase().split(" ");
    console.log(strArray);
    let result = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (word == strArray[i]) {
            result += 1;
            // console.log(wordCase);
        }
    }
    return result;
}

exports.findWord = findWord;

console.log(findWord('He was tall and thin and angry.', 'and'));