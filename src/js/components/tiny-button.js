'use strict';

import skate from 'skatejs';

export default skate('tiny-button', {
  created: function (elem) {
    var content = elem.textContent;
    elem.innerHTML = `
      <button>${content}</button>
    `;
  },
  properties: {
    disabled: skate.properties.boolean ({
      attribute: true,
      set (elem, data) {
        elem.querySelector('button').disabled = data.newValue;
      }
    })
  }
});
