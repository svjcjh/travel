package com.haoge.travel.service;

import com.haoge.travel.model.VO.CommentListVO;

import java.util.List;

public interface GetComment {
    //根据文章id获取评论列表
    List<CommentListVO> getCommentListByArticleId(String articleId);
}
