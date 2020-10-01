 import _ from 'lodash';
 import './style.css';
 import mylove from './mylove.png';
  function component() {
    var element = document.createElement('div');

  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    var myIcon = new Image();
    myIcon.src = mylove;
    element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());