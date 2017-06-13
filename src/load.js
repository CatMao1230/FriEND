$(function(){
    var cache = [];
    var isPhone = false;

    $(document).ready(function() {
        if (jQuery.browser.mobile) {
          $('#txtLoading').html("請用電腦觀看。");
            isPhone = true;
        }
    });
    
    $.preLoadImages = function() {
        if(!isPhone){
        var loading = 0;
        var args_len = arguments.length;
        for (var i = args_len; i--;) {
          var cacheImage = document.createElement('img');
          cacheImage.src = arguments[i];
          cache.push(cacheImage);
          cache[cache.length-1].onload = function(){
              loading++;
              console.log(loading);
              var percentage;
              percentage = parseInt(100 * loading / 89);
            $('#txtLoading').html("" + percentage + " %");
              if(percentage == 100){
                $("#divLoading").delay(1000).fadeOut();
              }
          };
        
        }
        }
    }
    
    var C_Count = 1;
    var G_Count = 1;
    
    function C_Running(){
        $("#CharlesRun").css("background-image","url( img/C_Run" + C_Count + ".png )" );
        $("#CharlesRunLeft").css("background-image","url( img/C_Runleft" + C_Count + ".png )" );
        C_Count++;
        if(C_Count > 8){
            C_Count = 1;
        }
    }
    
    function G_Running(){
        $("#GarveyRun").css("background-image","url( img/G_Run" + G_Count + ".png )" );
        G_Count++;
        if(G_Count > 8){
            G_Count = 1;
        }
    }
    
    setInterval(C_Running, 200);
    setInterval(G_Running, 200);
    
    var isShowed = false;
    $(window).scroll(function () {
        if(skrollr_obj.getScrollTop()>=15000 && !isShowed){
            isShowed = true;
            $(".element").typed({
                strings: ["Do you think the power of a friendship is strong enough to save a man?"],
                typeSpeed: 0
            });
        }
    });
    
    jQuery.preLoadImages("img/G_Hand1.png", "img/G_Hand2.png", "img/G_Hand3.png", "img/G_Hand4.png", "img/C_Hand1.png", "img/C_Hand2.png", "img/C_Hand3.png", "img/C_Hand4.png", "img/All1.png", "img/All2.png", "img/All3.png", "img/All4.png", "img/All5.png", "img/All6.png", "img/C_Note.png", "img/G_Note.png", "img/Cloud.png", "img/Enclosure.png", "img/Playground.png", "img/PlaygroundTree.png", "img/Stage.png", "img/Frame.png", "img/ScreenTop.png", "img/ScreenBottom.png", "img/cloud-a.png", "img/cloud-b.png", "img/mountain.png", "img/school.png", "img/sidewalk.png", "img/tree.png", "img/underbrush.png", "img/C_Screen1.png", "img/C_Screen2.png", "img/C_Screen3.png", "img/C_Screen4.png", "img/C_Screen5.png", "img/C_Screen6.png", "img/C_Screen7.png", "img/C_Screen8.png", "img/C_Screen9.png", "img/C_Screen10.png", "img/G_Screen1.png", "img/G_Screen2.png", "img/G_Screen3.png", "img/G_Screen4.png", "img/G_Screen5.png", "img/G_Screen6.png", "img/G_Screen7.png", "img/G_Screen8.png", "img/G_Screen9.png", "img/G_Screen10.png", "img/C_Runleft1.png", "img/C_Runleft2.png", "img/C_Runleft3.png", "img/C_Runleft4.png", "img/C_Runleft5.png", "img/C_Runleft6.png", "img/C_Runleft7.png", "img/C_Runleft8.png", "img/G_Left2.png", "img/G_Left3.png", "img/G_Right2.png", "img/G_Right3.png", "img/G_Front.png", "img/G_Left.png", "img/G_Right.png", "img/C_Front.png", "img/C_Left.png", "img/C_Left2.png", "img/C_Left3.png", "img/C_Right.png", "img/C_Right2.png", "img/C_Right3.png", "img/G_Run1.png", "img/G_Run2.png", "img/G_Run3.png", "img/G_Run4.png", "img/G_Run5.png", "img/G_Run6.png", "img/G_Run7.png", "img/G_Run8.png", "img/C_Run1.png", "img/C_Run2.png", "img/C_Run3.png", "img/C_Run4.png", "img/C_Run5.png", "img/C_Run6.png", "img/C_Run7.png", "img/C_Run8.png");
});