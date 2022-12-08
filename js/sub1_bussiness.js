$(document).ready(function(){

    
    
// 우->좌 슬라이더
    
    //버튼 색 전환
//    $('.contents .next_btn').mousedown(function(){
//        $('.next_btn>img').attr('src','img/btn_next_on.png')
//    })
//    $('.contents .next_btn').mouseup(function(){
//        $('.next_btn>img').attr('src','img/btn_next_off.png')
//    })
//    $('.contents .prev_btn').mousedown(function(){
//        $('.prev_btn>img').attr('src','img/btn_prev_on.png')
//    })
//    $('.contents .prev_btn').mouseup(function(){
//        $('.prev_btn>img').attr('src','img/btn_prev_off.png')
//    })
    
    $('.contents').each(function(index){
        $(this).find('.next_btn').mousedown(function(){
            $(this).find('img').attr('src','img/btn_next_on.png')
        })
        $(this).find('.next_btn').mouseup(function(){
            $(this).find('img').attr('src','img/btn_next_off.png')
        })
        $(this).find('.prev_btn').mousedown(function(){
            $(this).find('img').attr('src','img/btn_prev_on.png')
        })
        $(this).find('.prev_btn').mouseup(function(){
            $(this).find('img').attr('src','img/btn_prev_off.png')
        })
        
        
    })
    
    //이미지 슬라이더
    
    // 해양 항만 ===========================================
    $('#reclamation .next_btn').click(function(){
        $('#reclamation .img_slider>ul>li').first().stop().animate({marginLeft:-360},300,function(){
            $('#reclamation .img_slider>ul>li').first().appendTo('#reclamation .img_slider>ul')
            $('#reclamation .img_slider>ul>li').last().css('margin','10px 10px')
        })
        $('#reclamation .img_slider>ul>li').eq(1).find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()        
    })
    
    $('#reclamation .prev_btn').click(function(){
        $('#reclamation .img_slider>ul>li').first().stop().animate({marginLeft:360},300,function(){
            $('#reclamation .img_slider>ul>li').last().prependTo('#reclamation .img_slider>ul')
            $('#reclamation .img_slider>ul>li').eq(1).css('margin','10px 10px')
        })
        $('#reclamation .img_slider>ul>li').last().find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()
    })
    
    
    
    // ===========================================
    $('#rail .next_btn').click(function(){
        $('#rail .img_slider>ul>li').first().stop().animate({marginLeft:-360},300,function(){
            $('#rail .img_slider>ul>li').first().appendTo('#rail .img_slider>ul')
            $('#rail .img_slider>ul>li').last().css('margin','10px 10px')
        })
        $('#rail .img_slider>ul>li').eq(1).find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()        
    })
    
    $('#rail .prev_btn').click(function(){
        $('#rail .img_slider>ul>li').first().stop().animate({marginLeft:360},300,function(){
            $('#rail .img_slider>ul>li').last().prependTo('#rail .img_slider>ul')
            $('#rail .img_slider>ul>li').eq(1).css('margin','10px 10px')
        })
        $('#rail .img_slider>ul>li').last().find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()
    })
    
    
    
    // ===========================================
    $('#bridge .next_btn').click(function(){
        $('#bridge .img_slider>ul>li').first().stop().animate({marginLeft:-360},300,function(){
            $('#bridge .img_slider>ul>li').first().appendTo('#bridge .img_slider>ul')
            $('#bridge .img_slider>ul>li').last().css('margin','10px 10px')
        })
        $('#bridge .img_slider>ul>li').eq(1).find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()        
    })
    
    $('#bridge .prev_btn').click(function(){
        $('#bridge .img_slider>ul>li').first().stop().animate({marginLeft:360},300,function(){
            $('#bridge .img_slider>ul>li').last().prependTo('#bridge .img_slider>ul')
            $('#bridge .img_slider>ul>li').eq(1).css('margin','10px 10px')
        })
        $('#bridge .img_slider>ul>li').last().find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()
    })
    
    
    
    // ===========================================
    $('#water .next_btn').click(function(){
        $('#water .img_slider>ul>li').first().stop().animate({marginLeft:-360},300,function(){
            $('#water .img_slider>ul>li').first().appendTo('#water .img_slider>ul')
            $('#water .img_slider>ul>li').last().css('margin','10px 10px')
        })
        $('#water .img_slider>ul>li').eq(1).find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()        
    })
    
    $('#water .prev_btn').click(function(){
        $('#water .img_slider>ul>li').first().stop().animate({marginLeft:360},300,function(){
            $('#water .img_slider>ul>li').last().prependTo('#water .img_slider>ul')
            $('#water .img_slider>ul>li').eq(1).css('margin','10px 10px')
        })
        $('#water .img_slider>ul>li').last().find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()
    })
    
    
    
    // ===========================================
    $('#basement .next_btn').click(function(){
        $('#basement .img_slider>ul>li').first().stop().animate({marginLeft:-360},300,function(){
            $('#basement .img_slider>ul>li').first().appendTo('#basement .img_slider>ul')
            $('#basement .img_slider>ul>li').last().css('margin','10px 10px')
        })
        $('#basement .img_slider>ul>li').eq(1).find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()        
    })
    
    $('#basement .prev_btn').click(function(){
        $('#basement .img_slider>ul>li').first().stop().animate({marginLeft:360},300,function(){
            $('#basement .img_slider>ul>li').last().prependTo('#basement .img_slider>ul')
            $('#basement .img_slider>ul>li').eq(1).css('margin','10px 10px')
        })
        $('#basement .img_slider>ul>li').last().find('p').addClass('selected_text').parent('li').siblings().find('p').removeClass()
    })
    
    
    
    
    
    
 
   
    
    
    
    $('#top_banner>.buss_title').fadeIn(500)
    $('#top_banner>.top_banner_text').fadeIn(500)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})