import _ from 'lodash';
import '../css/index.css';
import {add} from './print.js';


var app = document.getElementById('app');
app.innerHTML = 'hi mary';
app.onclick = function(){alert(add(1,3));};

