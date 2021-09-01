package com.haoge.travel.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SetArticle {
    //新建草稿
    String newDraft(String userId);
    //上传文章图片到服务器，并返回图片地址
    List<String> upLoadPicture(MultipartFile[] picture, String articleId, String type);
    //删除多余的图片
    String deletePicture(String articleId,String head,String content);
    //保存草稿
    Boolean saveArticle(String articleId,String head,String title,String content,Integer travelDays,Integer travelCost,Integer travelPlaceId,String travelPlace);
    //改变文章状态：0:草稿变发布，1:普通发布变轮播图
    Boolean changStatus(String articleId,Integer type);

}
