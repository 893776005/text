/**
 * Created by �ƿ��� on 2018/11/28.
 */

      /*�ڶ���ҳ��------�յ�*/
$(function(){
    /*header div*/
    $(".header .inner_top .nav_right li").hover(
        function(){
            $(this).find("div").show();
        },
        function(){
            $(this).find("div").hide();
        }
    );
    /*banner_inner2 li ��ť �� �뿪*/
    $(".banner_inner2 li").click(
        function(){
            $(this).children("div").removeClass().addClass("anniu");
            $(this).siblings("li").children("div").removeClass().addClass("anniu1");
        }
    );
    /*banner_bottom li jiage ��ʾ ����*/
    $(".banner_bottom li:eq(1)").hover(
        function(){
            $(".jiage").show();
        },
        function(){
            $(".jiage").hide();
        }
    );

    $(".banner_bottom ul .menu>a").click(
        function(){
            $(".difang").toggle();
            return false;
        }
    );
    /*difang1 a ������ʾ ��������*/
    $(".difang1>a").click(
        function(){
            $(this).next("ul").show().parent().siblings("li").children("ul").hide();
            return false;
        }
    );


/*.main .main_inner img ���¶� ͸���� �ֱ��*/
$(".main .main_inner img").hover(
    function(){
        $(this).animate({"margin-top":"8px"}).css("opacity","0.7")
    },
    function(){
        $(this).animate({"margin-top":"0"}).css("opacity","1")
    }
)



    /*footer*/

    $(".footer_top .menu li a").click(
        function(){
            $(this).siblings(".submenu_inner").slideToggle();
            return false;
        }

    );
});
