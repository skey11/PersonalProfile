//swiper插件 

 var mySwiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
    
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    var silde=document.querySelectorAll(".swiper-slide");
	var sildeLength=silde.length;//得到一下总共有多少页
    var nowPost=mySwiper.activeIndex+1;//获得当前页是第几页
    var arr1=document.querySelector(".arr1");
    if(nowPost==sildeLength)
    {
    	arr1.setAttribute("style","display:none");
    }
    else
    {
    	arr1.setAttribute("style","display:block");
    }
  } ,
  direction: 'vertical'//定义方向，vertical表示垂直方向，默认是水平方向
  })            

//滑屏箭头


