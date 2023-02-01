package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.demoweb.dto.BoardTagDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.ClassTagDto;

@Mapper
public interface ClassMapper {

	@Select("SELECT * FROM class")
	List<ClassDto> selectAllClassList();

	@Select("SELECT classno, name, region, startdate, enddate, content, classtime, price, rate, crowd " +
			"FROM class " +
			"WHERE classno = #{ classno } AND deleted = '0' ")
	ClassDto selectClassDetail(int classno);

	
	@Select("SELECT ct.classTagNo, ct.tagNo, ct.classno, ct.classType, t.tagName " +
			"FROM tag t, classtag ct " +
			"WHERE t.tagNo = ct.tagNo " +
			"AND ct.classno = #{ classno } AND ct.classType = #{ classType } ")
	List<ClassTagDto> selectClassTagByClassNo(@Param("classno") int classno, @Param("classType") String classType);
	
	@Delete("DELETE from class " +
			"WHERE classno = #{classno} ")
	void deleteClass(int classno);
	
}
