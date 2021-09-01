package com.haoge.travel.mapper;

import com.haoge.travel.model.Destination;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DestinationMapper {
    //获取最热门的八个地点
    List<Destination> selectHotDestinations();

    //根据名字模糊查询热度最高的前五个目的地
    List<Destination> selectDestinationsByName(String name);
}