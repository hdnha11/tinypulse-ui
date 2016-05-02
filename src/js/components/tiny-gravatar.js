'use strict';

import skate from 'skatejs';
import crypto from 'crypto-js';

skate('tiny-gravatar', {
  render: function(elem) {
    var placeholder = elem.getAttribute('placeholder');
    var email = elem.getAttribute('email');
    var link = '//www.gravatar.com/avatar/' + crypto.MD5(email) + '?d=blank';
    elem.innerHTML=`
      <span>${getInitialLetters(placeholder)}</span>
      <img src="${link}">
    `;
    elem._img = elem.querySelector('img');
    elem._img.onload = function() {
      this.setAttribute('loaded', '');
    }
  }
});

function getInitialLetters(str) {
  if (!str) {
    return '';
  }

  var words = str.split(' ');
  if (words.length === 1) {
    return words[0].substr(0, 2);
  }

  return words.map(function(word) {
    return word.charAt(0);
  }).join('').substr(0,2);
}