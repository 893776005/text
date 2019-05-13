/**
 
/*footer*/

/*第四个页面  积分兑换*/
$(function(){
    /*header div 显示和隐藏*/
    $(".header .inner_top .nav_right li").hover(
        function(){
            $(this).find("div").show();
        },
        function(){
            $(this).find("div").hide();
        }
    );
    /*main .main1 li img 上下动*/
    $(".main .main1 li").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
        },
        function(){
            $(this).children("img").animate({"margin-top":"0px"});

        }
    );
    /*main .main2 li img 左右动 透明度*/
    $(".main .main2 li").hover(
        function(){
            $(this).css("opacity","0.7").children("img").animate({"margin-left":"10px"});
        },
        function(){
            $(this).css("opacity","1").children("img").animate({"margin-left":"0px"});

        }
    );

    /*main .main3  img 上下动 透明度*/
    $(".main .main3").hover(
        function(){
            $(this).css("opacity","0.8").children("img").animate({"margin-top":"20px"});
        },
        function(){
            $(this).css("opacity","1").children("img").animate({"margin-top":"0px"});

        }
    );


    /*footer*/

    $(".footer_top .menu li a").click(
        function(){
            $(this).siblings(".submenu_inner").slideToggle();
            return false;
        }

    );
})