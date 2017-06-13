(function() {
  var imagePreload, imageToLoad;

  $(document).ready(function() {
    imagePreload();
  });

  imagePreload = function() {
    var i, imageLoaded, images, src, _i, _len, _results;
    imageLoaded = 0;
    images = [];
    _results = [];
    for (i = _i = 0, _len = imageToLoad.length; _i < _len; i = ++_i) {
      src = imageToLoad[i];
      images[i] = new Image();
      images[i].src = src;
      images[i].style.display = 'hidden';
      _results.push(images[i].onload = function() {
        var percentage;
        imageLoaded++;
        percentage = parseInt(100 * imageLoaded / 89);
            $('#txtLoading').html("" + percentage + " %");
              if(percentage == 100){
                $("#divLoading").delay(1000).fadeOut();
              }
      });
    }
    return _results;
  };

  imageToLoad = ["img/cloud-a.png", "img/cloud-b.png", "img/mountain.png", "img/school.png", "img/sidewalk.png", "img/tree.png", "img/underbrush.png", "img/G_Run1.png", "img/G_Run2.png", "img/G_Run3.png", "img/G_Run4.png", "img/G_Run5.png", "img/G_Run6.png", "img/G_Run7.png", "img/G_Run8.png", "img/C_Run1.png", "img/C_Run2.png", "img/C_Run3.png", "img/C_Run4.png", "img/C_Run5.png", "img/C_Run6.png", "img/C_Run7.png", "img/C_Run8.png", "img/C_Runleft1.png", "img/C_Runleft2.png", "img/C_Runleft3.png", "img/C_Runleft4.png", "img/C_Runleft5.png", "img/C_Runleft6.png", "img/C_Runleft7.png", "img/C_Runleft8.png", "img/G_Front.png", "img/G_Left.png", "img/G_Right.png", "img/C_Front.png", "img/C_Left.png", "img/C_Left2.png", "img/C_Left3.png", "img/C_Right.png", "img/C_Right2.png", "img/C_Right3.png", "img/G_Left2.png", "img/G_Left3.png", "img/G_Right2.png", "img/G_Right3.png", "img/C_Screen1.png", "img/C_Screen2.png", "img/C_Screen3.png", "img/C_Screen4.png", "img/C_Screen5.png", "img/C_Screen6.png", "img/C_Screen7.png", "img/C_Screen8.png", "img/C_Screen9.png", "img/C_Screen10.png", "img/G_Screen1.png", "img/G_Screen2.png", "img/G_Screen3.png", "img/G_Screen4.png", "img/G_Screen5.png", "img/G_Screen6.png", "img/G_Screen7.png", "img/G_Screen8.png", "img/G_Screen9.png", "img/G_Screen10.png", "img/G_Hand1.png", "img/G_Hand2.png", "img/G_Hand3.png", "img/G_Hand4.png", "img/C_Hand1.png", "img/C_Hand2.png", "img/C_Hand3.png", "img/C_Hand4.png", "img/All1.png", "img/All2.png", "img/All3.png", "img/All4.png", "img/All5.png", "img/All6.png", "img/C_Note.png", "img/G_Note.png", "img/Cloud.png", "img/Enclosure.png", "img/Playground.png", "img/PlaygroundTree.png", "img/Stage.png", "img/Frame.png", "img/ScreenTop.png", "img/ScreenBottom.png"];

}).call(this);