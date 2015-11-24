var jacketFlag = 0;
                $('map').imageMapResize();
                $('fashmap').imageMapResize();
                function wikihover()
                 {
                   $("#kim").attr('src', 'images/wikioverlay.png');
                 }
                function youtubehover()
                 {
                   $("#kim").attr('src', 'images/youtubeoverlay.png');
                 }
                function newshover()
                 {
                   $("#kim").attr('src', 'images/newsoverlay.png');
                 }
                function twitterhover()
                 {
                   $("#kim").attr('src', 'images/twitteroverlay.png');
                 }
                function ighover()
                 {
                   $("#kim").attr('src', 'images/igoverlay.png');
                 }
                function defaultpic()
                 {
                   $("#kim").attr('src', 'images/Kim.png');
                 }
                function fashionmo(x){
            setTimeout(function()
                {
                    x.span="Hover to discover"
                },200);
                }
        function defaultPic()
       {
           jacketFlag = 0;
            $("#fash").attr('src', 'images/fashion.png');
       }
       function jacketTap()
       {
         if(typeof window.orientation !== 'undefined' && jacketFlag != 1)
         {
           $("#fash").attr('src', 'images/jacketOverlay.png');
           setJacketFlag();
         }
         else if (jacketFlag == 1)
         {
           jacketFlag = 0;
           document.getElementById("jacketClick").click();
           defaultPic();
         }

       }
       function jacketHover()
       {
         if(typeof window.orientation == 'undefined' && jacketFlag != 1)
         {
           $("#fash").attr('src', 'images/jacketOverlay.png');
           setJacketFlag();
         }
       }
        function setJacketFlag()
        {
          jacketFlag = 1;
        }

        function OpenInNewTab(url)
       {
          var win = window.open(url, '_blank');
          win.focus();
        }
