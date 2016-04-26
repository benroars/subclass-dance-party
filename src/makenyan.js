var makeNyan = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeNyan.prototype = Object.create(makeDancer.prototype);
makeNyan.prototype.constructor = makeNyan;

makeNyan.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('nyan');

  this.$node.hover(function(event) {
    //console.log(this);
    //$(this).css({'height': '100px', 'width': '100px'});
   // $(this).css({'transform': 'scaleX(-1)'});
    $(this).css({'transform': 'rotateY(180deg)'});
  });
};

