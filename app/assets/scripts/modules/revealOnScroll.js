import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
  // constructor code runs as soon as the page loads.
  constructor(elements, offset){
    this.itemsToReveal = elements;
    this.hideInitially();
    this.offsetPercentage =  offset;
    this.createWaypoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(){
    // that point to the instance of our class allowing
    // that.offsetPercentage to be this.offsetPercentagewhich is the offset
    // value inserted as a parameter when the revealOnScroll class is called.
    var that = this;
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element:currentItem,
        handler:function(){
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
