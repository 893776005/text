/**
 
/*footer*/

/*���ĸ�ҳ��  ���ֶһ�*/
$(function(){
    /*header div ��ʾ������*/
    $(".header .inner_top .nav_right li").hover(
        function(){
            $(this).find("div").show();
        },
        function(){
            $(this).find("div").hide();
        }
    );
    /*main .main1 li img ���¶�*/
    $(".main .main1 li").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
        },
        function(){
            $(this).children("img").animate({"margin-top":"0px"});

        }
    );
    /*main .main2 li img ���Ҷ� ͸����*/
    $(".main .main2 li").hover(
        function(){
            $(this).css("opacity","0.7").children("img").animate({"margin-left":"10px"});
        },
        function(){
            $(this).css("opacity","1").children("img").animate({"margin-left":"0px"});

        }
    );

    /*main .main3  img ���¶� ͸����*/
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