package com.haoge.travel.model;

import java.util.Date;

public class Question {
    private Integer questionId;

    private String questionBody;

    private Integer destinationId;

    private Integer userId;

    private Date createTime;

    private Integer adoptResponseId;

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getQuestionBody() {
        return questionBody;
    }

    public void setQuestionBody(String questionBody) {
        this.questionBody = questionBody;
    }

    public Integer getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(Integer destinationId) {
        this.destinationId = destinationId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Integer getAdoptResponseId() {
        return adoptResponseId;
    }

    public void setAdoptResponseId(Integer adoptResponseId) {
        this.adoptResponseId = adoptResponseId;
    }
}