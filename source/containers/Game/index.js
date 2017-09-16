import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomWord } from '../../actions';
import Guesses from '../../components/Guesses';
import Word from '../../components/Word';

const mapStateToProps = state => ({
  total: state.guesses.total,
  wrong: state.guesses.wrong,
  right: state.guesses.right,
  word: state.word.current,
});

const mapDispatchToProps = dispatch => ({
  getWord: () => dispatch(getRandomWord()),
});

class Game extends React.Component {
  static propTypes = {
    getWord: PropTypes.func.isRequired,
    total: PropTypes.arrayOf(PropTypes.string).isRequired,
    wrong: PropTypes.arrayOf(PropTypes.string).isRequired,
    right: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.props.getWord();
  }

  render() {
    if (!this.props.word) return (<div>Loading...</div>);
    return (
      <div>
        <Word
          word={this.props.word}
          matches={this.props.right}
        />
        <Guesses
          wrong={this.props.wrong}
          total={this.props.total}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
