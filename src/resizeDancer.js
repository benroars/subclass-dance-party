var makeResizeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeResizeDancer.prototype = Object.create(makeDancer.prototype);
makeResizeDancer.prototype.constructor = makeResizeDancer;

makeResizeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.addClass('resizeDancer'); 
  var index = Math.floor(Math.random() * (5 + 1));
  var colors = ['red', 'blue', 'black', 'grey', 'green'];
    //console.log(index);
  this.$node.css({'border': '10px solid ' + colors[index]});
};

