let reply_comment_id = null;
let articleId = $("#hidden-articleId").val();
let reportId = null;
let reportType = null;

$(function () {
    $.ajax({
        url: "/get_article_total",
        data: {
            "articleId":articleId
        },
        resultType: "json",
        success: function (data) {

            $("#article-picture").attr("style","background-image:url('" + data.articlePicture + "')");
            $("#articleCreateTime").text(data.articleCreateTime);
            $("#articleViews").text(data.articleViews);
            $("#articleLikes").text(data.articleLikes + "点赞");
            $("#articleCollections").text(data.articleCollections + "收藏");
            $("#travelPlace").text(data.travelPlace);
            $("#departureDate").text(data.departureDate);
            $("#travelDays").text(data.travelDays);
            $("#travelCost").text(data.travelCost);
            $("#article-container").html(data.articleBody);
            $("#report").attr("onclick","report(0," + data.articleId + ")" );

        }
    })

    //评论区显示表情
    $(".show-emoji").emojiParse({
        icons: [{
            path: "/assets/emoji-dist/img/tieba/",
            file: ".jpg",
            placeholder: ":{alias}:",
            alias: {
                1: "hehe",
                2: "haha",
                3: "tushe",
                4: "a",
                5: "ku",
                6: "lu",
                7: "kaixin",
                8: "han",
                9: "lei",
                10: "heixian",
                11: "bishi",
                12: "bugaoxing",
                13: "zhenbang",
                14: "qian",
                15: "yiwen",
                16: "yinxian",
                17: "tu",
                18: "yi",
                19: "weiqu",
                20: "huaxin",
                21: "hu",
                22: "xiaonian",
                23: "neng",
                24: "taikaixin",
                25: "huaji",
                26: "mianqiang",
                27: "kuanghan",
                28: "guai",
                29: "shuijiao",
                30: "jinku",
                31: "shengqi",
                32: "jinya",
                33: "pen",
                34: "aixin",
                35: "xinsui",
                36: "meigui",
                37: "liwu",
                38: "caihong",
                39: "xxyl",
                40: "taiyang",
                41: "qianbi",
                42: "dnegpao",
                43: "chabei",
                44: "dangao",
                45: "yinyue",
                46: "haha2",
                47: "shenli",
                48: "damuzhi",
                49: "ruo",
                50: "OK"
            }
        }, {
            path: "/assets/emoji-dist/img/qq/",
            file: ".gif",
            placeholder: "#qq_{alias}#"
        }]
    });

    //评论区加表情
    $("#comment-area").emoji({
        button: "#choice-emj",
        showTab: true,
        animation: 'fade',
        icons: [{
            name: "group1",
            path: "/assets/emoji-dist/img/tieba/",
            maxNum: 50,
            file: ".jpg",
            placeholder: ":{alias}:",
            alias: {
                1: "hehe",
                2: "haha",
                3: "tushe",
                4: "a",
                5: "ku",
                6: "lu",
                7: "kaixin",
                8: "han",
                9: "lei",
                10: "heixian",
                11: "bishi",
                12: "bugaoxing",
                13: "zhenbang",
                14: "qian",
                15: "yiwen",
                16: "yinxian",
                17: "tu",
                18: "yi",
                19: "weiqu",
                20: "huaxin",
                21: "hu",
                22: "xiaonian",
                23: "neng",
                24: "taikaixin",
                25: "huaji",
                26: "mianqiang",
                27: "kuanghan",
                28: "guai",
                29: "shuijiao",
                30: "jinku",
                31: "shengqi",
                32: "jinya",
                33: "pen",
                34: "aixin",
                35: "xinsui",
                36: "meigui",
                37: "liwu",
                38: "caihong",
                39: "xxyl",
                40: "taiyang",
                41: "qianbi",
                42: "dnegpao",
                43: "chabei",
                44: "dangao",
                45: "yinyue",
                46: "haha2",
                47: "shenli",
                48: "damuzhi",
                49: "ruo",
                50: "OK"
            },
            title: {
                1: "呵呵",
                2: "哈哈",
                3: "吐舌",
                4: "啊",
                5: "酷",
                6: "怒",
                7: "开心",
                8: "汗",
                9: "泪",
                10: "黑线",
                11: "鄙视",
                12: "不高兴",
                13: "真棒",
                14: "钱",
                15: "疑问",
                16: "阴脸",
                17: "吐",
                18: "咦",
                19: "委屈",
                20: "花心",
                21: "呼~",
                22: "笑脸",
                23: "冷",
                24: "太开心",
                25: "滑稽",
                26: "勉强",
                27: "狂汗",
                28: "乖",
                29: "睡觉",
                30: "惊哭",
                31: "生气",
                32: "惊讶",
                33: "喷",
                34: "爱心",
                35: "心碎",
                36: "玫瑰",
                37: "礼物",
                38: "彩虹",
                39: "星星月亮",
                40: "太阳",
                41: "钱币",
                42: "灯泡",
                43: "茶杯",
                44: "蛋糕",
                45: "音乐",
                46: "haha",
                47: "胜利",
                48: "大拇指",
                49: "弱",
                50: "OK"
            }
        }, {
            path: "/assets/emoji-dist/img/qq/",
            maxNum: 91,
            excludeNums: [41, 45, 54],
            file: ".gif",
            placeholder: "#qq_{alias}#"
        }]
    });

})
//回复跳转到输入框
function reply(commentId,userNickname) {
    reply_comment_id = commentId;
    $("#comment-area").attr("placeholder","回复："+userNickname)
    document.getElementById("comment-area").focus();
}

function submitComment() {
    let userId = $("#userId").val();
    if (userId == null || userId == "") {
        alert("请先登录！");
        return;
    }
    $.ajax({
        url: "/submit_comment",
        data:{
            "articleId":articleId,
            "reply_comment_id":reply_comment_id,
            "commentBody":$("#comment-area").val(),
            "userId":$("#userId").val()
        },
        resultType:"text",
        success:function (data) {
            if (data == "评论成功") {
            window.location.href="/article_detail/"+articleId+"#comment-area";
            }
            else alert(data);
        }


    })
}

function report(type,id) {
    reportType = type;
    reportId = id;
    $("#report-box").attr("style","display: block");
}

function submitReport() {
    $.ajax({
        url:"",
        data:{
            "content":$("._j_report_content").val(),
            "reportType":reportType,
            "reportId":reportId,
            "reportReason":""
        },
        success:function () {

        }
    })
}

