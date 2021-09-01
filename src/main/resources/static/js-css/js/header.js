
$(function (){
    if (window.location.pathname == "/asd") {
        $("#nav-index").attr("style","color:orange");
    }
    else if (window.location.pathname == "/destination") {
        $("#nav-destination").attr("style","color:orange");
    }
    else if (window.location.pathname == "/question") {
        $("#nav-question").attr("style","color:orange");
    }

    //鼠标触碰显示下拉信息
    //function dropdown() {
        $("#my-messages").mouseout(function () {
            $("#message").attr("style", "display: none")
        })
        $("#my-messages").mouseover(function () {
            $("#message").attr("style", "display: block")
        });

        $("#user-config").mouseout(function () {
            $("#config").attr("style", "display: none")
        })
        $("#user-config").mouseover(function () {
            $("#config").attr("style", "display: block;left: -14px")
        });
    //}
    //打卡
    $("#sign").click(function (){
        $("#sign").attr("style","background-color: orange;border-style: none");
        $("#sign").text("已打卡")
    })
    //搜索
    $("#demo").keydown(function (e) {
        if (e.keyCode == 13) {
            search();
        }
    })

    $(".fas fa-search").click(function () {search();})
    function search() {
        if (null != $(".form-control").text()) {
            window.location.href("/search?q="+$(".form-control").text());
        }
    }

})