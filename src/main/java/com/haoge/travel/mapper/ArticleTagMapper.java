package com.haoge.travel.mapper;

import com.haoge.travel.model.ArticleTag;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ArticleTagMapper {

    List<ArticleTag> selectArticles();

}
