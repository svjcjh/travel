package com.haoge.travel.service;

import com.haoge.travel.model.User;

public interface GetUser {
    //通过游记id获取用户信息
    User getWriterById(String articleId);
}
