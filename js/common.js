$(document).ready(function(){
    
   // 해더 스크롤 전환
    $(window).scroll(function () {
        var scrollHeader = $(window).scrollTop()
        
        if (scrollHeader > 0) {
            $('#header').css('background-color','rgba(255,255,255,0.8)')
            $('.top_logo>a>img').attr('src', 'img/logo1_en.png')
            $('.gnb>ul>li>a').css('color', '#333')
            $('.util>img').attr('src', 'img/btn_menu_black.png')
        } else {
            $('#header').css('background-color','#transparent')
            $('.top_logo>a>img').attr('src', 'img/logo1_en.png')
            $('.gnb>ul>li>a').css('color', '#333')
            $('.util>img').attr('src', 'img/btn_menu.png')
        }
        
    })


    //내비게이션
    var subNavNum = 0

    $('.gnb>ul>li').each(function (index) {
        $(this).mouseenter(function () {
            $('.sub_nav').stop().slideDown()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeIn()
            subNavNum = index
        })        
        $(this).mouseleave(function () {
            $('.sub_nav').stop().slideUp()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeOut()
            subNavNum = index
        })
        
        $(this).focusin(function(){
            $('.sub_nav').stop().slideDown()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeIn()
            subNavNum = index
        })
         $(this).focusout(function () {
            $('.sub_nav').stop().slideUp()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeOut()
            subNavNum = index
        })

    })
    
    $('.sub_nav').mouseenter(function () {
        $(this).stop().slideDown()
        $('.sub_nav>.sub_nav_inner>.dep1').eq(subNavNum).stop().fadeIn()
    })    
    $('.sub_nav').mouseleave(function () {
        $(this).stop().slideUp()
        $('.sub_nav>.sub_nav_inner>.dep1').eq(subNavNum).stop().fadeOut()
    })
        
    $('.sub_nav').focusin(function () {
        $(this).stop().slideDown()
        $('.sub_nav>.sub_nav_inner>.dep1').eq(subNavNum).stop().fadeIn()
    })  
    $('.sub_nav').focusout(function () {
        $(this).stop().slideUp()
        $('.sub_nav>.sub_nav_inner>.dep1').eq(subNavNum).stop().fadeOut()
    })   
        
    $('.util').click(function(){
        $('.total_nav').stop().fadeIn()
    })
    
    
   // dep1에 있는 li에 마우스 올리면 dep2가 나온다.
    
    $('.dep1>li').each(function(index){
        $(this).mouseenter(function(){
            $(this).css('color','#15AD60')
            $('.dep2').eq(index).stop().fadeIn().parents('li').siblings().find('.dep2').fadeOut()
            
        })
        $(this).mouseleave(function(){
            $(this).css('color','#333')
            $('.dep2').stop().fadeOut()
        })
    })
    
    $('.dep2>li>a').mouseenter(function(){
        $(this).css('color','#15AD60')
    })
    $('.dep2>li>a').mouseleave(function(){
        $(this).css('color','#333')
    })
    
    
    //전체 메뉴
    $('#header .util').click(function(){
        $(this).css('display','none')
        $('.total_nav').css('display','block')
        $('#header').css('z-index',0)
    })
    $('.total_nav .close_nav').click(function(){
        $('#header .util').css('display','block')
        $('.total_nav').css('display','none')
        $('#header').css('z-index',999)
    })
    
    
    $('.total_nav>ul>li:first>ul>li:first').click(function(){
        $(this).find('ul').stop().slideDown().parent().siblings().find('ul').slideUp()
    })
    $('.total_nav>ul>li:first>ul>li:last').click(function(){
        $(this).find('ul').stop().slideDown().parent().siblings().find('ul').slideUp()
    })
    
    $('.total_nav li>a').mouseenter(function(){
        $(this).css('color','#15AD60')
    })
    $('.total_nav li>a').mouseleave(function(){
        $(this).css('color','#FFF')
    })
    
    
    
    
})