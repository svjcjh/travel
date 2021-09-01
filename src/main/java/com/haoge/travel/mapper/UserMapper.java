package com.haoge.travel.mapper;

import com.haoge.travel.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    //返回游记作者用户信息
    User selectUserByArticleId(String articleId);
    //添加用户
    Integer insertUser(User user);


}