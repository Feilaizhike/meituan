window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });


}
var header = document.getElementById("header_right"),
    headM = document.getElementById("header_more");

    header.addEventListener("touchstart", function () {
        if(headM.style.display == "none"){
            headM.style.display = "block";
        } else{
                headM.style.display = "none";
            }
    },false);