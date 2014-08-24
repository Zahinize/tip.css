/*
 * tip.jquery.js - JQuery plugin of tip.css
 * @Author Zahin Omar Alwa - (https://twitter.com/zahinize)
 * MIT Licence
*/
(function ($) {
  $.fn.tip = function (options) {
  
    var tipConfig = $.extend({
      classes: "tip tip--top",
      text: "A basic tip"
    }, options);
	
    return this.each(function () {
      var $elem = $(this);
	  
      $elem.attr("data-tip", tipConfig.text);
	    $elem.addClass(tipConfig.classes);
    });
	
  };
  
})(jQuery);
