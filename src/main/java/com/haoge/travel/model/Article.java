package com.haoge.travel.model;

import java.util.Date;

public class Article {
    private String articleId;

    private Integer articleViews;

    private String articlePicture;

    private Integer articleLikes;

    private Integer articleCollections;

    private String articleCreateTime;

    private String departureDate;

    private Integer travelDays;

    private Integer travelCost;

    private Integer travelPlaceId;

    private String travelPlace;

    private Integer travelerId;

    private String articleTitle;

    private String articleBody;

    private Integer articleStatus;

    private Integer articleTagId;

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId;
    }

    public Integer getArticleViews() {
        return articleViews;
    }

    public void setArticleViews(Integer articleViews) {
        this.articleViews = articleViews;
    }

    public String getArticlePicture() {
        return articlePicture;
    }

    public void setArticlePicture(String articlePicture) {
        this.articlePicture = articlePicture;
    }

    public Integer getArticleLikes() {
        return articleLikes;
    }

    public void setArticleLikes(Integer articleLikes) {
        this.articleLikes = articleLikes;
    }

    public Integer getArticleCollections() {
        return articleCollections;
    }

    public void setArticleCollections(Integer articleCollections) {
        this.articleCollections = articleCollections;
    }

    public String getArticleCreateTime() {
        return articleCreateTime;
    }

    public void setArticleCreateTime(String articleCreateTime) {
        this.articleCreateTime = articleCreateTime;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public Integer getTravelDays() {
        return travelDays;
    }

    public void setTravelDays(Integer travelDays) {
        this.travelDays = travelDays;
    }

    public Integer getTravelCost() {
        return travelCost;
    }

    public void setTravelCost(Integer travelCost) {
        this.travelCost = travelCost;
    }

    public Integer getTravelPlaceId() {
        return travelPlaceId;
    }

    public void setTravelPlaceId(Integer travelPlaceId) {
        this.travelPlaceId = travelPlaceId;
    }

    public Integer getTravelerId() {
        return travelerId;
    }

    public void setTravelerId(Integer travelerId) {
        this.travelerId = travelerId;
    }

    public String getArticleBody() {
        return articleBody;
    }

    public void setArticleBody(String articleBody) {
        this.articleBody = articleBody;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public Integer getArticleStatus() {
        return articleStatus;
    }

    public void setArticleStatus(Integer articleStatus) {
        this.articleStatus = articleStatus;
    }

    public Integer getArticleTagId() {
        return articleTagId;
    }

    public void setArticleTagId(Integer articleTagId) {
        this.articleTagId = articleTagId;
    }

    public String getTravelPlace() {
        return travelPlace;
    }

    public void setTravelPlace(String travelPlace) {
        this.travelPlace = travelPlace;
    }
}