var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.addClass('resizeDancer'); 
  var index = Math.floor(Math.random() * (800));
  
 // console.log(this.$node);
  //this.$node.addClass('.bigger');
  this.$node.css({'left': index + 'px', 'border-radius': '100px', 'height': '400px', 'width': '370px'});

  var type = Math.floor(Math.random() * (2));
  if(type === 1){
    this.$node.css({'background-image': 'url(./carlton.gif)'});
  }else{
    this.$node.css({'background-image': 'url(./giphy.gif)'});
  }
  this.$node.css({'border': '0px solid black', 'z-index': '-1', 'position': 'absolute'});
  $(this.$node).attr('id', 'draggable');
  //this.$node.css()

  //console.log(this);
  this.$node.hover(function(event) {
    console.log(this);
    $(this).css({'display': 'none'});
    $(this).hide(1000);
  });
};

