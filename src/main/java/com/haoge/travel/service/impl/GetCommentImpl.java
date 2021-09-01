package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.CommentMapper;
import com.haoge.travel.model.VO.CommentListVO;
import com.haoge.travel.service.GetComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetCommentImpl implements GetComment {
    @Autowired
    CommentMapper commentMapper;

    public List<CommentListVO> getCommentListByArticleId(String articleId) {
        return commentMapper.selectCommentListByArticleId(articleId);
    }
}
