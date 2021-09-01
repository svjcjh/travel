package com.haoge.travel.model;

import java.util.Date;

public class QuestionTag {
    private Integer questionTagsId;

    private String questionTagsName;

    private Date createTime;

    public Integer getQuestionTagsId() {
        return questionTagsId;
    }

    public void setQuestionTagsId(Integer questionTagsId) {
        this.questionTagsId = questionTagsId;
    }

    public String getQuestionTagsName() {
        return questionTagsName;
    }

    public void setQuestionTagsName(String questionTagsName) {
        this.questionTagsName = questionTagsName;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}