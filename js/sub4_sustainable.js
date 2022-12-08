$(window).ready(function(){
    $('#top_banner>.buss_title').fadeIn(500)
    $('#top_banner>.top_banner_text').fadeIn(500)
    
    $('#purpose .wrap_purpose>h2').animate({top:0, opacity:1},600)
    $('#purpose .wrap_purpose>h3').delay(300).animate({top:0, opacity:1},600)
    
    $('#purpose .bg_connect').css('transform','scale(1)')
    $('#purpose .item_box> .slogan_purpose').slideDown()
    
    $('#purpose .item_box>.item1').animate({left:'50%', opacity:1},600)
    $('#purpose .item_box>.item2').animate({bottom:0, opacity:1},600)
    $('#purpose .item_box>.item3').animate({right:150, opacity:1},600)
    
    $('#purpose .item>h4').delay(600).slideDown()
    $('#purpose .item>p').delay(600).slideDown()
    
    
    //모바일 목표==========================
        
    $('#m_purpose .wrap_purpose>h2').animate({top:0, opacity:1},600)
    $('#m_purpose .wrap_purpose>h3').delay(300).animate({top:0, opacity:1},600)
    
    $('#m_purpose .bg_connect').css('transform','scale(1)')
    $('#m_purpose .item_box> .slogan_purpose').slideDown()
    
    $('#m_purpose .item_box>.item').slideDown(500)    
   
    
    $('#m_purpose .item>h4').delay(600).slideDown()
    $('#m_purpose .item>p').delay(600).slideDown()
    
    
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()
        if(scrollTop>500){
            $('.wrap_rule>h3').animate({top:0, opacity:1},600)
            
            $('.wrap_rule>ul>li:first-child>ul>.sub_title').delay(300).slideDown(600)
            $('.wrap_rule>ul>li:first-child>ul>.sub_text').delay(400).show(600)
            $('.wrap_rule>ul>li:nth-child(2)>ul>.sub_title').delay(600).slideDown(600)
            $('.wrap_rule>ul>li:nth-child(2)>ul>.sub_text').delay(700).show(600)
            $('.wrap_rule>ul>li:last-child>ul>.sub_title').delay(900).slideDown(600)
            $('.wrap_rule>ul>li:last-child>ul>.sub_text').delay(1000).show(600)
            
        }        
        
        if(scrollTop>900){            
            $('.strategy_wrap>ul>.sub_title>h2').show(400)            
            $('.strategy_wrap>ul>li').slideDown(600)            
        }
        
        
        if(scrollTop>1200){
            $('#sustain>h2').animate({top:0, opacity:1},600)
            $('#sustain>.mid_banner>p').delay(600).fadeIn(600)
        }
        
        if(scrollTop>1600){
            $('.sus_notable>li').eq(0).animate({left:0, opacity:1},600)
            $('.sus_notable>li').eq(1).delay(300).animate({left:0, opacity:1},600)
            $('.sus_notable>li').eq(2).delay(600).animate({left:0, opacity:1},600)
            $('.sus_notable>li').eq(3).delay(900).animate({left:0, opacity:1},600)
            
            $('.sus_table>li').first().delay(1200).animate({top:0, opacity:1},600)
            $('.sus_table>li').last().delay(1500).animate({top:0, opacity:1},600)
        }
        
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})