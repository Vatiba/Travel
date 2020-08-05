$(".menu-icon-wrapper").click(function() {
    // $(".menu-icon").toggleClass("menu-icon-active");
    if ($(".menu-icon").hasClass("menu-icon-active")){
        $(".menu-icon").removeClass("menu-icon-active");
        $("#menu").addClass("no-show")
    }else{
        $(".menu-icon").addClass("menu-icon-active")
        $("#menu").removeClass("no-show")
    }
})
$(".border-bottom-header").click(function() {
    $(this).toggleClass("border-bottom-header-1", "border-bottom-header-1");
    var array = $('.header-location').children();
    for (let x = 0; x <= array.length; x++) {
        if (array.eq(x).hasClass("border-bottom-header-1")){
            array.eq(x).removeClass("border-bottom-header-1");
            array.eq(x).children(x).removeClass("text-magenta");
        }else{
            $(this).addClass("border-bottom-header-1");
            $(this).children(x).addClass("text-magenta");
        };
    }
})
$(".link-footer").click(function() {
    $(this).toggleClass("underline", "underline");
    var array = $('.li-footer').children();
    for (let x = 0; x <= array.length; x++) {
        if (array.eq(x).hasClass("underline")){
            array.eq(x).removeClass("underline");
        }else{
            $(this).addClass("underline");
        };
    }
})