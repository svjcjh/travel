let articleId = $("#article").val();

$(function () {
    getArticle();

   $("#save").click(function () {updateArticle(0);});
   $("#public").click(function () {check()});

    //标题输入框剩余字数提醒
    $("#title").focus(function () {
        var title = $("#title").val();
        $("#length").text(40 - title.length)
        $("#input-length").attr("style","display: block");
    })
    $("#title").blur(function () {
        $("#input-length").attr("style","display: none");
    })
    document.getElementById("title").oninput = function () {
            var title = $("#title").val();
            $("#length").text(40 - title.length)
        }

    $("#summernote").summernote({
        height:500,
        lang:'zh-CN',
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['picture',['picture']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ],
        callbacks: {
            onImageUpload:function (files) {
                var formdatas = new FormData();
                for (i = 0;i < files.length;i++) {
                    formdatas.append("picture",files[i]);
                }
                formdatas.append("type","content");
                formdatas.append("articleId",articleId);
                $.ajax({
                    url:"/upload_picture",
                    type:"post",
                    data:formdatas,
                    processData: false, // 告诉jQuery不要去处理发送的数据
                    contentType: false, // 告诉jQuery不要去设置Content-Type请求头
                    success:function (data) {
                        $.each(data,function (i,e) {
                            $('#summernote').summernote('insertImage',e);
                        })
                    },
                    error: function () {
                        alert("图片上传失败！");
                    }
                })

            }
        }
    });
    //目的地选择
    document.getElementById("destination").oninput = function () {getDestinations($("#destination").val());};
    //时间控件
    $('#datetimepicker').datetimepicker({
        timepicker:false,
        format:'Y-m-d'
    });
    $.datetimepicker.setLocale('zh');//使用中文



})

//点击上传图片图标触发真正的上传控件
function openFile() {
    document.getElementById("file").click();
}
//ajax上传图片到后台
function myUpload(file) {
    var temp = file.files[0];
    var formData = new FormData();
    if (temp) {
        formData.append("picture",temp);
        formData.append("articleId",articleId);
        formData.append("type","head");
        $.ajax({
            url:"/upload_picture",
            type:"post",
            data:formData,
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            success:function (data) {
                $.each(data,function (i,e) {
                    $("#edit-article").attr("style","background-image:url('" + e + "')");
                })
            },
            error: function () {
                alert("图片上传失败！");
            }
        })
    }

}

function updateArticle(type) {
    var urlAttr = $("#edit-article").attr("style");
    var startIndex = urlAttr.indexOf("(") + 2;
    var endIndex = urlAttr.indexOf(")") - 1;
    var head = urlAttr.substring(startIndex,endIndex);
    var result = "操作失败！";

    $.ajax({
        url:"/update_article",
        type:"post",
        data:{
           "head": head,
            "title": $("#title").val(),
            "content": $('#summernote').summernote('code'),
            "articleId": articleId,
            "type": type,   //0为保存草稿，1为发布文章
            "travelDays":$("#Days").val(),
            "travelCost":$("#cost").val(),
            "travelPlace":$("#destination").val(),
            "travelPlaceId":$("#travel-place-id").val()
        },
        dataType:"text",
        success: function (data) {
            result = data;
        }

    })
    alert(result);
    return result;


}

function getArticle() {
    $.ajax({
        url: "/get_Article",
        type: "post",
        data:{
            "articleId":articleId,
        },
        success:function (data) {
            $("#edit-article").attr("style","background-image:url('" + data.articlePicture + "')");
            $("#title").attr("value",data.articleTitle);
            $('#summernote').summernote('code', data.articleBody);
        },
        error:function () {
            alert("草稿获取异常，请退出重试！");
        }
    })

}

function getDestinations(destinationName) {
    if (destinationName == null || destinationName == "") {
        $("#add-travel-place").attr("style","display: none");
        return;
    }
    var hasResult = false;
    $.ajax({
        url:"/get_destinations",
        data:{
            "destinationName":destinationName
        },
        success:function (data) {
            var html = "";
            $.each(data,function (i,e) {
                hasResult = true;
                if (e.higherLevelName != null) {e.higherLevelName = '-' + e.higherLevelName;}
                else {e.higherLevelName = '';}
                html += "<a class='dropdown-item' href='javascript:void(0)' onclick='dataReplace(\"" + e.destinationName + "\"" + "," + e.destinationId + ")'>" + e.destinationName + e.higherLevelName + "</a>";

            })
            if (!hasResult) {
                html += "<a class='dropdown-item' href='javascript:void(0)'>请输入正确地点</a>";
            }
            $("#add-travel-place").html(html);
            $("#add-travel-place").attr("style","display: block");
        }
    })
}

function dataReplace(destinationName,destinationId) {
    $("#add-travel-place").attr("style","display: none");
    $("#destination").val(destinationName);
    $("#travel-place-id").val(destinationId);
}

function check() {
    var destinationName = $("#destination").val();
    if (destinationName == null) {
        alert("请选择目的地！");
        return;
    }
    $.ajax({
        url:"/get_destinations",
        sync: true,
        data:{
            "destinationName":destinationName
        },
        success:function (data) {
            var hasResult = false;
            $.each(data,function (i,e) {
                hasResult = true;
            })
            if (!hasResult) {
                alert("请输入规范的目的地！");
                return;
            }
            if ($("#Days").val() != null) {
                var days = parseInt($("#Days").val());
                if (days != days) {
                    alert("输入天数应为整数！");
                    return;
                }
            };
            if ($("#cost").val() != null) {
                var cost = parseInt($("#cost").val());
                if (cost != cost) {
                    alert("输入花费应为整数！");
                    return;
                }
            };
            //跳转页面
            if (updateArticle(1) == "发布成功！") {
                window.location.href("/article_detail");
            }



        }
    });

}

