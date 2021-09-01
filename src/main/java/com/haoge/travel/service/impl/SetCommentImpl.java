package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.CommentMapper;
import com.haoge.travel.model.Comment;
import com.haoge.travel.service.SetComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Service
public class SetCommentImpl implements SetComment {
    @Autowired
    CommentMapper commentMapper;

    public Boolean addComment(String articleId,String reply_comment_id,String commentBody,String userId,String userNickname) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(new Date());
        Comment comment = new Comment();
        comment.setCommentId(UUID.randomUUID().toString().replaceAll("-",""));
        comment.setCommentBody(commentBody);
        comment.setCommentLikes(0);
        comment.setCommentorId(userId);
        comment.setCommentorName(userNickname);
        comment.setCommentCreateTime(time);
        comment.setArticleId(articleId);
        comment.setReplyCommentId(reply_comment_id);
        if (commentMapper.insertComment(comment) == 1) {
            return true;
        }
        else return false;
    }
}
