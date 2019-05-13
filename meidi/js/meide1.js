

/*第一个页面------首页*/
$(function(){
    /*header效果*/
    $(".header .inner_top .nav_right li").hover(
        function(){
            $(this).find("div").show();
        },
        function(){
            $(this).find("div").hide();
        }
    );
    /*banner_bottom img 上下动*/
    $(".banner .banner_bottom ul li").hover(
        function () {

            $(this).children("img").animate({"margin-top":"10px"})
        }
        ,
        function () {

            $(this).children("img").animate({"margin-top":"20px"})
        }
    );
    /*banner left div 显示 隐藏*/
    $(".banner .left").hover(
        function(){
            $(this).children("div").show();
        },
        function(){
            $(this).children("div").hide();
        }
    );
    /*轮播图*/
    $(".lunbo").kxbdSuperMarquee({
            distance:1200,//一次滚动的距离
            time:3,//停顿时间，单位为秒
            direction: 'left',//滚动方向
            navId:'.navmar', //导航容器ID
//                    eventNav:'mouseover', //导航事件
            btnGo:{left:'.rightbtn',right:'.leftbtn'},//控制方向的按钮ID
        }

    );
    /*main1_left img和p 上下动*/
    $(".main1_left").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
            $(this).children("p").css("color","red");
        },
        function(){
            $(this).children("img").animate({"margin-top":"20px"});
            $(this).children("p").css("color","#333532");
        }
    );

    /*main1_right img,span和p 上下动 字变颜色*/
    $(".main1_right li").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
            $(this).children("span").css("color","red");
            $(this).children("p").css("color","red");

        },
        function(){
            $(this).children("img").animate({"margin-top":"20px"});
            $(this).children("span").css("color","#333532");
            $(this).children("p").css("color","#333532");

        }
    );
    /*left_top img和p 上下动 字变颜色*/
    $(".left_top").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
            $(this).children("p").css("color","red");
        },
        function(){
            $(this).children("img").animate({"margin-top":"20px"});
            $(this).children("p").css("color","#333532");
        }
    );

    /*left_bottom img,span和p 上下动 字变颜色*/
    $(".left_bottom li").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
            $(this).children("span").css("color","red");
            $(this).children("p").css("color","red");

        },
        function(){
            $(this).children("img").animate({"margin-top":"20px"});
            $(this).children("span").css("color","#333532");
            $(this).children("p").css("color","#333532");

        }
    );


    /*main2_right img和p 上下动*/
    $(".main2_right").hover(
        function(){
            $(this).children("img").animate({"margin-top":"10px"});
            $(this).children("p").css("color","red");
        },
        function(){
            $(this).children("img").animate({"margin-top":"20px"});
            $(this).children("p").css("color","#333532");
        }
    );

    /*main3_inner img  上下动*/
    $(".main3_inner .inner li").hover(
        function(){
            $(this).children("img").animate({"margin-top":"-10px"});
        },
        function(){
            $(this).children("img").animate({"margin-top":"0px"});

        }
    );

    /*footer*/

    $(".footer_top .menu li a").click(
        function(){
            $(this).siblings(".submenu_inner").slideToggle();
            return false;
        }

    );
});



