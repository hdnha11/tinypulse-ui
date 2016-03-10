describe('the button module', () => {
  it('should instantiate a button', () => {
    var button = new TinyButton('Button');

    expect(button.content).to.equal('Button');
    expect(1).to.equal(2);
  });
});
