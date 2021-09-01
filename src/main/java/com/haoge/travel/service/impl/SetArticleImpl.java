package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.ArticleMapper;
import com.haoge.travel.model.Article;
import com.haoge.travel.service.SetArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SetArticleImpl implements SetArticle {
    @Autowired
    ArticleMapper articleMapper;

    public String newDraft(String userId) {
        String articleId = UUID.randomUUID().toString().replaceAll("-","");
        if (articleMapper.insertDraft(articleId,userId) == 1) {
            return articleId;
        }
        else return null;
    }

    public List<String> upLoadPicture(MultipartFile[] picture, String articleId, String type) {
        List<String> list = new ArrayList<>();
        String AbDir = "D:/projectResources/article/" + articleId + "/";
        String ReDir = "/article/" + articleId + "/";
        if (type.equals("head")) {
            String originFileName = picture[0].getOriginalFilename();
            String newFileName = UUID.randomUUID().toString().substring(0,8) + originFileName.substring(originFileName.lastIndexOf("."));
            File newFile = new File(AbDir + "head/" + newFileName);

            try {
                picture[0].transferTo(newFile);
            }
            catch (IllegalStateException | IOException e) {
                e.printStackTrace();
            }
            list.add(ReDir + "head/" + newFileName);
        }
        else {
            for (int i = 0;i < picture.length;i++) {
                String originFileName = picture[i].getOriginalFilename();
                String newFileName = UUID.randomUUID().toString().substring(0,8) + originFileName.substring(originFileName.lastIndexOf("."));
                File newFile = new File(AbDir + "content/" + newFileName);

                try {
                    picture[i].transferTo(newFile);
                }
                catch (IllegalStateException | IOException e) {
                    e.printStackTrace();
                }
                list.add(ReDir + "content/" + newFileName);
            }

        }
        return list;
    }

    public String deletePicture(String articleId,String head,String content) {
        String msg = "";
        String resourcePath = "D:/projectResources/article/" + articleId + "/";
        String headPath = resourcePath + "head/";
        File headDir = new File(headPath);
        String[] headPicture = headDir.list();
        for (int i = 0;i < headPicture.length;i++) {
            if (!head.contains(headPicture[i])) {
                File temp = new File(headPath +headPicture[i]);
                if (!temp.delete()) {msg += "删除图片：" +headPath +headPicture[i] + "失败！";}
            }
        }
        String contentPath = resourcePath + "content/";
        File contentDir = new File(contentPath);
        String[] contentPicture = contentDir.list();
        for (int i = 0;i < contentPicture.length;i++) {
            if (!content.contains(contentPicture[i])) {
                File temp = new File(contentPath + contentPicture[i]);
                if (!temp.delete()) {msg += "删除图片：" +contentPath +contentPicture[i] + "失败！";}
            }
        }
        return msg;
    }

    public Boolean saveArticle(String articleId,String head,String title,String content,Integer travelDays,Integer travelCost,Integer travelPlaceId,String travelPlace) {
        Article article = new Article();
        article.setArticleBody(content);
        article.setArticleId(articleId);
        article.setArticlePicture(head);
        article.setArticleTitle(title);
        article.setTravelCost(travelCost);
        article.setTravelDays(travelDays);
        article.setTravelPlace(travelPlace);
        article.setTravelPlaceId(travelPlaceId);
        if (articleMapper.updateArticleById(article) == 1) {
            return true;
        }
        else return false;
    }

    public Boolean changStatus(String articleId,Integer type) {
        Boolean result = false;
        if (type == 0 && articleMapper.updateArticleStatusById(articleId,1) == 1) {
            result = true;
        }
        else if (type == 1 && articleMapper.updateArticleStatusById(articleId,1) == 1) {
            result = true;
        }
        return result;
    }



}
