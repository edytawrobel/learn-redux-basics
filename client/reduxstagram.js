// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main'

render(<Main/>, document.getElementById('root')); // render takes two args: element (jsx) and also mounting/rendering point that is in our index.html
