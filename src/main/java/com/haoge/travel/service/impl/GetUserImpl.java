package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.UserMapper;
import com.haoge.travel.model.User;
import com.haoge.travel.service.GetUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GetUserImpl implements GetUser {
    @Autowired
    UserMapper userMapper;

    public User getWriterById(String articleId) {
        return userMapper.selectUserByArticleId(articleId);
    }
}
