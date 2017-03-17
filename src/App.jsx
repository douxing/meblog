import React, { Component } from 'react';

import styles from './styles.css';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {
  render() {
    console.log('undefined???');
    console.log(styles);
    console.log(styles.button);
    console.log('undefined??? end');
    
    return <div className={styles.color}><h1>hello {this.props.name}!</h1></div>;
  }
}
