$(document).ready(function(){
    
    $('#top_banner>.buss_title').fadeIn(500)
    $('#top_banner>.top_banner_text').fadeIn(500)
        
    $('.wrap_finance>h2').animate({top:0, opacity:1},300)
    
    $('.graph_wrap>li>h3').delay(300).animate({top:0, opacity:1},300)
    
    
    $('.graph_wrap>.graph1>ul>li>.stick').eq(0).delay(600).animate({height: '70%'},700)
    $('.graph_wrap>.graph1>ul>li>.index').eq(0).delay(600).animate({height: '78%'},700)
    $('.graph_wrap>.graph1>ul>li>.stick').eq(1).delay(600).animate({height: '65%'},700)
    $('.graph_wrap>.graph1>ul>li>.index').eq(1).delay(600).animate({height: '73%'},700)
    $('.graph_wrap>.graph1>ul>li>.stick').eq(2).delay(600).animate({height: '75%'},700)
    $('.graph_wrap>.graph1>ul>li>.index').eq(2).delay(600).animate({height: '83%'},700)
    
    $('.graph_wrap>.graph2>ul>li>.stick').eq(0).delay(600).animate({height: '75%'},700)
    $('.graph_wrap>.graph2>ul>li>.index').eq(0).delay(600).animate({height: '83%'},700)
    $('.graph_wrap>.graph2>ul>li>.stick').eq(1).delay(600).animate({height: '65%'},700)
    $('.graph_wrap>.graph2>ul>li>.index').eq(1).delay(600).animate({height: '73%'},700)
    $('.graph_wrap>.graph2>ul>li>.stick').eq(2).delay(600).animate({height: '70%'},700)
    $('.graph_wrap>.graph2>ul>li>.index').eq(2).delay(600).animate({height: '78%'},700)
    
    $('.graph_wrap>.graph3>ul>li>.stick').eq(0).delay(600).animate({height: '75%'},700)
    $('.graph_wrap>.graph3>ul>li>.index').eq(0).delay(600).animate({height: '83%'},700)
    $('.graph_wrap>.graph3>ul>li>.stick').eq(1).delay(600).animate({height: '65%'},700)
    $('.graph_wrap>.graph3>ul>li>.index').eq(1).delay(600).animate({height: '73%'},700)
    $('.graph_wrap>.graph3>ul>li>.stick').eq(2).delay(600).animate({height: '70%'},700)
    $('.graph_wrap>.graph3>ul>li>.index').eq(2).delay(600).animate({height: '78%'},700)
    
    
    
    var graph1 = 8000
    var graph2 = 8000
    var graph3 = 8279
    var graph4 = 879
    var graph5 = 800
    var graph6 = 826
    var graph7 = 586
    var graph8 = 400
    var graph9 = 410
    
    
    function graphNum(){
        graph1 += 200
        graph2 += 200
        graph3 += 200
        graph4 += 120
        graph5 += 20
        graph6 += 20
        graph7 += 10
        graph8 += 10
        graph9 += 10
         
        if(graph1>16887){
            graph1 = 16887
        }
        if(graph2>16731){
            graph2 = 16731
        }
        if(graph3>17279){
            graph3 = 17279
        }
        if(graph4>1779){
            graph4 = 1779
        }
        if(graph5>1661){
            graph5 = 1661
        }
        if(graph6>1726){
            graph6 = 1726
        }
        if(graph7>986){
            graph7 = 986
        }
        if(graph8>840){
            graph8 = 840
            clearInterval(autoGraph)
        }
        if(graph9>860){
            graph9 = 860
        }
        
        $('.graph1>ul>li:first-child').find('.index').html(graph1)
        $('.graph1>ul>li:nth-child(2)').find('.index').html(graph2)
        $('.graph1>ul>li:last-child').find('.index').html(graph3)
        
        $('.graph2>ul>li:first-child').find('.index').html(graph4)
        $('.graph2>ul>li:nth-child(2)').find('.index').html(graph5)
        $('.graph2>ul>li:last-child').find('.index').html(graph6)
        
        $('.graph3>ul>li:first-child').find('.index').html(graph7)
        $('.graph3>ul>li:nth-child(2)').find('.index').html(graph8)
        $('.graph3>ul>li:last-child').find('.index').html(graph9)
        
        
    }
    autoGraph = setInterval(graphNum,40)
    
    
    var graph10 = 16000
    var graph11 = 15000
    var graph12 = 19000
    var graph13 = 61000
    var graph14 = 50000
    var graph15 = 50329
    
    function graphNum2(){
        graph10 += 100 
        graph11 += 100
        graph12 += 100
        graph13 += 100
        graph14 += 100
        graph15 += 100
        
        if(graph10>21713){
           graph10 = 21713
        }
        if(graph11>19034){
           graph11 = 19034
        }
        if(graph12>24252){
           graph12 = 24252
        }
        if(graph13>66758){
           graph13 = 66758
        }
        if(graph14>55806){
           graph14 = 55806
           clearInterval(autoGraph2)
        }
        if(graph15>56329){
           graph15 = 56329
        }
        
        $('.graph4>ul>li:first-child').find('.index').html(graph10)
        $('.graph4>ul>li:nth-child(2)').find('.index').html(graph11)
        $('.graph4>ul>li:last-child').find('.index').html(graph12)
        
        $('.graph5>ul>li:first-child').find('.index').html(graph13)
        $('.graph5>ul>li:nth-child(2)').find('.index').html(graph14)
        $('.graph5>ul>li:last-child').find('.index').html(graph15)
    }
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()
        if(scrollTop>800){
            $('#order>.wrap_order>h2').animate({top:0, opacity:1},300)
        } 
        
        if(scrollTop>900){
            $('.graph4>ul>li:first-child').find('.stick').animate({height:'80%'},600)
            $('.graph4>ul>li:first-child').find('.index').animate({height:'88%'},600)
            $('.graph4>ul>li:nth-child(2)').find('.stick').animate({height:'70%'},600)
            $('.graph4>ul>li:nth-child(2)').find('.index').animate({height:'78%'},600)
            $('.graph4>ul>li:last-child').find('.stick').animate({height:'90%'},600)
            $('.graph4>ul>li:last-child').find('.index').animate({height:'98%'},600)
            
            $('.graph5>ul>li:first-child').find('.stick').animate({height:'90%'},600)
            $('.graph5>ul>li:first-child').find('.index').animate({height:'98%'},600)
            $('.graph5>ul>li:nth-child(2)').find('.stick').animate({height:'80%'},600)
            $('.graph5>ul>li:nth-child(2)').find('.index').animate({height:'88%'},600)
            $('.graph5>ul>li:last-child').find('.stick').animate({height:'85%'},600)
            $('.graph5>ul>li:last-child').find('.index').animate({height:'93%'},600)
            
            
            
            autoGraph2 = setInterval(graphNum2,20)
        } 
        
        
        
        
        
          
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})