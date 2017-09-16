import React from 'react';
import PropTypes from 'prop-types';

const censorWord = (word, matches) => {
  const wordArray = [...word];
  return wordArray.map(letter => (matches.find(match => match === letter) ? letter : '_'));
};

const Word = ({ word, matches }) => (
  <div>
    <span>
      {censorWord(word, matches)}
    </span>
  </div>
);

Word.defaultProps = {
  word: '',
  matches: [],
};

Word.propTypes = {
  word: PropTypes.string.isRequired,
  matches: PropTypes.arrayOf(PropTypes.string),
};

export default Word;
