import React from 'react';
import PropTypes from 'prop-types';

const Guesses = ({ total, wrong }) => (
  <div style={{ paddingTop: '20px' }}>
    <div>
      Wrong letters:
      &nbsp;
      {wrong.map((letter, index) => <span key={index}>{letter}</span>)}
    </div>
    <div style={{ paddingTop: '20px', opacity: 0.5 }}>
      Guesses:
      &nbsp;
      {total.map((letter, index) => <span key={index}>{letter}</span>)}
    </div>
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
