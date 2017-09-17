import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomWord, triggerWin, triggerLose } from '../../actions';
import Guesses from '../../components/Guesses';
import Word from '../../components/Word';
import Canvas from '../../components/Canvas';
import { RULES } from '../../constants';

const mapStateToProps = state => ({
  total: state.guesses.total,
  wrong: state.guesses.wrong,
  right: state.guesses.right,
  word: state.word.current,
  win: state.game.win,
  lose: state.game.lose,
});

const mapDispatchToProps = dispatch => ({
  getWord: () => dispatch(getRandomWord()),
  triggerWin: () => dispatch(triggerWin()),
  triggerLose: () => dispatch(triggerLose()),
});

class Game extends React.Component {
  static propTypes = {
    getWord: PropTypes.func.isRequired,
    triggerWin: PropTypes.func.isRequired,
    triggerLose: PropTypes.func.isRequired,
    total: PropTypes.arrayOf(PropTypes.string).isRequired,
    wrong: PropTypes.arrayOf(PropTypes.string).isRequired,
    right: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.string.isRequired,
    win: PropTypes.bool.isRequired,
    lose: PropTypes.bool.isRequired,
  }

  static checkWord(word, matches) {
    const wordArray = [...word];
    const isCorrectWord = wordArray.every(letter => matches.find(match => match === letter));
    return isCorrectWord;
  }

  componentWillMount() {
    this.props.getWord();
  }

  shouldComponentUpdate({ wrong, right, total }) {
    if (
      wrong === this.props.wrong &&
      right === this.props.right &&
      total !== this.props.total
    ) return false;
    return true;
  }

  componentDidUpdate() {
    if (Game.checkWord(this.props.word, this.props.right)) return this.props.triggerWin();
    if (this.props.wrong.length >= RULES.CHANCES) return this.props.triggerLose();
    return null;
  }

  render() {
    if (!this.props.word) return (<div>Loading...</div>);
    if (this.props.win) return (<div>You won!</div>);

    return (
      <div>
        <Canvas wrong={this.props.wrong} />
        {this.props.lose && <div>{'You lose!'}</div>}
        {!this.props.lose &&
          <Word
            word={this.props.word}
            matches={this.props.right}
          />
        }
        {!this.props.lose &&
          <Guesses
            wrong={this.props.wrong}
            total={this.props.total}
          />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
