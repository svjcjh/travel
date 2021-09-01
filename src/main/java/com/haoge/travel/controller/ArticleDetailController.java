package com.haoge.travel.controller;

import com.haoge.travel.model.Article;
import com.haoge.travel.service.GetArticles;
import com.haoge.travel.service.GetComment;
import com.haoge.travel.service.GetUser;
import com.haoge.travel.service.SetComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ArticleDetailController {
    @Autowired
    GetArticles getArticles;
    @Autowired
    GetUser getUser;
    @Autowired
    GetComment getComment;
    @Autowired
    SetComment setComment;

    @GetMapping(value = "/article_detail/{article_id}")
    private String articleDetail(@PathVariable("article_id") String articleId, HttpServletRequest request) {
       Map<String,Object> map = new HashMap<>();
       map.put("articleId",articleId);
       map.put("user",getUser.getWriterById(articleId));
       map.put("commentListVO",getComment.getCommentListByArticleId(articleId));
       map.put("articleList",getArticles.getArticlesByDestination(articleId));
       request.setAttribute("data",map);
        return "articleDetail";
    }

    @GetMapping(value = "/get_article_total")
    @ResponseBody
    private Article getArticleTotal(String articleId) {
        return getArticles.getArticleById(articleId);
    }

    @GetMapping(value = "/submit_comment")
    @ResponseBody
    private String submitComment (HttpSession session,String articleId, String reply_comment_id, String commentBody) {
        String userId = (String) session.getAttribute("userId");
        String userNickname = (String) session.getAttribute("userNickname");
        if (setComment.addComment(articleId,reply_comment_id,commentBody,userId,userNickname)) {
            return "评论成功";
        }
        else return "评论失败";
    }
}
