package com.haoge.travel.mapper;

import com.haoge.travel.model.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ArticleMapper {
    //排序文章根据热度
    List<Article> selectArticlesByHot(Integer startIndex,Integer dataSize);
    //排序文章根据最新
    List<Article> selectArticlesByNew(Integer startIndex,Integer dataSize);
    //筛选文章根据标签
    List<Article> selectArticlesByTag(Integer startIndex,Integer dataSize,Integer selectTag);
    //筛选文章根据目的地id
    List<Article> selectArticlesByDestination(Integer startIndex,Integer dataSize,Integer selectDestination);
    //获取草稿数量
    String selectDraft(String userId);
    //新建带id的默认草稿
    Integer insertDraft(@Param("articleId") String articleId,@Param("userId") String userId);
    //通过id获取文章
    Article selectArticleById(String articleId);
    //通过id更新文章
    Integer updateArticleById(Article article);
    //通过id更新文章状态
    Integer updateArticleStatusById(@Param("articleId") String articleId,@Param("status") Integer status);
    //通过目的地名字获取5篇文章上限
    List<Article> selectArticlesByRelationDestination(String articleId);
}