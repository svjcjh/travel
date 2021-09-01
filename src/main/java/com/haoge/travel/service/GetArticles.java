package com.haoge.travel.service;

import com.haoge.travel.model.Article;

import java.util.List;

public interface GetArticles {
    //首页分页获取文章列表
    List<Article> getArticlesBySelect(Integer currPage,Integer dataSize,String selectType,Integer selectDestination,Integer selectTag);

    //根据用户id获取草稿文章id
    String getDraftId(String userId);

    //根据文章id获取文章
    Article getArticleById(String articleId);

    //根据文章相关目的地获取文章
    List<Article> getArticlesByDestination(String articleId);
}
