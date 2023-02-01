package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.ClassDto;

@Mapper
public interface ClassMapper {

	@Select("SELECT * FROM class")
	List<ClassDto> selectAllClassList();

	@Select("SELECT classno, name, startdate, enddate, content, classtime, price, rate, crowd " +
			"FROM class " +
			"WHERE classno = #{ classno } AND deleted = '0' ")
	List<ClassDto> selectClassDetail(int classno);
	
}
