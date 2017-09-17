import React from 'react';
import PropTypes from 'prop-types';

class Word extends React.Component {
  static defaultProps = {
    word: '',
    matches: [],
  };

  static propTypes = {
    word: PropTypes.string.isRequired,
    matches: PropTypes.arrayOf(PropTypes.string),
  };

  static censorWord(word, matches) {
    const wordArray = [...word];
    const censored = wordArray.map(letter => (matches.find(match => match === letter) ? letter : '_'));
    return censored.map((letter, index) => (<span key={index} style={{ marginRight: '5px' }}>{`${letter}`}</span>));
  }

  render() {
    return (
      <div>
        <span>
          {Word.censorWord(this.props.word, this.props.matches)}
        </span>
      </div>
    );
  }
}

export default Word;
