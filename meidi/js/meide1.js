

/*��һ��ҳ��------��ҳ*/
$(function(){
    /*headerЧ��*/
    $(".header .inner_top .nav_right li").hover(
        function(){
            $(this).find("div").show();
        },
        function(){
            $(this).find("div").hide();
        }
    );
    /*banner_bottom img ���¶�*/
    $(".banner .banner_bottom ul li").hover(
        function () {

            $(this).children("img").animate({"margin-top":"10px"})
        }
        ,
        function () {

            $(this).children("img").animate({"margin-top":"20px"})
        }
    );
    /*banner left div ��ʾ ����*/
    $(".banner .left").hover(
        function(){
            $(this).children("div").show();
        },
        function(){
            $(this).children("div").hide();
        }
    );
    /*�ֲ�ͼ*/
    $(".lunbo").kxbdSuperMarquee({
            distance:1200,//һ�ι����ľ���
            time:3,//ͣ��ʱ�䣬��λΪ��
            direction: 'left',//��������
            navId:'.navmar', //��������ID
//                    eventNav:'mouseover', //�����¼�
            btnGo:{left:'.rightbtn',right:'.leftbtn'},//���Ʒ���İ�ťID
        }

    );
    /*main1_left img��p ���¶�*/
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

    /*main1_right img,span��p ���¶� �ֱ���ɫ*/
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
    /*left_top img��p ���¶� �ֱ���ɫ*/
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

    /*left_bottom img,span��p ���¶� �ֱ���ɫ*/
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


    /*main2_right img��p ���¶�*/
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

    /*main3_inner img  ���¶�*/
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



