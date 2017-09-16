import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  ) || null
);

render(App);
if (module.hot) {
  module.hot.accept('./App', () => {
    const Component = require('./App').default; // eslint-disable-line
    render(Component);
  });
}
