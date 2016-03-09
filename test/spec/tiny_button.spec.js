describe('Tiny Button test', function() {
  var previouslyLoaded = false;
  beforeEach(function(){
    var tinyButton = document.createElement("tiny-button");
      tinyButton.innerHTML = "this is a button";
      
      document.body.appendChild(tinyButton);
  });

  it('contains the content wrapped by the element', function() {
    var distributed_nodes = document.getElementsByTagName('tiny-button');

    expect(distributed_nodes[0].textContent.trim()).toBe('this is a button');
  });
});