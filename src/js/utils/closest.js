'use strict';

export default function closest(el, selector) {
  return el && (el.querySelector(selector) || closest(el.parentNode, selector));
}