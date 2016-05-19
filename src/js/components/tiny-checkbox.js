'use strict';

import skate from 'skatejs';
import $ from 'jquery';

skate('tiny-checkbox', {
  render: function(elem) {
    var label = elem.getAttribute('label');
    if (label) {
      $(elem).append(`
        <label>${label}</label>
      `);
    }
    elem.tabIndex = 0;
  },
  events: {
    mousedown: function() {
      $(this).addClass('noOutline');
    },
    blur: function() {
      $(this).removeClass('noOutline');
    },
    click: function() {
      this.checked = !this.checked;
    },
    keypress: function(e) {
      switch (e.keyCode) {
        case 32:
          this.checked = !this.checked;
          break;
      }

    }
  },
  properties: {
    checked: skate.properties.boolean({
      attribute: true
    })
  }
});
