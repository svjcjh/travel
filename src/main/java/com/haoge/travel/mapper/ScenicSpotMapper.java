package com.haoge.travel.mapper;

import com.haoge.travel.model.ScenicSpot;

public interface ScenicSpotMapper {
    int deleteByPrimaryKey(Integer scenicSpotId);

    int insert(ScenicSpot record);

    int insertSelective(ScenicSpot record);

    ScenicSpot selectByPrimaryKey(Integer scenicSpotId);

    int updateByPrimaryKeySelective(ScenicSpot record);

    int updateByPrimaryKey(ScenicSpot record);
}