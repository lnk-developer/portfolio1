$(document).ready(function () {
    //javascript
    
    // 탑배너 재생 정지 버튼
    
        var video = document.querySelector('.banner_video')
        var stop = document.querySelector('.stop_btn')
        var play = document.querySelector('.play_btn')

        stop.onclick = function () {
            video.pause()
        }
        play.onclick = function () {
            video.play()
        }
    
    //jQuery
    $('#top_banner .play_btn').click(function(){
        $(this).find('img').attr('src','img/btn_play_on.png')
        $('#top_banner .stop_btn').find('img').attr('src','img/btn_stop_off.png')
    })
    $('#top_banner .stop_btn').click(function(){
        $(this).find('img').attr('src','img/btn_stop_on.png')
        $('#top_banner .play_btn').find('img').attr('src','img/btn_play_off.png')
    })
        
        
        
        
        
        

    // 해더 스크롤 전환
    $(window).scroll(function () {
        var scrollHeader = $(window).scrollTop()
        

        if (scrollHeader > 0) {
            $('#header').css('background-color', 'rgba(255,255,255,0.8)')
            $('.top_logo>a>img').attr('src', 'img/logo1_en.png')
            $('.gnb>ul>li>a').css('color', '#333')
            $('.util>img').attr('src', 'img/btn_menu_black.png')
        } else {
            $('#header').css('background-color', 'transparent')
            $('.top_logo>a>img').attr('src', 'img/logo1_en_white.png')
            $('.gnb>ul>li>a').css('color', '#FFF')
            $('.util>img').attr('src', 'img/btn_menu.png')
        }
        
    })


    //내비게이션
    var subNavNum = 0

    $('.gnb>ul>li').each(function (index) {
        $(this).mouseenter(function () {
            $('.sub_nav').stop().slideDown()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeIn()
            $(this).find('a').css('color','#15AD60')
            subNavNum = index
        })
        $(this).mouseleave(function () {
            $('.sub_nav').stop().slideUp()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeOut()
            $(this).find('a').css('color','#333')
            subNavNum = index
        })
        
        $(this).focusin(function(){
            $('.sub_nav').stop().slideDown()
            $('.sub_nav>.sub_nav_inner>.dep1').eq(index).stop().fadeIn()
            subNavNum = index
        })
        $(this).focusout(function(){
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
        
        $(this).focusin(function(){
            $(this).css('color','#15AD60')
            $('.dep2').eq(index).stop().fadeIn().parents('li').siblings().find('.dep2').fadeOut()
            
        })
        
    })
    
    $('.dep2>li>a').mouseenter(function(){
        $(this).css('color','#15AD60')
    })
    $('.dep2>li>a').mouseleave(function(){
        $(this).css('color','#333')
    })
    
    $('.dep2>li>a').focusin(function(){
        $(this).css('color','#15AD60')
    })
    $('.dep2>li>a').focusout(function(){
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
    
    
    
    //행복 실현 글로벌 건설 리더
    var f = true
    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();
        var globalTop = $('#global_leader').offset().top - 100
        var winWidth = $(window).width()

        if (scrollTop > globalTop-700) {
            //타이틀 애니메이션
            if (f && winWidth>1200) {
                $('#global_leader .contents_gl .content_title').stop().animate({
                    top: 0,
                    opacity: 1
                }, 700)

                // 텍스트 박스 애니메이션
                $('#global_leader .text_box').css('display', 'block')
                $('#global_leader .text_box1').stop().animate({
                    left: '-20px',
                    top: '230px'
                }, 700)
                $('#global_leader .text_box2').stop().animate({
                    left: '600px',
                    top: '40px'
                }, 700)
                $('#global_leader .text_box3').stop().animate({
                    left: '550px',
                    top: '450px'
                }, 700)

                // 텍스트 박스 p 태그 애니메이션
                $('.text_box>p').delay(1500).slideDown('slow')

                // 심볼 슬로건 애니메이션
                $('#global_leader .contents_gl .symbol_box .slogan').delay(700).animate({
                    top: 220,
                    opacity: 1
                }, 700)
                f = false
            }else if (f && winWidth<=1200) {
                
                $('#m_global_leader .contents_gl .content_title').stop().animate({
                    top: 0,
                    opacity: 1
                }, 700)
                
                // 텍스트 박스 애니메이션
                $('#m_global_leader .text_box').slideDown(600)               
                $('#m_global_leader .text_box2').slideDown(600)
                $('#m_global_leader .text_box3').slideDown(600)

                // 텍스트 박스 p 태그 애니메이션
                $('.text_box>p').delay(1500).slideDown(600)

                // 심볼 슬로건 애니메이션
                $('#m_global_leader .contents_gl .symbol_box .slogan').slideDown(600)
                f = false
            }else{
                return false
            }
        } 
           

    })
     $(window).resize(function(){
            var winWidth = $(window).width()
            if(winWidth>1200){
                $('#global_leader .contents_gl .content_title').stop().animate({
                    top: 0,
                    opacity: 1
                }, 700)

                // 텍스트 박스 애니메이션
                $('#global_leader .text_box').css('display', 'block')
                $('#global_leader .text_box1').stop().animate({
                    left: '-20px',
                    top: '230px'
                }, 700)
                $('#global_leader .text_box2').stop().animate({
                    left: '600px',
                    top: '40px'
                }, 700)
                $('#global_leader .text_box3').stop().animate({
                    left: '550px',
                    top: '450px'
                }, 700)

                // 텍스트 박스 p 태그 애니메이션
                $('.text_box>p').delay(1500).slideDown('slow')

                // 심볼 슬로건 애니메이션
                $('#global_leader .contents_gl .symbol_box .slogan').delay(700).animate({
                    top: 220,
                    opacity: 1
                }, 700)
                f = false
            }else if(winWidth>800 && winWidth<=1200){
                $('#m_global_leader .contents_gl .content_title').stop().animate({
                    top: 0,
                    opacity: 1
                }, 700)
                
                // 텍스트 박스 애니메이션
                $('#m_global_leader .text_box').slideDown(600)               
                $('#m_global_leader .text_box2').slideDown(600)
                $('#m_global_leader .text_box3').slideDown(600)

                // 텍스트 박스 p 태그 애니메이션
                $('.text_box>p').delay(1500).slideDown(600)

                // 심볼 슬로건 애니메이션
                $('#m_global_leader .contents_gl .symbol_box .slogan').slideDown(600)
                f = false
            }else{
                $('#m_global_leader').reload()
                return false
            }
            
        })
    
    
    
    // 배경 도형 애니메이션 - 이동
      function movTriBg() {
          $('.moving_bg1').animate({
              left: parseInt(Math.random() * $('#global_leader').width()-500) ,
              top: parseInt(Math.random() * $('#global_leader').height()-500) 
          }, 5000)
          $('.moving_bg2').animate({
              left: -parseInt(Math.random() * $('#global_leader').width()-500) ,
              top: -parseInt(Math.random() * $('#global_leader').height()-500) 
          }, 5000)
          $('.moving_bg3').animate({
              left: parseInt(Math.random() * $('#brand_news').width()-500) ,
              top: parseInt(Math.random() * $('#brand_news').height()-500) 
          }, 5000)
          $('.moving_bg4').animate({
              left: -parseInt(Math.random() * $('#brand_news').width()-500) ,
              top: -parseInt(Math.random() * $('#brand_news').height()-500) 
          }, 5000)
          $('.moving_bg5').animate({
              left: parseInt(Math.random() * $('#prom_video').width()-500) ,
              top: parseInt(Math.random() * $('#prom_video').height()-500) 
          }, 5000)
          $('.moving_bg6').animate({
              left: -parseInt(Math.random() * $('##prom_video').width()-500) ,
              top: -parseInt(Math.random() * $('##prom_video').height()-500) 
          }, 5000)
          
          
      }
      auto = setInterval(movTriBg, 5000)
    
    // 배경 도형 애니메이션 - 회전
    var angle = 3         
    function rotateBg(){
        angle+=2
        $('.moving_bg1').css('transform','rotate('+angle+'deg)')
        $('.moving_bg2').css('transform','rotate('+-angle+'deg)')
        $('.moving_bg3').css('transform','rotate('+angle+'deg)')
        $('.moving_bg4').css('transform','rotate('+-angle+'deg)')
        $('.moving_bg5').css('transform','rotate('+angle+'deg)')
        $('.moving_bg6').css('transform','rotate('+-angle+'deg)')
    }
    autoBg = setInterval(rotateBg,100)
    

    
    
    
    
    
    
    
    // 사업영역
    // 카테고리 버튼   
    
    
    $('#bussiness .r_btn').click(function(){
        var imgWidth = $(window).width()
        //배경 이미지 슬라이더
        if (imgWidth > 1600) {
            $('.slider_wrap_bs').animate({marginLeft: -1920}, 700)
            //lnb 바
            
            $('.ca_cons').stop().fadeIn().siblings('.ca_civil').fadeOut()
        }else{
            $('.slider_wrap_bs').animate({marginLeft: -imgWidth}, 700)
            //lnb 바
            
            $('.ca_cons').stop().fadeIn().siblings('.ca_civil').fadeOut()
        }
        
        
        
    })
    $('#bussiness .l_btn').click(function(){
        // 배경 이미지 슬라이더
        $('.slider_wrap_bs').animate({marginLeft:0},700)
        
        // lnb bar
        
        $('.ca_civil').stop().fadeIn().siblings('.ca_cons').fadeOut()
        
    })
    
    // lnb_bs 리스트
    $('.category>.ca_list>li').each(function(index){
        $(this).click(function(){
            var innerText = $('.slider_page>.img_box>li').eq(index).find('img').attr('alt')
            
            $(this).css('background-color','#148F50').siblings().css('background-color','transparent')
            $('.slider_page .img_box>li').eq(index).fadeIn().siblings().fadeOut()
            $('.btn_detail').html(innerText)
            $('.controls_bs>li').eq(index).addClass('select').siblings().removeClass()
                        
        })              
    })
    
    
    
    
    $(window).resize(function(){
        var winWidth = $(window).width()      
        
       
              $('.slider_wrap_bs').css('margin-left','0')          
             $('.ca_civil').stop().fadeIn().siblings('.ca_cons').fadeOut()
          
          
        
    })
    
    
    
    
    
    
    
    
    
    // 현대건설은 새로운 가치를 창조합니다. 
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()
        var brandTop = $('#brand_info').offset().top
        if (scrollTop > brandTop-800) {
            //객체등장 애니메이션
            $('.brand_wrap .slogan_brand').animate({top:0, opacity:1},700)
            $('.brand_wrap>p').delay(500).animate({top:0, opacity:1},700)
            
//            $('.brand_wrap .info_box>li').each(function(index){
//                $(this).eq(index).delay(500*index).animate({top:0, opacity:1},700)
//            })
            $('.brand_wrap .info_box>li').eq(0).animate({top:0, opacity:1},700)
            $('.brand_wrap .info_box>li').eq(1).delay(500).animate({top:0, opacity:1},700)
            $('.brand_wrap .info_box>li').eq(2).delay(1000).animate({top:0, opacity:1},700)
            $('.brand_wrap .info_box>li').eq(3).delay(1500).animate({top:0, opacity:1},700)
            
            
            // 아이콘 수치 올라가는 애니메이션    
            var score1 = 0
            var score2 = 0
            var score3 = 0
            var score4 = 0

            function score() {
                score1++
                score2++
                score3 += 10
                score4++
                if (score1 > 74) {
                    score1 = 74
                }
                if (score2 > 62) {
                    score2 = 62
                }
                if (score3 > 844) {
                    score3 = 844
                    clearInterval(auto)
                }
                if (score4 > 11) {
                    score4 = 11
                }

                $('.score1').html(score1)
                $('.score2').html(score2)
                $('.score3').html(score3)
                $('.score4').html(score4)
            }
            auto = setInterval(score, 50)
            
        }
    



    })
    
    
    
    
    
    //보도자료 
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var newTop = $('#news').offset().top
        if(scrollTop > newTop-800){
            $('.news_wrap .title_news').animate({top:0, opacity:1},700)
            
            
            $('.news_wrap .articles>li').eq(0).animate({top:0, opacity:1},700);
            $('.news_wrap .articles>li').eq(1).delay(300).animate({top:0, opacity:1},700);
            $('.news_wrap .articles>li').eq(2).delay(700).animate({top:0, opacity:1},700);
            $('.news_wrap .articles>li').eq(3).delay(1000).animate({top:0, opacity:1},700);
        }
    })
    
    
    //미드 배너
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var midBannerTop = $('#mid_banner').offset().top
        if(scrollTop > midBannerTop-800){
            $('#mid_banner .slogan_mid_banner>h2').animate({top:0, opacity:1},700)
        }
    })
    
    
    
    // 주요 프로젝트
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()
        var projectsTop = $('#projects').offset().top
        if(scrollTop>projectsTop-800){
            $('#projects .title_projects').animate({top:0, opacity:1},700)
        }
        
    })
    // skew
           var clickNum = 5 // 사진 숫자 -1
           var imgMove = -2120 // 사진 넓이 * 숫자
           var movImg = 320 // 사진 넓이
           $('.next_btn').click(function(){
               clickNum--              
               if(clickNum<0){
                  clickNum=0
                  return false
               }
               imgMove+= movImg
               $('.skew_img').animate({marginLeft:imgMove},300)
               $('.skew_img>li').eq(clickNum).css('transform', 'perspective(150px) rotateY(0deg) scale(1)').css('opacity','1').siblings().css('opacity','0')
               $('.skew_img>li').eq(clickNum).next().css('transform', 'perspective(150px) rotateY(5deg) scale(0.8)').css('z-index','1').css('opacity','0.2') 
               $('.skew_img>li').eq(clickNum).prev().css('transform', 'perspective(150px) rotateY(-5deg) scale(0.8)').css('z-index','1').css('opacity','0.2') 
               $('.skew_text>li').eq(clickNum).fadeIn('fast').siblings().fadeOut('fast')
               $('.bg_projects>li').eq(clickNum).fadeIn('fast').siblings().fadeOut('fast')
              
           }) 
            $('.prev_btn').click(function(){
               clickNum++               
                if(clickNum>5){
                    clickNum=5
                  return false
               }
               imgMove-= movImg
               $('.skew_img').animate({marginLeft:imgMove},300)
               $('.skew_img>li').eq(clickNum).css('transform', 'perspective(150px) rotateY(0deg) scale(1)').css('z-index','2').css('opacity','1').siblings().css('opacity','0')
               $('.skew_img>li').eq(clickNum).next().css('transform', 'perspective(150px) rotateY(5deg) scale(0.8)').css('z-index','1').css('opacity','0.2') 
               $('.skew_img>li').eq(clickNum).prev().css('transform', 'perspective(150px) rotateY(-5deg) scale(0.8)').css('z-index','1').css('opacity','0.2') 
               $('.skew_text>li').eq(clickNum).fadeIn('fast').siblings().fadeOut('fast')
               $('.bg_projects').eq(clickNum).fadeIn('fast').siblings().fadeOut('fast')
           })
    
    $('.next_btn').mouseenter(function(){
        $(this).find('.btn_tooltip').stop().fadeIn().css('color','#15AD60')
        $(this).find('img').attr('src','img/next_btn_on_long.png')
    })
    $('.next_btn').mouseleave(function(){
        $(this).find('.btn_tooltip').stop().fadeOut()
        $(this).find('img').attr('src','img/next_btn_off_long.png')
    })
    $('.prev_btn').mouseenter(function(){
        $(this).find('.btn_tooltip').stop().fadeIn().css('color','#15AD60')
        $(this).find('img').attr('src','img/prev_btn_on_long.png')
    })
    $('.prev_btn').mouseleave(function(){
        $(this).find('.btn_tooltip').stop().fadeOut()
        $(this).find('img').attr('src','img/prev_btn_off_long.png')
    })
    
    
    
    
    // 홍보영상
    
    $(window).scroll(function(){
        var scrollVideo = $(window).scrollTop()
        var promTop = $('#prom_video').offset().top
        
        if(scrollVideo > promTop-800){
            $('#prom_video .video_wrap .title_prom').animate({top:0, opacity:1},700)
        }
    })
    
    
    // 바텀 배너
    $(window).scroll(function(){
         var scrollTop = $(window).scrollTop()
         var bBannerTop = $('#bottom_banner').offset().top
         
         if(scrollTop > bBannerTop - 800){
             $('#bottom_banner .slogan_bottom_banner>h2').animate({top:0, opacity:1},700)
         }
    })
    
    //풋터
    // 패밀리사이트
    $('.bot_lnb>.last').mouseenter(function(){
        $('.footer_wrap .family').css('right','300px').css('display','block')
    })
    $('.bot_lnb>.last').mouseleave(function(){
        $('.footer_wrap .family').css('right','500px').css('display','none')
    })
    $('.footer_wrap .family').mouseenter(function(){
        $(this).css('right','300px').css('display','block')
    })
    $('.footer_wrap .family').mouseleave(function(){
        $(this).css('right','500px').css('display','none')
    })









});