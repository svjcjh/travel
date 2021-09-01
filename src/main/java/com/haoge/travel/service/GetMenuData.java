package com.haoge.travel.service;

import com.haoge.travel.model.ArticleTag;
import com.haoge.travel.model.Destination;

import java.util.List;

//获取首页文章筛选菜单数据
public interface GetMenuData {
    //获取最热门的8个地点list集合,
    List<Destination> getDestinations();
    //获取文章标签集合
    List<ArticleTag> getTags();
    //通过名字搜索目的地
    List<Destination> getDestinationByName(String name);

}
