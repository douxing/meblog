import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('app');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component name="John" />
    </AppContainer>,
    rootElement
  );

render(App);
if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
