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

/* 头部更多添加触碰事件 弹出二级菜单*/
var header = document.getElementById("header_right"),
    headM = document.getElementById("header_more");

    header.addEventListener("touchstart", function () {
        if(headM.style.display == "none"){
            headM.style.display = "block";
        } else{
                headM.style.display = "none";
            }
    },false);

/* 底部菜单触碰事件*/
/*
var aList =document.getElementById('bottom_menu_li').getElementsByTagName('li');
var aImg =document.getElementById('bottom_menu_li').getElementsByTagName('img');
console.log(aImg)
for( var i=0; i < aList.length; i++){
    aList[i].index=i;
    aList[i].onmousedown = function(){
        var nIndex=this.index+1;

       // aImg[this.index].src=" 'image/footer0'+this.index+1+'.1png' "
        var myNSrc ='image/footer0'+nIndex+'.1.png';
        var mySrc = 'image/footer0'+nIndex+'.png';
        if(aImg[nIndex-1].src==myNSrc){
            aImg[nIndex-1].src=mySrc;
        }else{
           aImg[nIndex-1].src = myNSrc;
        }

    }
}*/



