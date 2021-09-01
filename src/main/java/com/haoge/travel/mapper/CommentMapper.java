package com.haoge.travel.mapper;

import com.haoge.travel.model.Comment;
import com.haoge.travel.model.VO.CommentListVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {
    //通过文章id筛选CommentListVO数据
    List<CommentListVO> selectCommentListByArticleId(String articleId);

    //插入评论
    Integer insertComment(Comment comment);
}