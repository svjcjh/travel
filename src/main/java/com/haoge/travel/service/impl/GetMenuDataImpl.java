package com.haoge.travel.service.impl;

import com.haoge.travel.mapper.ArticleTagMapper;
import com.haoge.travel.mapper.DestinationMapper;
import com.haoge.travel.model.ArticleTag;
import com.haoge.travel.model.Destination;
import com.haoge.travel.service.GetMenuData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetMenuDataImpl implements GetMenuData {
    @Autowired
    private DestinationMapper destinationMapper;
    @Autowired
    private ArticleTagMapper articleTagMapper;

    public List<Destination> getDestinations() {
        return destinationMapper.selectHotDestinations();
    }
    public List<ArticleTag> getTags() {
        return articleTagMapper.selectArticles();
    }
    public List<Destination> getDestinationByName(String name) {
        return destinationMapper.selectDestinationsByName(name.trim());
    }
}
