//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    startTime();
    loadPost();
    loadPosts();
});

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
})