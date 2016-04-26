var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor = makeColorDancer;

makeColorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var index = Math.floor(Math.random() * (5 + 1));
  var colors = ['red', 'blue', 'black', 'grey', 'green'];
    //console.log(index);
  this.$node.css({'border': '10px solid ' + colors[index]});

  this.$node.click(function(event) {
    //console.log(this);
    $(this).css({'height': '100px', 'width': '100px'});
    $(this).hide();
  });
};

