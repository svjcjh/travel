package com.haoge.travel.mapper;

import com.haoge.travel.model.TravelLine;

public interface TravelLineMapper {
    int deleteByPrimaryKey(Integer lineId);

    int insert(TravelLine record);

    int insertSelective(TravelLine record);

    TravelLine selectByPrimaryKey(Integer lineId);

    int updateByPrimaryKeySelective(TravelLine record);

    int updateByPrimaryKey(TravelLine record);
}