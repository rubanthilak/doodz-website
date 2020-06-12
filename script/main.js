sal();

if(!hasTouch())
{
  $(document).ready(function(){
    $('#wrapper').scroll(function(){
      var light_pos = $('#home').offset().top;
      var light_height = $('#home').height();
      var menu_pos = $('.menu-bar').offset().top;  
  
      if(menu_pos < (light_pos + light_height)) {
          $('.bar1').addClass('bar-black');
          $('.bar1').removeClass('bar-white');
          $('.bar2').addClass('bar-black');
          $('.bar2').removeClass('bar-white');
      }
      else {
          $('.bar1').removeClass('bar-black');
          $('.bar1').addClass('bar-white');
          $('.bar2').removeClass('bar-black');
          $('.bar2').addClass('bar-white');
      }  
    })
  })
}



function toggleMenu() {
  document.getElementById("menu-icon").classList.toggle("change");
  var id = document.getElementById("sidenav");
  var oid = document.getElementById("op-layer");
  if(id.style.width == "75%")
  {
    id.style.width = "0vh";
    oid.style.display = "none";
    if(findBackgroundColor() && !hasTouch())
    {
      $('.bar1').removeClass('bar-black');
      $('.bar1').addClass('bar-white');
      $('.bar2').removeClass('bar-black');
      $('.bar2').addClass('bar-white');
    }
  }
  else
  {
    id.style.width = "75%";
    oid.style.display = "block";
    $('.bar1').addClass('bar-black');
    $('.bar1').removeClass('bar-white');
    $('.bar2').addClass('bar-black');
    $('.bar2').removeClass('bar-white');
  }
}

function findBackgroundColor() {
    var light_pos = $('#home').offset().top;
    var light_height = $('#home').height();
    var menu_pos = $('.menu-bar').offset().top;  
    if(menu_pos < (light_pos + light_height)) {
        return false;
    }
    else {
        return true;
    }  
}


function hasTouch() {
  return 'ontouchstart' in document.documentElement
         || navigator.maxTouchPoints > 0
         || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets when using mobile
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}