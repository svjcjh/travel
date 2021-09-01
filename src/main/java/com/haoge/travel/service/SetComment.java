package com.haoge.travel.service;

public interface SetComment {
    //添加评论
    Boolean addComment(String articleId,String reply_comment_id,String commentBody,String userId,String userNickname);
}
