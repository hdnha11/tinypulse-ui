'use strict';

import skate from 'skatejs';

export default skate('tiny-button', {
  created: function (elem) {


    content = elem.textContent;
    elem.innerHTML = `
      <button>${content}</button>
    `;
    console.log('render');
  },
  properties: {
    disabled: skate.properties.boolean ({
      attribute: true,
      initial: function () {
        console.log('init');
      },
      set (elem, data) {
        elem.querySelector('button').disabled = data.newValue;
        console.log("disabled");
      }
    })
  }
});
