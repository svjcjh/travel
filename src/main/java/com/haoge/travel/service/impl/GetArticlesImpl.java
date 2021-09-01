package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.ArticleMapper;
import com.haoge.travel.model.Article;
import com.haoge.travel.service.GetArticles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetArticlesImpl implements GetArticles {
    @Autowired
    ArticleMapper articleMapper;

    public List<Article> getArticlesBySelect(Integer currPage, Integer dataSize, String selectType, Integer selectDestination, Integer selectTag) {
        Integer starIndex = (currPage - 1) * dataSize;
        if (selectTag != 0) {return articleMapper.selectArticlesByTag(starIndex,dataSize,selectTag);}
        else if (selectDestination != 0) {return articleMapper.selectArticlesByDestination(starIndex,dataSize,selectDestination);}
        else if (selectType.equals("new")) {return articleMapper.selectArticlesByNew(starIndex,dataSize);}
        else {return articleMapper.selectArticlesByHot(starIndex,dataSize);}
    }

    public String getDraftId(String userId) {
        return articleMapper.selectDraft(userId);
    }

    public Article getArticleById(String articleId) {
        return articleMapper.selectArticleById(articleId);
    }

    public List<Article> getArticlesByDestination(String articleId) {
        return articleMapper.selectArticlesByRelationDestination(articleId);
    }
}
