$("document").ready(function(){
  $("span.benek").each(function(){
    var t=$(this);
    var tid=t.attr('id');
    t.css('textIndent','-9999px');
    t.hover(function(){
      $("div#fader img").attr('src',tid+'.png');
      $("div#fader")
      .hide()
      .fadeIn(300)
        .removeClass('altairf')
        .removeClass('lyraf')
        .removeClass('northamericaf')
        .removeClass('doubleclusterf')
        .removeClass('andromedaf')
        .removeClass('ic1396f')
        .addClass(tid+'f');
      t.css('textIndent','0');
    },
    function(){
        t.css('textIndent','-9999px');
        $("div#fader").fadeOut(200);
    });
  });
});
