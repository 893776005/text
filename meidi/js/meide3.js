/**
 * Created by �ƿ���on 2018/3/11/29.
 */

       /*������ҳ��------�յ�*/


$(function(){
    /*header div ��ʾ ����*/
    $(".header .inner_top .nav_right li").hover(
        function(){
            $(this).find("div").show();
        },
        function(){
            $(this).find("div").hide();
        }
    );




    /*�����ͼƬ*/
    $(".pic").hover(
        function(){
            var a=$(this).attr("title");
            var b=$(this).attr("big");
            $(".left_top img").attr("src",a);
            $(".left_top img").attr("jqimg",b);
        }
    );


    /*�Ŵ�*/
    $(".left_top").jqueryzoom({
        xzoom:400,
        yzoom:400,
        offset:10,

    });










/*����  ����  �Ӽ�����*/

    $(".banner_right .num p .jia").click(
        function(){
            var a=$(".num .shuzi").val();
            a=Number(a)+1;
            $(".num .shuzi").val(a);
        }
    );

    $(".banner_right .num p .jian").click(
        function(){
            var a=$(".num .shuzi").val();
            a=Number(a)-1;
            $(".num .shuzi").val(a);
        }
    );



    /*����   ������*/
    $(".num ul .menu input").click(
        function(){
            $(".difang").toggle();
            return false;
        }
    );
    $(".difang1>a").click(
        function(){
            $(this).next("ul").show().parent().siblings("li").children("ul").hide();
            return false;
        }
    );



    /*main  ��ʾdiv*/
    $(".main .menu li a").click(
        function(){
            $(this).siblings("div").show();
            $(this).parent("li").siblings("li").children("div").hide();
            return false;
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