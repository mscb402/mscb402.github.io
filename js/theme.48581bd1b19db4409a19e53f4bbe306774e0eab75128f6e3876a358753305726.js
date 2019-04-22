$(document).ready(function() {
    $(".toggler").click(function () {
        $("nav").slideToggle();
        $("#search").autocomplete("val", "");
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if ( ! $("nav").hasClass('permanentTopNav') )
                $("nav").slideUp();
            $("#search").autocomplete("val", "");
        }
        else if (e.keyCode === 83){
            if ( ! $("nav").hasClass('permanentTopNav') )
                $("nav").slideDown();
            $("#search").focus();
        }
    })

    $('.flexslider').flexslider({
       animation: "slide",
       prevText: "",
       nextText: "",
       pauseOnHover: true,
    });
});

hljs.initHighlightingOnLoad();


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7db76b1077fe3474e7635edaaabbf236";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


