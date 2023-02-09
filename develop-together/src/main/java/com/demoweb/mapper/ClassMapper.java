package com.demoweb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.demoweb.dto.ApplicationDto;
import com.demoweb.dto.BoardTagDto;
import com.demoweb.dto.ClassDto;
import com.demoweb.dto.ClassTagDto;

@Mapper
public interface ClassMapper {

	@Select("SELECT * FROM class " +
			"WHERE deleted = 0 " +
			"ORDER BY classno DESC ")
	List<ClassDto> selectAllClassList();

	@Select("SELECT memberid, classno, name, region, startdate, enddate, content, classtime, price, rate, crowd " +
			"FROM class " +
			"WHERE classno = #{ classno } AND deleted = 0 ")
	ClassDto selectClassDetail(int classno);

	@Select("SELECT ct.classTagNo, ct.tagNo, ct.classno, ct.classType, t.tagName " +
			"FROM tag t, classtag ct " +
			"WHERE t.tagNo = ct.tagNo " +
			//"AND ct.classno = #{ classno } AND ct.classType = #{ classType } ")
			"AND ct.classno = #{ classno }")
	List<ClassTagDto> selectClassTagByClassNo(@Param("classno") int classno, @Param("classType") String classType);
	
	
	@Select("SELECT ct.classTagNo, ct.tagNo, ct.classno, ct.classType, t.tagName " +
			"FROM tag t, classtag ct " +
			"WHERE t.tagNo = ct.tagNo AND ct.classno = #{ classno } " )
	List<ClassTagDto> selectClassTag(int classno);
	
	
	@Update("UPDATE class " +
			"SET deleted = 1 " +
			"WHERE classno = #{classno} " )
	void deleteClass(int classno);

	
	@Insert("INSERT INTO class (memberid, name, crowd, price, classtime, region, startdate, enddate, content) " +
			"VALUES (#{memberid}, #{name}, #{crowd}, #{price}, #{classtime}, #{region}, #{startdate}, #{enddate}, #{content}) ")
	@Options(useGeneratedKeys = true, keyColumn = "classno", keyProperty = "classno")
	void insertClass(ClassDto register);

	@Insert("INSERT INTO classtag (tagno, classno) " +
			"VALUES (#{tagNo}, #{classno})")
	void insertClassTags(ClassTagDto classTagDto);

	@Update("UPDATE class " +
			"SET name = #{name}, crowd = #{crowd}, price = #{price}, region = #{region}, classtime = #{classtime},  startdate = #{startdate}, enddate = #{enddate}, content = #{content} " +
			"WHERE classno = #{classno}")
	void editClass(ClassDto register);

	@Delete("DELETE FROM classtag " +
			"WHERE classno = #{ classno }")
	void deleteTags(int classno);

	@Insert("INSERT INTO application (classno, memberid) " +
			"VALUES (#{classno}, #{memberid}) ")
	@Options(useGeneratedKeys = true, keyColumn = "applicationno", keyProperty = "applicationno")
	void applicationClass(ApplicationDto apply);

}
