package com.haoge.travel.model;

public class ScenicSpot {
    private Integer scenicSpotId;

    private Integer destinationId;

    private String scenicSpotName;

    private String scenicSpotIntroducetion;

    private String scenicSpotPicture;

    public Integer getScenicSpotId() {
        return scenicSpotId;
    }

    public void setScenicSpotId(Integer scenicSpotId) {
        this.scenicSpotId = scenicSpotId;
    }

    public Integer getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(Integer destinationId) {
        this.destinationId = destinationId;
    }

    public String getScenicSpotName() {
        return scenicSpotName;
    }

    public void setScenicSpotName(String scenicSpotName) {
        this.scenicSpotName = scenicSpotName;
    }

    public String getScenicSpotIntroducetion() {
        return scenicSpotIntroducetion;
    }

    public void setScenicSpotIntroducetion(String scenicSpotIntroducetion) {
        this.scenicSpotIntroducetion = scenicSpotIntroducetion;
    }

    public String getScenicSpotPicture() {
        return scenicSpotPicture;
    }

    public void setScenicSpotPicture(String scenicSpotPicture) {
        this.scenicSpotPicture = scenicSpotPicture;
    }
}