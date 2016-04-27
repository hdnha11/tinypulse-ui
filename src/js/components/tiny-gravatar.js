'use strict';

import skate from 'skatejs';
import crypto from 'crypto-js';

export default skate('tiny-gravatar', {
  extends: 'img',
  render: function(elem) {
    var email = elem.getAttribute('email'),
      size = elem.getAttribute('width') || 25,
      link = '//www.gravatar.com/avatar/' + crypto.MD5(email) + '?d=mm&s=' + size;

    elem.setAttribute('src', link);
  },
  properties: {
    email: {
      attribute: true,
      set: skate.render
    },
    width: {
      attribute: true,
      set: skate.render
    }
  }
});
