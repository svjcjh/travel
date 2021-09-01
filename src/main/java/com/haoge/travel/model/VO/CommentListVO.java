package com.haoge.travel.model.VO;

public class CommentListVO {
    private String commentId;

    private String userId;

    private String userNickname;

    private String userProfilePicture;

    private Integer userLevel;

    private String commentCreateTime;

    private String commentBody;

    private String quoteUserNickname;

    private String quoteCommentCreateTime;

    private String quoteCommentBody;

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }

    public String getUserProfilePicture() {
        return userProfilePicture;
    }

    public void setUserProfilePicture(String userProfilePicture) {
        this.userProfilePicture = userProfilePicture;
    }

    public Integer getUserLevel() {
        return userLevel;
    }

    public void setUserLevel(Integer userLevel) {
        this.userLevel = userLevel;
    }

    public String getCommentCreateTime() {
        return commentCreateTime;
    }

    public void setCommentCreateTime(String commentCreateTime) {
        this.commentCreateTime = commentCreateTime;
    }

    public String getCommentBody() {
        return commentBody;
    }

    public void setCommentBody(String commentBody) {
        this.commentBody = commentBody;
    }

    public String getQuoteUserNickname() {
        return quoteUserNickname;
    }

    public void setQuoteUserNickname(String quoteUserNickname) {
        this.quoteUserNickname = quoteUserNickname;
    }

    public String getQuoteCommentCreateTime() {
        return quoteCommentCreateTime;
    }

    public void setQuoteCommentCreateTime(String quoteCommentCreateTime) {
        this.quoteCommentCreateTime = quoteCommentCreateTime;
    }

    public String getQuoteCommentBody() {
        return quoteCommentBody;
    }

    public void setQuoteCommentBody(String quoteCommentBody) {
        this.quoteCommentBody = quoteCommentBody;
    }
}
