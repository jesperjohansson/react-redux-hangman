import React from 'react';
import PropTypes from 'prop-types';

const Guesses = ({ total, wrong }) => (
  <div>
    <span>
      Guesses:
      &nbsp;
      {total.map((letter, index) => <span key={index}>{letter}</span>)}
      Wrong letters:
      &nbsp;
      {wrong.map((letter, index) => <span key={index}>{letter}</span>)}
    </span>
  </div>
);

Guesses.defaultProps = {
  total: [],
  wrong: [],
};

Guesses.propTypes = {
  total: PropTypes.arrayOf(PropTypes.string),
  wrong: PropTypes.arrayOf(PropTypes.string),
};

export default Guesses;
