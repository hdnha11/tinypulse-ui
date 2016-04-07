'use strict';

import skate from 'skatejs';
import closest from '../utils/closest.js'

skate('expander-trigger', {
  events: {
    click: function() {
      var elem = closest(this, 'expander-content');
      if (elem) {
        elem.toggle();
      }
    }
  }
});

skate('expander-content', {
  properties: {
    isHidden: skate.properties.boolean({
      attribute: true
    })
  },
  prototype: {
    toggle: function() {
      this.isHidden = !this.isHidden;
    }
  }
});