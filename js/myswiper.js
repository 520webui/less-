
/*var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    loop:true,
    mousewheelControl : true,
    keyboardControl : true,
    paginationClickable :true,

    onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },

    // 如果需要分页器
    pagination: '.swiper-pagination',

})*/

var mySwiper2 = new Swiper('.first', {
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    preventLinksPropagation : false,

    coverflow: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: true
    }
});

var mySwiper3 = new Swiper('.bannergo', {
    parallax : true,
    autoplay: 2000,//可选选项，自动滑动
    autoplayDisableOnInteraction : false,//点击后可以继续播放
    //direction : 'vertical'//banner上下滚动
    //speed:4000,//控制切换时间
    loop : true,//轮播图反向设置结合setInterval("mySwiper.slidePrev()", 2000);用
    //autoplayStopOnLast : true,//切换到最后一个会停止属性
    grabCursor : true,//出现小手
    simulateTouch: false,
    paginationClickable: true,
   /* pagination: '.swiper-pagination',// 如果需要分页器*/
    pagination: '#indexHDSwiperPagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'

});


//setInterval("mySwiper.slidePrev()", 2000);//轮播图反向设置结合 loop : true,;用


