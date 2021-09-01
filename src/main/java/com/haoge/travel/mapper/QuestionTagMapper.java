package com.haoge.travel.mapper;

import com.haoge.travel.model.QuestionTag;

public interface QuestionTagMapper {
    int deleteByPrimaryKey(Integer questionTagsId);

    int insert(QuestionTag record);

    int insertSelective(QuestionTag record);

    QuestionTag selectByPrimaryKey(Integer questionTagsId);

    int updateByPrimaryKeySelective(QuestionTag record);

    int updateByPrimaryKey(QuestionTag record);
}