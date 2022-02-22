function CapitalizeFirstLetter(word: string) {
  let wordsEdited = "";

  if(!word || word === "") {
    return null
  };

  wordsEdited = word[0].toUpperCase() + word.substring(1, word.length);

  return wordsEdited;
};

export {
  CapitalizeFirstLetter
};