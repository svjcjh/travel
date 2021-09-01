package com.haoge.travel.model;

import java.util.Date;

public class Destination {
    private Integer destinationId;

    private String destinationName;

    private String markPicture;

    private Date createTime;

    private String higherLevelName;

    public String getDestinationName() {
        return destinationName;
    }

    public void setDestinationName(String destinationName) {
        this.destinationName = destinationName;
    }

    public String getHigherLevelName() {
        return higherLevelName;
    }

    public void setHigherLevelName(String higherLevelName) {
        this.higherLevelName = higherLevelName;
    }

    public Integer getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(Integer destinationId) {
        this.destinationId = destinationId;
    }

    public String getMarkPicture() {
        return markPicture;
    }

    public void setMarkPicture(String markPicture) {
        this.markPicture = markPicture;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}