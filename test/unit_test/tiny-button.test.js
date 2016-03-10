describe('the button module', () => {
  var button;

  beforeEach(function() {
    button = document.createElement("tiny-button");
  });

  it('should instantiate a button', () => {
    

    expect(button.disabled).toBe(false);
  });

  it('button with disabled attribute cause the button is disbaled', () => {
    button.setAttribute('disabled');

    expect(button.disabled).toBe(true);
  });
});
