package com.haoge.travel.mapper;

import com.haoge.travel.model.Response;

public interface ResponseMapper {
    int deleteByPrimaryKey(Integer responseId);

    int insert(Response record);

    int insertSelective(Response record);

    Response selectByPrimaryKey(Integer responseId);

    int updateByPrimaryKeySelective(Response record);

    int updateByPrimaryKeyWithBLOBs(Response record);

    int updateByPrimaryKey(Response record);
}