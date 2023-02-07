package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.TeacherDto;

@Mapper
public interface TeacherMapper {
	
	@Select("SELECT * FROM teacher " +
			"WHERE deleted = 0 " +
			"ORDER BY  DESC ")
	List<TeacherDto> selectAllTeacherList();


}
