package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.UserMapper;
import com.haoge.travel.model.User;
import com.haoge.travel.service.SetUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.sql.SQLIntegrityConstraintViolationException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Service
@Slf4j
public class SetUserImpl implements SetUser {
    @Autowired
    UserMapper userMapper;

    public String addUser(String userName,String password) {
        String userId = UUID.randomUUID().toString().replaceAll("-","");
        String md5Password = DigestUtils.md5DigestAsHex(password.getBytes());
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(new Date());
        User user = new User();
        user.setUserId(userId);
        user.setUserLevel(1);
        user.setUserLock(false);
        user.setUserCreateTime(time);
        user.setUserExperience(0);
        user.setUserNickname(userName);
        user.setUserPassword(md5Password);
        user.setUserProfilePicture("/picture/profile-picture/default-head.png");
        try {
            Integer result = userMapper.insertUser(user);
            log.info("用户："+userId+"注册成功");
            return "注册成功";
        }
        catch (Exception e)
        {
            log.info(e.getMessage());
            return "用户名已存在，请更换！";
        }


    }

}
