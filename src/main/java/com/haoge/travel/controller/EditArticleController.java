package com.haoge.travel.controller;

import com.haoge.travel.model.Article;
import com.haoge.travel.model.Destination;
import com.haoge.travel.service.GetArticles;
import com.haoge.travel.service.GetMenuData;
import com.haoge.travel.service.SetArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
public class EditArticleController {
    @Autowired
    GetArticles getArticles;
    @Autowired
    SetArticle setArticle;
    @Autowired
    GetMenuData getMenuData;

    //文章图片上传
    @PostMapping(value = "/upload_picture")
    @ResponseBody
    private List<String> savePicture(MultipartFile[] picture,String articleId,String type) {
        return setArticle.upLoadPicture(picture,articleId,type);
    }

    //保存草稿或更新文章,核对一下文件夹，把文件夹里多出来的图片删除,然后保存到数据库
    @PostMapping(value = "/update_article")
    @ResponseBody
    private String updateArticle(String articleId,String head,String title,String content,Integer type,Integer travelDays,Integer travelCost,Integer travelPlaceId,String travelPlace) {
        String deleteResult = setArticle.deletePicture(articleId,head,content);
        String result;
        //保存到数据库
        if (setArticle.saveArticle(articleId,head,title,content,travelDays,travelCost,travelPlaceId,travelPlace)) {result = "保存成功！";}
        else result = "保存失败！";
        if (type == 1) {
            if (setArticle.changStatus(articleId,0)) {result = "发布成功！";}
            else result = "发布失败！";
        }
        return result;
    }

    @PostMapping (value = "/get_Article")
    @ResponseBody
    private Article getArticle(String articleId) {
        return getArticles.getArticleById(articleId);
    }

    @GetMapping(value = "get_destinations")
    @ResponseBody
    private List<Destination> getDestinations(String destinationName) {
        return getMenuData.getDestinationByName(destinationName);
    }

}
