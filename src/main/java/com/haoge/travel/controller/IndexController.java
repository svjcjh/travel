package com.haoge.travel.controller;


import com.haoge.travel.model.Article;
import com.haoge.travel.model.Destination;
import com.haoge.travel.service.GetArticles;
import com.haoge.travel.service.GetMenuData;
import com.haoge.travel.service.SetArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Controller
public class IndexController {
    @Autowired
    private GetMenuData getMenuData;
    @Autowired
    private GetArticles getArticles;
    @Autowired
    private SetArticle setArticle;

    //返回首页轮播图对应文章数据
    @GetMapping(value = "/index")
    private String index(HttpSession session) {
        //模拟用户已登录
        session.setAttribute("userId","1");
        session.setAttribute("userNickname","浩哥");
        return "index";

    }
    //获取下拉菜单目的地与兴趣标签
    @GetMapping(value = "/getMenuData")
    @ResponseBody
    private Map<String,Object> getMenuData() {
        Map<String,Object> map = new HashMap<>();
        map.put("destinations",getMenuData.getDestinations());
        map.put("tags",getMenuData.getTags());
        return map;
    }

    //selectType:通过热度还是最新排序，selectDestination:通过地点查询，selectTag:通过标签查询
    @GetMapping("/show_articles")
    @ResponseBody
    private Map<String,Object> showArticles(Integer currPage,Integer dataSize, String selectType, Integer selectDestination, Integer selectTag) {
        Map<String,Object> map = new HashMap<>();
        map.put("articles",getArticles.getArticlesBySelect(currPage,dataSize,selectType,selectDestination,selectTag));
        map.put("dataCount",getArticles.getArticlesBySelect(currPage,dataSize,selectType,selectDestination,selectTag).size());
        return map;
    }
    //筛选下拉菜单目的地搜索框
    @GetMapping(value = "/search_destinations")
    @ResponseBody
    private List<Destination> searchDestinations(String key) {
        return getMenuData.getDestinationByName(key);
    }

    @GetMapping(value = "/search")
    private String search() {

        return "searchResult";
    }
    //打卡用redis的string数据类型设置过期时间
    @GetMapping(value = "/sign")
    private void sign() {

    }

    @GetMapping(value = "/create_article")
    private String editArticle(HttpSession session,HttpServletRequest request,HttpServletResponse response) throws IOException {
        String userId = (String) session.getAttribute("userId");

        String articleId = getArticles.getDraftId(userId);
        //如果不存在草稿，新建草稿给默认值
        if (articleId == null) {
            articleId = setArticle.newDraft(userId);
            //新建存储图片的文件夹
            if (articleId != null) {
                File contentPicture = new File("C:/projectResources/article/" + articleId + "/content");
                contentPicture.mkdirs();
                File headPicture = new File("C:/projectResources/article/" + articleId + "/head");
                headPicture.mkdir();
            }
            else {
                response.setContentType("text/html; charset=UTF-8"); //转码
                PrintWriter out = response.getWriter();
                out.flush();
                out.println("<script>");
                out.println("alert('服务异常！');");
                out.println("history.back();");
                out.println("</script>");
            }
        }
        request.setAttribute("articleId",articleId);
        return "editArticle";
    }
}
