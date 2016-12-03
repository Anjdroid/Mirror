document.addEventListener("DOMContentLoaded", function(event) { 
      var d = document.getElementById("random");
      if(hasClass(d, 'rand')) {
          d.className = d.className.replace(/\brand\b/,'');
          fadeIn(d);
      }

      var gumb1 = document.getElementById("info");
      var gumb2 = document.getElementById("makeup");
      var gumb3 = document.getElementById("clothing");
      var gumb4 = document.getElementById("back");
      var gumb5 = document.getElementById("try");
      gumb1.onclick = function() {
        document.getElementById("vreme").style.display = "inline-block";
        document.getElementById("nazaj").style.display = "inline-block";
        document.getElementById("random").style.display = "none";
        document.getElementById("gumbi").style.display = "none";          
      };
      gumb2.onclick = function() {
          document.getElementById("movie").style.display = "inline-block";
          document.getElementById("nazaj").style.display = "inline-block";
          document.getElementById("random").style.display = "none";
          document.getElementById("gumbi").style.display = "none";
      };
      gumb3.onclick = function() {
          document.getElementById("slika1").style.display = "inline-block";
          document.getElementById("nazaj").style.display = "inline-block";
          document.getElementById("clothes").style.display = "inline-block";
          document.getElementById("random").style.display = "none";
          document.getElementById("gumbi").style.display = "none";
      };
      gumb4.onclick = function() {
          document.getElementById("movie").style.display = "none";
          document.getElementById("vreme").style.display = "none";
          document.getElementById("nazaj").style.display = "none";
          document.getElementById("random").style.display = "inline-block";
          document.getElementById("gumbi").style.display = "flex";
          document.getElementById("clothes").style.display = "none";
          document.getElementById("slika1").style.display = "none";
          document.getElementById("slika2").style.display = "none";
      };
      document.getElementById("drop").onchange = function() {
          var val = document.getElementById("drop").options[document.getElementById("drop").selectedIndex].value;
          if (val == 1) {
            document.getElementById("slika1").style.display = "none";
            document.getElementById("slika2").style.display = "inline-block";
          }
          else if (val == 0) {
            document.getElementById("slika2").style.display = "none";
            document.getElementById("slika1").style.display = "inline-block";
          }
      };
});

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function fadeOut(el){
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}
function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}