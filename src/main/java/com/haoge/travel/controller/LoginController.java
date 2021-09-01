package com.haoge.travel.controller;

import com.haoge.travel.service.SetUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginController {
    @Autowired
    SetUser setUser;

    @GetMapping(value = "/login.html")
    private String loginPage() {
        return "login";
    }

    @GetMapping(value = "/registe")
    @ResponseBody
    private String registe(String userName,String password) {
        return setUser.addUser(userName,password);
    }


}
