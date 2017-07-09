var direct = 'horizontal'
var dir1 = 'left'
var dir2 = 'right'

if (document.getElementById("body").clientWidth > 768) {
    direct = 'vertical'
    dir1 = 'up'
    dir2 = 'down'
}

window.scrollTo(0, 1) // hide scroll bar??

$("#images").dragend({
    minDragDistance: "40",
    direction: direct,
    keyboardNavigation: true,

    afterInitialize: function () {
        this.container.style.visibility = "visible";
    },
    onSwipeEnd: function () {
        var first = this.pages[0],
            last = this.pages[this.pages.length - 1]
        $(".prev, .next").removeClass("deactivated");

        $(".list-items li").removeClass("active-menu-element");
        $(".list-items li a").removeClass("active-menu-element");
        $(".list-items li").eq(this.page).addClass("active-menu-element")

        if (first === this.activeElement) {
            $(".prev").addClass("deactivated")
        };

        if (last === this.activeElement) {
            $(".next").addClass("deactivated")
        }
    }
})

$(".prev").click(function () {
    console.log(dir2)
    $("#images").dragend(dir2)
});

$(".next").click(function () {
    console.log(dir1)
    $("#images").dragend(dir1)
});

$(".list-items li").click(function () {
    console.log('clicked on menu JQ')
    var page = $(this).data("page")

    $("#images").dragend({
        scrollToPage: page
    });

    $(event.target).addClass("active-menu-element");

})
