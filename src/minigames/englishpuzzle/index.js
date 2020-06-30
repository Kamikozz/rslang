import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './scss/main.scss';

import Api from 'app/js/api';
import Settings from 'app/js/Settings';
import state from './js/state';
import englishpuzzle from './js/englishpuzzle';


const api = new Api();
const settings = new Settings();
englishpuzzle.init(state, api, settings);
