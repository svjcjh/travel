//每页展示文章条数
let dataSize = 7;
//分页模块最多展示的页块数
let pageSize = 9;
//总页数ajax请求返回后赋值
let pageCount;
//展示文章列表数据的请求路径
let url = "/show_articles";
//筛选类型:热门与最新,默认为热门
let selectType = "hot";
//筛选的目的地默认为空 0表示
let selectDestination = 0;
//筛选的兴趣标签默认为空 0表示
let selectTag = 0;

// function pagination(currPage,url) {
//     var beforePage ;
//     $.ajax({
//         url:url,
//         data:{
//             "currPage":currPage,
//             "pageSize":pageSize
//         },
//         dataType:"json",
//         success:function (data) {
//             //更新文章列表
//             $.each(data,function (article) {
//
//             })
//             //更新分页组件
//             $(".page-link")
//
//         }
//     })
//
// }

//通过兴趣还是目的地筛选，0表示目的地，1表示兴趣标签,另一参数为对应id
function select(num,id) {
    $("#select-item").attr("style","display: none");
    if (num == 0) {
        selectDestination = id;
        selectTag = 0;
    }
    else {selectTag = id;selectDestination = 0}
    pagination(1);
}

function  showArticles(currPage) {
    var html = '';
    $.ajax({
        async:false,
        url:url,
        data:{
            "currPage":currPage,
            "dataSize":dataSize,
            "selectType":selectType,
            "selectDestination":selectDestination,
            "selectTag":selectTag
        },
        dataType:"json",
        success:function (data) {
            pageCount = Math.ceil(data.dataCount / dataSize);
            if (pageCount <= 1) {pageSize = 1;}
            else if (pageCount > 1 && pageCount < pageSize) {pageSize = pageCount;}
            if (data.dataCount > 0) {
                $.each(data.articles, function (i, e) {
                    html += "<div style='margin-top: 20px'>";
                    html += "<div class='article-picture' style='float: left'>";
                    html += "<img style='width: 230px;height: 156px' src='" + e.articlePicture + "'>";
                    html += "</div>";
                    html += " <div style='float: right;width: 520px'>";
                    html += "<dl>";
                    html += "<dt style='margin-bottom: 10px'> <a class='index-title' href='#' >" + e.articleTitle + "</a></dt>";
                    html += "<dd style='font-size: 15px;margin-bottom: 15px'>";
                    html += "<a class='index-content' href='#'>" + e.articleBody + "</a>";
                    html += "</dd>";
                    html += "<dd style='font-size: 13px'>";
                    html += "<span> <i class='fas fa-map-marker-alt'></i><a href='#'>" + e.travelPlace + "&nbsp;</a>,&nbsp;&nbsp;by</span>";
                    html += "<span> <a href='#'> <img style='width: 16px;height: 16px' src='/picture/profile-picture/head.png'>&nbsp;雄安</a> </span>";
                    html += "<span> <i class='fas fa-eye'></i>&nbsp;<a>" + e.articleViews + " </a> </span>";
                    html += "<span style='margin-left: 250px;color: orange'> <a>" + e.articleLikes + "</a> <a href='#' class='like'> <i class='fas fa-heart'></i> </a></span>";
                    html += "</dd>";
                    html += "</dl>";
                    html += "</div>";
                    html += "</div>";
                })
            }
            $("#article-list").html(html);
        }

    })

}

function pagination(currPage) {
    var beforePage = parseInt($(".current").text());
    if (beforePage !== beforePage) {
        showArticles(1);
        loadPage(1,1,0);
        return;
    }
    showArticles(currPage);
    var firstPage=parseInt($(".first").text());
    var lastPage=firstPage+pageSize-1;
    var half= Math.floor(((firstPage+lastPage)/2));
    var num=0;
    if (currPage == beforePage) {return;};
    if (currPage == -1) {currPage = parseInt($(".current").text())-1};
    if (currPage == 0) {currPage = parseInt($(".current").text())+1};
    //数字变化，页数要大于等于pageSize
    if (firstPage==1 || lastPage==pageCount) {
        //最前页数字为1，且点击数大于一半，右移动
        if (firstPage==1 && currPage-beforePage>0 && currPage>half) {
            if (currPage-half <= pageCount - lastPage) {
                //全部数字加 currPage - pageSize/2 + 1
                num = currPage - half;
            }
            else {num =pageCount - lastPage;}
        }
        //最后页数字为pageCount，且点击数大于一半，左移动
        if (lastPage==pageCount && currPage-beforePage < 0 && currPage < half) {
            if (half-currPage <= firstPage-1) {
                //全部数字减pageCount-pageSize/2 - currPage
                num = -(half-currPage);
            }
            else {
                //全部数字减 当前最前页数字-1
                num = -(firstPage-1);
            }
        }
    }
//current处于中间且第一页最后一页数字不在当前页面内
    else {
        //右移动
        if (currPage - beforePage > 0) {
            if (currPage - beforePage < pageCount - lastPage) {
                //全部数字加 currPage - beforePage
                num=currPage - beforePage;
            }
            else {
                //全部数字加 pageCount - 当前最后页数字
                num=pageCount - lastPage;
            }
        }
        //左移动
        else {
            if (beforePage - currPage < firstPage-1 ) {
                //全部数字减 beforePage - currPage
                num=-(beforePage - currPage);
            }
            else {
                //全部数字减 当前最前页数字-1
                num=-(firstPage-1);
            }
        }
    }
        loadPage(currPage,firstPage,num);

}

//推翻重写
function loadPage(currPage,firstPage,num) {
    var pageHtml="";
    if (currPage > 1) {
        pageHtml += "<li class='page-item'><a class='page-link' href='javascript: void(0)' onclick='pagination(-1)' style='background-color: orange'>&lt;&lt;上一页</a></li>"
    }

    for (var i=0;i<pageSize;i++) {
        var pageNum = firstPage+i+num;
        if (i == 0 && pageNum == currPage) {pageHtml += "<li class='page-item'><a class='page-link first current' href='javascript: void(0)' onclick='pagination(" + pageNum + ")'>" + pageNum+"</a></li>"}
        else if (i == 0) {pageHtml += "<li class='page-item'><a class='page-link first' href='javascript: void(0)' onclick='pagination(" + pageNum + ")'>" + pageNum+"</a></li>"}
        else if (pageNum == currPage) {pageHtml += "<li class='page-item'><a class='page-link current' href='javascript: void(0)' onclick='pagination(" + pageNum + ")'>" + pageNum+"</a></li>"}
        else {pageHtml += "<li class='page-item'><a class='page-link' href='javascript: void(0)' onclick='pagination(" + pageNum + ")'>" + pageNum+"</a></li>"}
    }

    if (currPage < pageCount) {
        pageHtml+="<li class='page-item'><a class='page-link' href='javascript: void(0)' onclick='pagination(0)' style='background-color: orange'>下一页&gt;&gt;</a></li>"
    }


    $(".pagination").html(pageHtml);
    $(".current").css("background-color","orange");


}

//加载下拉菜单目的地与兴趣标签方法
function loadMenuData () {
    var dhtml = '';
    var thtml = '';
    $.ajax({
        sync:false,
        url:"/getMenuData",
        success:function (data) {
            $.each(data.destinations,function (i,e) {
                dhtml += "<a href='javascript: void(0)' onclick='select(0," + e.destinationId +")'>" + e.destinationName +"</a>";
            })
            $.each(data.tags,function (i,e) {
                thtml += "<span><a class='each-tag' href='javascript: void(0)' onclick='select(1," + e.tagId +")'>" + e.tagName +"</span></a>";
            })
            $("#destination-span").html(dhtml);
            $("#tag-group").html(thtml);
        }
    })

}


$(function () {
   $("#new-article").click(function () {
       selectType = "new";
       pagination(1);
       $("#hot-article").attr("style","");
       $("#new-article").attr("style","color: orange;margin-left: 35px")
   })

    $("#hot-article").click(function () {
        selectType = "hot";
        pagination(1);
        $("#new-article").attr("style","margin-left: 35px");
        $("#hot-article").attr("style","color: orange")
    })

    //打开下拉菜单
    $("#open-menu").click(function () {$("#select-item").attr("style","display: block");})
    //收起下拉菜单叉叉
    $("#hide-select").click(function () {$("#select-item").attr("style","display: none");})
    //地点输入框,输入发ajax请求
    $("#input").change(function () {
        var hasNoResult = true;
        var html = '';
        if ($("#input").val() == '') {$(".destination-select").attr("style","display: none")}
        else {
            $.ajax({
                sync:false,
                url: "/search_destinations",
                data: {
                    "key": $("#input").val()
                },
                success: function (data) {
                    $(".destination-select").attr("style", "display: block")
                    $(".destination-select").html("");
                    $.each(data, function (index, element) {
                        hasNoResult = false;
                        if (element.higherLevelName != null) {element.higherLevelName = '-' + element.higherLevelName;}
                        else {element.higherLevelName = '';}
                        html += "<a class='list-group-item' href='javascript: void(0)' onclick='(select(0," + element.destinationId + "))'>" + element.destinationName + element.higherLevelName + "</a>"
                    })
                    if (hasNoResult == true) {
                        $(".destination-select").html("<a class='list-group-item' style='color:#959494'>没有找到“" + $("#input").val() + "”</a>");
                    }
                    else {$(".destination-select").html(html);}
                }
            })
        }
    });

    pagination(1);
    loadMenuData();

})
