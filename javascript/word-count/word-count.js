function words(sentence) {
  words_splited = sentence.split(/[ \n]/);
  words_count = {}
  for(var i = 0; i < words_splited.length; i++) {
    words_count[words_splited[i]] = (words_count[words_splited[i]] || 0);
    words_count[words_splited[i]] = isNaN(parseInt(words_count[words_splited[i]])) ? 1 : words_count[words_splited[i]] + 1
  }
  return words_count;
}

module.exports = words;
