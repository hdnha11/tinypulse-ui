import {expect} from 'chai';
import TinyButton from '../target/js/components/tiny-button';

describe('the button module', () => {
  it('should instantiate a button', () => {
    var button = new TinyButton('Button');

    expect(button.content).to.equal('Button');
  });
});
